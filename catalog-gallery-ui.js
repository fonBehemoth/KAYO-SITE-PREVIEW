(() => {
  const labels = {
    en: ['Previous photo', 'Next photo', 'Photo'],
    uk: ['Попереднє фото', 'Наступне фото', 'Фото'],
    cs: ['Předchozí fotografie', 'Další fotografie', 'Fotografie'],
    pl: ['Poprzednie zdjęcie', 'Następne zdjęcie', 'Zdjęcie'],
    de: ['Vorheriges Foto', 'Nächstes Foto', 'Foto'],
    fr: ['Photo précédente', 'Photo suivante', 'Photo'],
    es: ['Foto anterior', 'Foto siguiente', 'Foto'],
  };
  const zoomLabels = {
    en: ['Enlarge photo', 'Close enlarged photo', 'Zoom in', 'Fit photo'],
    uk: ['Збільшити фото', 'Закрити збільшене фото', 'Наблизити', 'Показати повністю'],
    cs: ['Zvětšit fotografii', 'Zavřít zvětšenou fotografii', 'Přiblížit', 'Zobrazit celé'],
    pl: ['Powiększ zdjęcie', 'Zamknij powiększone zdjęcie', 'Przybliż', 'Pokaż całe'],
    de: ['Foto vergrößern', 'Vergrößertes Foto schließen', 'Vergrößern', 'Ganzes Foto zeigen'],
    fr: ['Agrandir la photo', 'Fermer la photo agrandie', 'Zoomer', 'Afficher en entier'],
    es: ['Ampliar foto', 'Cerrar foto ampliada', 'Acercar', 'Ver foto completa'],
  };
  const states = new WeakMap();
  let zoomModal = null;
  let zoomSource = null;

  function zoomElements() {
    if (zoomModal) return zoomModal;
    zoomModal = document.createElement('div');
    zoomModal.className = 'kayo-zoom';
    zoomModal.hidden = true;
    zoomModal.innerHTML = `
      <button class="kayo-zoom-backdrop" type="button" data-zoom-close aria-label="Close" tabindex="-1"></button>
      <section class="kayo-zoom-dialog" role="dialog" aria-modal="true" aria-label="Product photo">
        <div class="kayo-zoom-toolbar">
          <span class="kayo-zoom-counter" aria-live="polite"></span>
          <button class="kayo-zoom-toggle" type="button"></button>
          <button class="kayo-zoom-close" type="button" data-zoom-close aria-label="Close"><span aria-hidden="true"></span></button>
        </div>
        <div class="kayo-zoom-viewport"><img alt=""></div>
        <div class="kayo-zoom-navigation">
          <button class="kayo-zoom-prev" type="button"></button>
          <button class="kayo-zoom-next" type="button"></button>
        </div>
      </section>`;
    zoomModal.querySelectorAll('[data-zoom-close]').forEach(button => button.addEventListener('click', closeZoom));
    zoomModal.querySelector('.kayo-zoom-toggle').addEventListener('click', toggleZoom);
    zoomModal.querySelector('.kayo-zoom-prev').addEventListener('click', () => zoomSelect(-1));
    zoomModal.querySelector('.kayo-zoom-next').addEventListener('click', () => zoomSelect(1));
    zoomModal.querySelector('.kayo-zoom-viewport img').addEventListener('click', toggleZoom);
    const viewport = zoomModal.querySelector('.kayo-zoom-viewport');
    let drag = null;
    viewport.addEventListener('pointerdown', event => {
      if (event.pointerType !== 'mouse' || !zoomModal.classList.contains('is-zoomed')) return;
      drag = { x: event.clientX, y: event.clientY, left: viewport.scrollLeft, top: viewport.scrollTop, moved: false };
      viewport.setPointerCapture(event.pointerId);
    });
    viewport.addEventListener('pointermove', event => {
      if (!drag) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 5) drag.moved = true;
      viewport.scrollLeft = drag.left - dx;
      viewport.scrollTop = drag.top - dy;
    });
    viewport.addEventListener('pointerup', () => {
      if (drag?.moved) zoomModal.dataset.dragged = 'true';
      drag = null;
    });
    viewport.addEventListener('pointercancel', () => { drag = null; });
    document.body.append(zoomModal);
    return zoomModal;
  }

  function syncZoom(reset = false) {
    if (!zoomModal || zoomModal.hidden || !zoomSource) return;
    const state = states.get(zoomSource);
    if (!state) return;
    const [previousText, nextText, photoText] = labels[state.locale] || labels.en;
    const [enlargeText, closeText, zoomInText, fitText] = zoomLabels[state.locale] || zoomLabels.en;
    const image = zoomModal.querySelector('.kayo-zoom-viewport img');
    image.src = state.images[state.index];
    image.alt = `${state.title} — ${photoText.toLowerCase()} ${state.index + 1}`;
    image.setAttribute('aria-label', zoomModal.classList.contains('is-zoomed') ? fitText : zoomInText);
    zoomModal.querySelector('.kayo-zoom-counter').textContent = `${state.index + 1} / ${state.images.length}`;
    zoomModal.querySelector('.kayo-zoom-close').setAttribute('aria-label', closeText);
    zoomModal.querySelector('.kayo-zoom-backdrop').setAttribute('aria-label', closeText);
    const toggle = zoomModal.querySelector('.kayo-zoom-toggle');
    toggle.textContent = zoomModal.classList.contains('is-zoomed') ? fitText : zoomInText;
    toggle.setAttribute('aria-label', toggle.textContent);
    const multiple = state.images.length > 1;
    for (const [selector, text] of [['.kayo-zoom-prev', previousText], ['.kayo-zoom-next', nextText]]) {
      const button = zoomModal.querySelector(selector);
      button.hidden = !multiple;
      button.textContent = text;
      button.setAttribute('aria-label', text);
    }
    zoomSource.querySelector('.kayo-gallery-stage img').setAttribute('aria-label', enlargeText);
    if (reset) {
      zoomModal.classList.remove('is-zoomed');
      const viewport = zoomModal.querySelector('.kayo-zoom-viewport');
      viewport.scrollTo(0, 0);
      toggle.textContent = zoomInText;
      image.setAttribute('aria-label', zoomInText);
    }
  }

  function openZoom(modal) {
    zoomElements();
    zoomSource = modal;
    zoomModal.hidden = false;
    zoomModal.classList.remove('is-zoomed');
    document.body.classList.add('zoom-open');
    syncZoom(true);
    zoomModal.querySelector('.kayo-zoom-close').focus();
  }

  function closeZoom() {
    if (!zoomModal || zoomModal.hidden) return;
    zoomModal.hidden = true;
    zoomModal.classList.remove('is-zoomed');
    document.body.classList.remove('zoom-open');
    zoomSource?.querySelector('.kayo-gallery-stage img').focus();
    zoomSource = null;
  }

  function toggleZoom() {
    if (!zoomModal || zoomModal.hidden) return;
    if (zoomModal.dataset.dragged === 'true') {
      delete zoomModal.dataset.dragged;
      return;
    }
    zoomModal.classList.toggle('is-zoomed');
    syncZoom();
    if (zoomModal.classList.contains('is-zoomed')) {
      const viewport = zoomModal.querySelector('.kayo-zoom-viewport');
      viewport.scrollTo((viewport.scrollWidth - viewport.clientWidth) / 2, (viewport.scrollHeight - viewport.clientHeight) / 2);
    }
  }

  function zoomSelect(step) {
    if (!zoomSource) return;
    select(zoomSource, states.get(zoomSource).index + step);
    zoomModal.classList.remove('is-zoomed');
    syncZoom(true);
  }

  function render(modal, rebuildThumbnails = false) {
    const state = states.get(modal);
    if (!state) return;
    const [previousText, nextText, photoText] = labels[state.locale] || labels.en;
    const { images, index, title } = state;
    const stageImage = modal.querySelector('.kayo-gallery-stage img');
    stageImage.src = images[index];
    stageImage.alt = `${title} — ${photoText.toLowerCase()} ${index + 1}`;
    stageImage.setAttribute('aria-label', (zoomLabels[state.locale] || zoomLabels.en)[0]);
    const multiple = images.length > 1;
    modal.querySelector('.kayo-gallery-prev').hidden = !multiple;
    modal.querySelector('.kayo-gallery-next').hidden = !multiple;
    modal.querySelector('.kayo-gallery-prev').setAttribute('aria-label', previousText);
    modal.querySelector('.kayo-gallery-next').setAttribute('aria-label', nextText);
    const counter = modal.querySelector('.kayo-gallery-counter');
    counter.hidden = !multiple;
    counter.textContent = `${index + 1} / ${images.length}`;
    const thumbnails = modal.querySelector('.kayo-gallery-thumbnails');
    thumbnails.hidden = !multiple;
    if (rebuildThumbnails || thumbnails.children.length !== images.length) {
      thumbnails.replaceChildren(...images.map((url, photoIndex) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'kayo-gallery-thumbnail';
        const image = document.createElement('img');
        image.src = url;
        image.alt = '';
        image.loading = 'lazy';
        image.decoding = 'async';
        button.append(image);
        button.addEventListener('click', () => select(modal, photoIndex));
        return button;
      }));
    }
    [...thumbnails.children].forEach((button, photoIndex) => {
      button.setAttribute('aria-label', `${photoText} ${photoIndex + 1} / ${images.length}`);
      button.setAttribute('aria-pressed', String(photoIndex === index));
      button.classList.toggle('active', photoIndex === index);
    });
    const activeThumbnail = thumbnails.children[index];
    if (activeThumbnail && !modal.hidden) {
      thumbnails.scrollTo({ left: activeThumbnail.offsetLeft - thumbnails.offsetLeft - (thumbnails.clientWidth - activeThumbnail.clientWidth) / 2, behavior: 'auto' });
    }
    syncZoom();
  }

  function select(modal, index) {
    const state = states.get(modal);
    if (!state || state.images.length < 2) return;
    state.index = (index + state.images.length) % state.images.length;
    render(modal);
  }

  function decorate(modal) {
    if (states.has(modal)) return;
    const media = modal.querySelector('.product-modal-media');
    media.classList.add('kayo-gallery');
    media.innerHTML = `
      <div class="kayo-gallery-stage">
        <button class="kayo-gallery-prev" type="button" aria-label="Previous photo">‹</button>
        <img alt="">
        <button class="kayo-gallery-next" type="button" aria-label="Next photo">›</button>
        <span class="kayo-gallery-counter" aria-live="polite"></span>
      </div>
      <div class="kayo-gallery-thumbnails" aria-label="Product photos"></div>`;
    states.set(modal, { product: null, images: [], index: 0, title: '', locale: 'en' });
    media.querySelector('.kayo-gallery-prev').addEventListener('click', () => select(modal, states.get(modal).index - 1));
    media.querySelector('.kayo-gallery-next').addEventListener('click', () => select(modal, states.get(modal).index + 1));
    const stage = media.querySelector('.kayo-gallery-stage');
    const stageImage = stage.querySelector('img');
    stageImage.tabIndex = 0;
    stageImage.setAttribute('role', 'button');
    stageImage.addEventListener('click', () => {
      if (stage.dataset.swiped === 'true') {
        delete stage.dataset.swiped;
        return;
      }
      openZoom(modal);
    });
    stageImage.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openZoom(modal);
    });
    let start = null;
    stage.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' || event.target.closest('button')) return;
      start = { x: event.clientX, y: event.clientY, id: event.pointerId };
    });
    stage.addEventListener('pointerup', (event) => {
      if (!start || event.pointerId !== start.id) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      start = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        stage.dataset.swiped = 'true';
        window.setTimeout(() => { delete stage.dataset.swiped; }, 350);
        select(modal, states.get(modal).index + (dx < 0 ? 1 : -1));
      }
    });
    stage.addEventListener('pointercancel', () => { start = null; });
  }

  function update(modal, product, title, locale) {
    decorate(modal);
    const state = states.get(modal);
    const legacy = window.KayoProductGallery?.[product.image] || [];
    const images = product.images?.length ? product.images : legacy.length ? legacy : [product.imageUrl || `assets/${product.image}.webp`];
    if (state.product !== product) state.index = 0;
    state.product = product;
    state.images = [...new Set(images.filter((url) => typeof url === 'string' && url))];
    state.index = Math.min(state.index, state.images.length - 1);
    state.title = title;
    state.locale = locale;
    render(modal, true);
  }

  document.addEventListener('keydown', (event) => {
    if (zoomModal && !zoomModal.hidden) {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopImmediatePropagation();
        closeZoom();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        event.stopImmediatePropagation();
        zoomSelect(event.key === 'ArrowRight' ? 1 : -1);
      } else if (event.key === '+' || event.key === '=') {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!zoomModal.classList.contains('is-zoomed')) toggleZoom();
      } else if (event.key === '-' && zoomModal.classList.contains('is-zoomed')) {
        event.preventDefault();
        event.stopImmediatePropagation();
        toggleZoom();
      } else if (event.key === 'Tab') {
        const controls = [...zoomModal.querySelectorAll('.kayo-zoom-dialog button:not([hidden])')];
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
      return;
    }
    const modal = document.querySelector('.product-modal:not([hidden])');
    if (!modal || !states.has(modal) || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    if (event.target.closest('input, textarea, select')) return;
    event.preventDefault();
    select(modal, states.get(modal).index + (event.key === 'ArrowRight' ? 1 : -1));
  }, true);

  window.KayoGalleryUI = { decorate, update };
})();
