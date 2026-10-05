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
  const states = new WeakMap();

  function render(modal, rebuildThumbnails = false) {
    const state = states.get(modal);
    if (!state) return;
    const [previousText, nextText, photoText] = labels[state.locale] || labels.en;
    const { images, index, title } = state;
    const stageImage = modal.querySelector('.kayo-gallery-stage img');
    stageImage.src = images[index];
    stageImage.alt = `${title} — ${photoText.toLowerCase()} ${index + 1}`;
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
    const modal = document.querySelector('.product-modal:not([hidden])');
    if (!modal || !states.has(modal) || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    if (event.target.closest('input, textarea, select')) return;
    event.preventDefault();
    select(modal, states.get(modal).index + (event.key === 'ArrowRight' ? 1 : -1));
  });

  window.KayoGalleryUI = { decorate, update };
})();
