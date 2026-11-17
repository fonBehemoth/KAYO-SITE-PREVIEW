(() => {
  const labels = {
    ru: ["Все товары", "Перчатки", "Защита", "Снарядное оборудование", "Сумки / одежда", "Аксессуары"],
    en: ['All products', 'Gloves', 'Protection', 'Training equipment', 'Sports bags / apparel', 'Accessories'],
    uk: ['Всі товари', 'Рукавиці', 'Захист', 'Снарядне обладнання', 'Спортивні сумки / одяг', 'Аксесуари'],
    cs: ['Všechny produkty', 'Rukavice', 'Ochrana', 'Tréninkové vybavení', 'Sportovní tašky / oblečení', 'Doplňky'],
    pl: ['Wszystkie produkty', 'Rękawice', 'Ochraniacze', 'Sprzęt treningowy', 'Torby sportowe / odzież', 'Akcesoria'],
    de: ['Alle Produkte', 'Handschuhe', 'Schutz', 'Trainingsausrüstung', 'Sporttaschen / Bekleidung', 'Zubehör'],
    fr: ['Tous les produits', 'Gants', 'Protection', 'Matériel d’entraînement', 'Sacs de sport / vêtements', 'Accessoires'],
    es: ['Todos los productos', 'Guantes', 'Protección', 'Equipo de entrenamiento', 'Bolsas deportivas / ropa', 'Accesorios'],
  };
  const searchCopy = {
    ru: ["Поиск", "Поиск KAYO", "Название или артикул", "Введите название товара или страницы.", "Ничего не найдено.", "Товары", "Страницы", "Закрыть поиск"],
    en: ['Search', 'Search KAYO', 'Product name or article number', 'Start typing to find a product or page.', 'No results found.', 'Products', 'Pages', 'Close search'],
    uk: ['Пошук', 'Пошук KAYO', 'Назва товару або артикул', 'Введіть назву товару або сторінки.', 'Нічого не знайдено.', 'Товари', 'Сторінки', 'Закрити пошук'],
    cs: ['Hledat', 'Hledat na KAYO', 'Název nebo kód výrobku', 'Zadejte název výrobku nebo stránky.', 'Nic nebylo nalezeno.', 'Produkty', 'Stránky', 'Zavřít hledání'],
    pl: ['Szukaj', 'Szukaj w KAYO', 'Nazwa lub numer produktu', 'Wpisz nazwę produktu lub strony.', 'Brak wyników.', 'Produkty', 'Strony', 'Zamknij wyszukiwanie'],
    de: ['Suche', 'KAYO durchsuchen', 'Produktname oder Artikelnummer', 'Produkt oder Seite eingeben.', 'Keine Ergebnisse gefunden.', 'Produkte', 'Seiten', 'Suche schließen'],
    fr: ['Rechercher', 'Rechercher sur KAYO', 'Nom ou référence du produit', 'Saisissez un produit ou une page.', 'Aucun résultat.', 'Produits', 'Pages', 'Fermer la recherche'],
    es: ['Buscar', 'Buscar en KAYO', 'Nombre o referencia del producto', 'Escribe un producto o una página.', 'No hay resultados.', 'Productos', 'Páginas', 'Cerrar búsqueda'],
  };
  const slugs = ['', 'gloves', 'protection', 'equipment', 'bags', 'accessories'];
  const privacyCopy = {
    en: { title: 'Privacy and site information', close: 'Close', paragraphs: [
      'This KAYO website is a preview. Product photos, descriptions, availability, delivery terms and contact details are subject to change. Please confirm current information with KAYO before relying on it.',
      'This preview does not accept orders or payments. The information shown here is not a binding offer.',
      'This notice is not a complete privacy policy. Before the website goes live, its operator must publish a policy identifying who processes personal data, for what purposes and how to contact them.'
    ] },
    uk: { title: 'Конфіденційність та інформація про сайт', close: 'Закрити', paragraphs: [
      'Це попередня версія сайту KAYO. Фото, описи товарів, наявність, умови доставки та контактні дані можуть змінюватися. Уточнюйте актуальну інформацію в KAYO, перш ніж покладатися на неї.',
      'У цій версії неможливо оформити замовлення або здійснити оплату. Розміщена інформація не є обов’язковою пропозицією.',
      'Це повідомлення не є повною політикою конфіденційності. До запуску сайту його оператор має опублікувати політику із зазначенням того, хто обробляє персональні дані, з якою метою та як із ним зв’язатися.'
    ] },
    cs: { title: 'Soukromí a informace o webu', close: 'Zavřít', paragraphs: [
      'Tento web KAYO je ukázková verze. Fotografie, popisy produktů, dostupnost, podmínky doručení a kontaktní údaje se mohou změnit. Aktuální informace si před použitím ověřte u KAYO.',
      'V této ukázkové verzi nelze zadávat objednávky ani provádět platby. Uvedené informace nejsou závaznou nabídkou.',
      'Toto upozornění není úplnými zásadami ochrany osobních údajů. Před spuštěním webu musí jeho provozovatel zveřejnit, kdo osobní údaje zpracovává, za jakým účelem a jak jej kontaktovat.'
    ] },
    pl: { title: 'Prywatność i informacje o stronie', close: 'Zamknij', paragraphs: [
      'Ta strona KAYO jest wersją demonstracyjną. Zdjęcia i opisy produktów, dostępność, warunki dostawy oraz dane kontaktowe mogą się zmienić. Przed skorzystaniem z informacji potwierdź je w KAYO.',
      'W tej wersji nie można składać zamówień ani dokonywać płatności. Zamieszczone informacje nie stanowią wiążącej oferty.',
      'Ta informacja nie jest pełną polityką prywatności. Przed uruchomieniem strony jej operator musi opublikować politykę wskazującą, kto przetwarza dane osobowe, w jakich celach i jak się z nim skontaktować.'
    ] },
    de: { title: 'Datenschutz und Website-Informationen', close: 'Schließen', paragraphs: [
      'Diese KAYO-Website ist eine Vorschau. Produktfotos und -beschreibungen, Verfügbarkeit, Lieferbedingungen und Kontaktdaten können sich ändern. Bitte bestätigen Sie aktuelle Angaben bei KAYO, bevor Sie sich darauf verlassen.',
      'In dieser Vorschau können keine Bestellungen oder Zahlungen vorgenommen werden. Die angezeigten Informationen sind kein verbindliches Angebot.',
      'Dieser Hinweis ist keine vollständige Datenschutzerklärung. Vor dem Start der Website muss der Betreiber veröffentlichen, wer personenbezogene Daten zu welchen Zwecken verarbeitet und wie er erreichbar ist.'
    ] },
    fr: { title: 'Confidentialité et informations sur le site', close: 'Fermer', paragraphs: [
      'Ce site KAYO est une version de démonstration. Les photos et descriptions des produits, leur disponibilité, les conditions de livraison et les coordonnées peuvent changer. Veuillez vérifier les informations actuelles auprès de KAYO avant de vous y fier.',
      'Cette version ne permet ni commande ni paiement. Les informations affichées ne constituent pas une offre ferme.',
      'Cet avis ne constitue pas une politique de confidentialité complète. Avant la mise en ligne, l’exploitant doit publier une politique précisant qui traite les données personnelles, à quelles fins et comment le contacter.'
    ] },
    es: { title: 'Privacidad e información del sitio', close: 'Cerrar', paragraphs: [
      'Este sitio de KAYO es una versión de demostración. Las fotos y descripciones de los productos, la disponibilidad, las condiciones de entrega y los datos de contacto pueden cambiar. Confirma la información actual con KAYO antes de utilizarla.',
      'Esta versión no permite realizar pedidos ni pagos. La información mostrada no constituye una oferta vinculante.',
      'Este aviso no es una política de privacidad completa. Antes del lanzamiento, el operador del sitio debe publicar quién trata los datos personales, con qué fines y cómo contactarlo.'
    ] },
  };
  let privacyOpener = null;
  let subscribeOpener = null;
  let scrollFrame = 0;
  let originalScrollBehavior = null;
  const stopArrowScroll = () => {
    if (!scrollFrame) return;
    cancelAnimationFrame(scrollFrame);
    scrollFrame = 0;
    document.documentElement.style.scrollBehavior = originalScrollBehavior;
    originalScrollBehavior = null;
  };
  const subscribeCopy = {
    en: { title: 'Subscribe to KAYO news', email: 'Email address', consent: 'I would like to receive KAYO news by email.', note: 'Preview form: no information is sent or saved yet.', submit: 'Subscribe', pending: 'The form is ready, but no request was sent. Email delivery will be connected later.', close: 'Close' },
    uk: { title: 'Підписка на новини KAYO', email: 'Електронна пошта', consent: 'Хочу отримувати новини KAYO електронною поштою.', note: 'Попередня форма: дані поки не надсилаються і не зберігаються.', submit: 'Підписатись', pending: 'Форма готова, але заявку не надіслано. Надсилання підключимо пізніше.', close: 'Закрити' },
    cs: { title: 'Odběr novinek KAYO', email: 'E-mailová adresa', consent: 'Chci dostávat novinky KAYO e-mailem.', note: 'Ukázkový formulář: údaje se zatím neodesílají ani neukládají.', submit: 'Odebírat', pending: 'Formulář je připraven, ale žádost nebyla odeslána. Odesílání připojíme později.', close: 'Zavřít' },
    pl: { title: 'Subskrypcja nowości KAYO', email: 'Adres e-mail', consent: 'Chcę otrzymywać nowości KAYO e-mailem.', note: 'Formularz demonstracyjny: dane nie są jeszcze wysyłane ani zapisywane.', submit: 'Zapisz się', pending: 'Formularz jest gotowy, ale zgłoszenie nie zostało wysłane. Wysyłkę podłączymy później.', close: 'Zamknij' },
    de: { title: 'KAYO Neuigkeiten abonnieren', email: 'E-Mail-Adresse', consent: 'Ich möchte KAYO Neuigkeiten per E-Mail erhalten.', note: 'Vorschauformular: Daten werden noch nicht gesendet oder gespeichert.', submit: 'Abonnieren', pending: 'Das Formular ist bereit, aber die Anmeldung wurde nicht versendet. Der Versand wird später eingerichtet.', close: 'Schließen' },
    fr: { title: 'S’abonner aux actualités KAYO', email: 'Adresse e-mail', consent: 'Je souhaite recevoir les actualités KAYO par e-mail.', note: 'Formulaire de démonstration : aucune donnée n’est encore envoyée ni enregistrée.', submit: 'S’abonner', pending: 'Le formulaire est prêt, mais la demande n’a pas été envoyée. L’envoi sera ajouté plus tard.', close: 'Fermer' },
    es: { title: 'Suscribirse a las noticias de KAYO', email: 'Correo electrónico', consent: 'Quiero recibir noticias de KAYO por correo electrónico.', note: 'Formulario de prueba: los datos todavía no se envían ni se guardan.', submit: 'Suscribirse', pending: 'El formulario está listo, pero la solicitud no se ha enviado. El envío se añadirá más adelante.', close: 'Cerrar' },
  };

  const locale = () => {
    const selected = document.querySelector('#language')?.value?.toLowerCase();
    const htmlLocale = document.documentElement.lang?.toLowerCase();
    return labels[selected] ? selected : labels[htmlLocale] ? htmlLocale : 'en';
  };

  function closeMenus(except) {
    document.querySelectorAll('header.menu-open').forEach((header) => {
      if (header !== except && !(except instanceof Element && header.querySelector('.catalog-nav')?.contains(except))) {
        header.classList.remove('menu-open');
        header.querySelector('.hamburger')?.setAttribute('aria-expanded', 'false');
      }
    });
    document.querySelectorAll('.catalog-nav.is-open').forEach((menu) => {
      if (menu !== except) {
        menu.classList.remove('is-open');
        menu.querySelector('.catalog-toggle')?.setAttribute('aria-expanded', 'false');
      }
    });
    document.querySelectorAll('.language-menu-control.is-open').forEach((menu) => {
      if (menu !== except) {
        menu.classList.remove('is-open');
        menu.querySelector('.language-trigger')?.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function enhanceLanguage() {
    const select = document.querySelector('#language');
    if (!select || select.closest('.language-menu-control')) return;
    const label = select.closest('label.language');
    if (!label) return;

    const control = document.createElement('div');
    control.className = 'language language-menu-control';
    const caption = label.querySelector('.sr-only');
    label.replaceWith(control);
    if (caption) control.append(caption);
    control.append(select);
    select.hidden = true;

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'language-trigger';
    trigger.setAttribute('aria-haspopup', 'menu');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-label', caption?.textContent || 'Language');
    const code = document.createElement('span');
    const chevron = document.createElement('span');
    chevron.className = 'language-chevron';
    chevron.setAttribute('aria-hidden', 'true');
    trigger.append(code, chevron);
    const menu = document.createElement('div');
    menu.className = 'language-menu';
    menu.id = 'language-menu';
    menu.setAttribute('role', 'menu');
    trigger.setAttribute('aria-controls', menu.id);

    const sync = () => {
      code.textContent = select.selectedOptions[0]?.textContent || select.value;
      trigger.setAttribute('aria-label', caption?.textContent || 'Language');
      menu.querySelectorAll('[data-language]').forEach((option) => {
        option.setAttribute('aria-checked', String(option.dataset.language === select.value));
      });
    };
    const open = () => {
      closeMenus(control);
      control.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
      control.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    };
    [...select.options].forEach((option) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'language-option';
      item.dataset.language = option.value;
      item.setAttribute('role', 'menuitemradio');
      item.textContent = option.textContent;
      item.addEventListener('click', (event) => {
        if (select.value !== option.value) {
          select.value = option.value;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
        sync();
        close();
        if (event.detail === 0) trigger.focus({ preventScroll: true });
        else item.blur();
      });
      menu.append(item);
    });
    trigger.addEventListener('click', () => {
      if (control.classList.contains('is-open')) close();
      else open();
    });
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        open();
        const items = menu.querySelectorAll('.language-option');
        (event.key === 'ArrowDown' ? items[0] : items[items.length - 1]).focus();
      }
    });
    menu.addEventListener('keydown', (event) => {
      const items = [...menu.querySelectorAll('.language-option')];
      const index = items.indexOf(document.activeElement);
      if (event.key === 'Escape') { event.preventDefault(); close(); trigger.focus(); }
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        items[(index + (event.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length].focus();
      }
    });
    control.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'mouse' || event.pointerType === 'pen') close();
    });
    control.addEventListener('focusout', (event) => {
      if (!control.contains(event.relatedTarget)) close();
    });
    select.addEventListener('change', sync);
    control.append(trigger, menu);
    sync();
  }

  function ensureHeroMotion() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const ring = document.querySelector('.ring-text');
    const track = document.querySelector('.marquee-track');
    if (ring && !reducedMotion.matches) {
      const initial = getComputedStyle(ring).transform;
      window.setTimeout(() => {
        if (reducedMotion.matches || document.hidden || getComputedStyle(ring).transform !== initial) return;
        ring.style.animation = 'none';
        const started = performance.now();
        const rotate = (now) => {
          if (reducedMotion.matches) {
            ring.style.transform = '';
            ring.style.animation = '';
            return;
          }
          ring.style.transform = `rotate(${(((now - started) % 14000) / 14000) * 360}deg)`;
          requestAnimationFrame(rotate);
        };
        requestAnimationFrame(rotate);
      }, 400);
    }

    const group = track?.firstElementChild;
    if (!group) return;
    let distance = group.offsetWidth;
    let elapsed = 0;
    let previous = 0;
    let frame = 0;
    let visible = true;
    const tick = (now) => {
      frame = 0;
      if (!visible || document.hidden || reducedMotion.matches) return;
      if (previous) elapsed += now - previous;
      previous = now;
      track.style.transform = `translate3d(${-((elapsed % 24000) / 24000) * distance}px,0,0)`;
      frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!frame && visible && !document.hidden && !reducedMotion.matches) frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
      if (reducedMotion.matches) track.style.transform = '';
    };
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    }).observe(track);
    window.addEventListener('resize', () => { distance = group.offsetWidth; });
    document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
    reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) stop(); else start(); });
    start();
  }

  let searchOpener = null;
  let catalogLoad = null;
  const normalizeSearch = (value) => String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().trim();
  const searchableValues = (value) => {
    if (Array.isArray(value)) return value.flatMap(searchableValues);
    if (value && typeof value === 'object') return Object.values(value).flatMap(searchableValues);
    return typeof value === 'string' ? [value] : [];
  };
  const searchPages = [
    ['catalog.html', 'catalog', 'Catalog'],
    ['categories.html', 'categoriesNav', 'Categories'],
    ['hits.html', 'hitsNav', 'Best sellers'],
    ['offers.html', 'sales', 'Offers'],
    ['where-to-buy.html', 'whereNav', 'Where to buy'],
    ['news.html', 'newsNav', 'News'],
    ['about.html', 'company', 'Company'],
    ['contact.html', 'contacts', 'Contacts'],
  ];
  const searchText = () => searchCopy[locale()] || searchCopy.en;
  const pageTitle = (href, key, fallback) => {
    const visibleLink = document.querySelector(`header nav a[href="${href}"], footer a[href="${href}"]`);
    if (visibleLink?.textContent?.trim()) return visibleLink.textContent.trim();
    const translated = window.KayoI18n?.t(key);
    return translated && translated !== key ? translated : fallback;
  };

  function loadCatalogForSearch() {
    if (window.KayoCatalog) return Promise.resolve(window.KayoCatalog);
    if (catalogLoad) return catalogLoad;
    catalogLoad = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'catalog.js?v=20261013-search';
      script.onload = () => resolve(window.KayoCatalog);
      script.onerror = () => reject(new Error('Catalog search index could not be loaded'));
      document.body.append(script);
    });
    return catalogLoad;
  }

  function ensureSearchDialog() {
    let dialog = document.querySelector('.site-search-modal');
    if (dialog) return dialog;
    dialog = document.createElement('div');
    dialog.className = 'site-search-modal';
    dialog.hidden = true;
    dialog.innerHTML = '<button class="site-search-backdrop" type="button" data-search-close tabindex="-1"></button><section class="site-search-panel" role="dialog" aria-modal="true" aria-labelledby="site-search-title"><button class="site-search-close" type="button" data-search-close>×</button><h2 id="site-search-title"></h2><label class="site-search-field"><span class="sr-only"></span><input type="search" autocomplete="off"></label><p class="site-search-status" role="status" aria-live="polite"></p><div class="site-search-results"></div></section>';
    dialog.addEventListener('click', (event) => {
      if (event.target.closest('[data-search-close]')) closeSearch();
    });
    dialog.querySelector('input').addEventListener('input', () => renderSearch(dialog));
    dialog.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { event.preventDefault(); closeSearch(); }
      if (event.key !== 'Tab') return;
      const controls = [...dialog.querySelectorAll('.site-search-panel button, .site-search-panel input, .site-search-panel a')];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    document.body.append(dialog);
    return dialog;
  }

  function renderSearch(dialog) {
    if (dialog.hidden) return;
    const copy = searchText();
    const input = dialog.querySelector('input');
    dialog.querySelector('#site-search-title').textContent = copy[1];
    dialog.querySelector('.site-search-field span').textContent = copy[0];
    input.placeholder = copy[2];
    input.setAttribute('aria-label', copy[2]);
    dialog.querySelector('.site-search-close').setAttribute('aria-label', copy[7]);
    dialog.querySelector('.site-search-backdrop').setAttribute('aria-label', copy[7]);
    const status = dialog.querySelector('.site-search-status');
    const container = dialog.querySelector('.site-search-results');
    container.replaceChildren();
    const query = normalizeSearch(input.value);
    if (!query) { status.textContent = copy[3]; return; }
    const terms = query.split(/\s+/);
    const products = (window.KayoCatalog?.products || []).filter((product) => {
      const title = product.title || window.KayoI18n?.t(product.key) || '';
      const category = labels[locale()]?.[slugs.indexOf(product.section)] || '';
      const haystack = normalizeSearch([title, product.section, category, ...searchableValues(product.specifications), ...searchableValues(product.description), ...searchableValues(product.variants)].join(' '));
      return terms.every((term) => haystack.includes(term));
    }).slice(0, 12);
    const pages = searchPages.filter(([href, key, fallback]) => {
      const haystack = normalizeSearch(`${pageTitle(href, key, fallback)} ${fallback}`);
      return terms.every((term) => haystack.includes(term));
    });
    const addGroup = (heading, items) => {
      if (!items.length) return;
      const group = document.createElement('section');
      group.className = 'site-search-group';
      const title = document.createElement('h3');
      title.textContent = heading;
      group.append(title, ...items);
      container.append(group);
    };
    addGroup(copy[5], products.map((product) => {
      const link = document.createElement('a');
      const slug = product.slug || product.image?.replace('/', '-');
      link.href = `catalog.html?product=${encodeURIComponent(slug)}#${encodeURIComponent(product.section || '')}`;
      const photo = document.createElement('img');
      photo.src = product.imageUrl || `assets/${product.image}.webp`;
      photo.alt = '';
      photo.loading = 'lazy';
      const title = document.createElement('span');
      title.textContent = product.title || window.KayoI18n?.t(product.key) || slug;
      link.append(photo, title);
      return link;
    }));
    addGroup(copy[6], pages.map(([href, key, fallback]) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = pageTitle(href, key, fallback);
      return link;
    }));
    status.textContent = container.children.length ? '' : copy[4];
  }

  function closeSearch() {
    const dialog = document.querySelector('.site-search-modal');
    if (!dialog || dialog.hidden) return;
    dialog.hidden = true;
    document.body.classList.remove('search-open');
    if (searchOpener?.isConnected) searchOpener.focus();
    searchOpener = null;
  }

  function enhanceSearch() {
    document.querySelectorAll('header .search').forEach((icon) => {
      if (icon.matches('button.search-trigger')) {
        icon.setAttribute('aria-label', searchText()[0]);
        return;
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'search search-trigger';
      button.setAttribute('aria-label', searchText()[0]);
      button.setAttribute('aria-haspopup', 'dialog');
      icon.replaceWith(button);
      button.addEventListener('click', () => {
        searchOpener = button;
        const dialog = ensureSearchDialog();
        dialog.hidden = false;
        document.body.classList.add('search-open');
        const input = dialog.querySelector('input');
        input.value = '';
        renderSearch(dialog);
        input.focus();
        loadCatalogForSearch().then(() => renderSearch(dialog)).catch(() => renderSearch(dialog));
      });
    });
  }

  function enhanceNavigation() {
    enhanceFooter();
    enhanceLanguage();
    enhanceSearch();
    document.querySelectorAll('header .hamburger').forEach((trigger) => {
      trigger.setAttribute('aria-expanded', String(trigger.closest('header').classList.contains('menu-open')));
    });
    document.querySelectorAll('footer .footer-bottom > span:last-child').forEach((span) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'privacy-trigger';
      button.setAttribute('aria-haspopup', 'dialog');
      if (span.hasAttribute('data-t')) button.setAttribute('data-t', span.getAttribute('data-t'));
      button.textContent = span.textContent;
      span.replaceWith(button);
    });
    document.querySelectorAll('header nav').forEach((nav) => {
      nav.classList.add('site-nav');
      if (nav.querySelector('.catalog-nav')) return;

      const original = nav.querySelector(':scope > a:first-child');
      if (!original) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'catalog-nav';
      original.classList.add('catalog-main-link');
      original.href = 'catalog.html';

      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'catalog-toggle';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Catalog sections');
      toggle.innerHTML = '<span aria-hidden="true"></span>';

      const dropdown = document.createElement('div');
      dropdown.className = 'catalog-dropdown';
      dropdown.setAttribute('aria-label', 'Catalog sections');

      original.replaceWith(wrapper);
      wrapper.append(original, toggle, dropdown);

      const toggleDropdown = () => {
        const open = !wrapper.classList.contains('is-open');
        closeMenus(wrapper);
        wrapper.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
      };

      toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDropdown();
      });
      wrapper.addEventListener('pointerleave', (event) => {
        if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
          wrapper.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.blur();
        }
      });
      original.addEventListener('click', (event) => {
        if (window.matchMedia('(max-width: 1000px)').matches && !wrapper.classList.contains('is-open')) {
          event.preventDefault();
          toggleDropdown();
        }
      });
    });

    updateLabels();
  }

  function enhanceFooter() {
    document.querySelectorAll('footer .footer-nav a[data-t="contacts"], footer .footer-nav a[href$="#contacts"]').forEach((link) => {
      link.href = 'contact.html';
    });
    document.querySelectorAll('footer .footer-nav a[data-t="hits"], footer .footer-nav a[href="index.html#hits"]').forEach((link) => {
      link.href = 'hits.html';
      if (window.location.pathname.endsWith('/hits.html')) link.setAttribute('aria-current', 'page');
    });
    document.querySelectorAll('footer .contact h3').forEach((heading) => {
      if (heading.querySelector('a')) return;
      const link = document.createElement('a');
      link.href = 'contact.html';
      link.textContent = heading.textContent;
      if (heading.hasAttribute('data-t')) link.setAttribute('data-t', heading.getAttribute('data-t'));
      heading.replaceChildren(link);
    });
    document.querySelectorAll('footer .subscribe .email button').forEach((button) => {
      button.disabled = false;
      button.classList.add('subscribe-trigger');
      button.setAttribute('aria-haspopup', 'dialog');
    });
    document.querySelectorAll('footer .social-footer > img').forEach((image) => {
      const icons = document.createElement('div');
      icons.className = 'social-icons';
      icons.setAttribute('aria-label', image.alt);
      icons.innerHTML = '<span class="social-icon social-icon--facebook" role="img" aria-label="Facebook"></span><span class="social-icon social-icon--telegram" role="img" aria-label="Telegram"></span><span class="social-icon social-icon--instagram" role="img" aria-label="Instagram"></span>';
      image.replaceWith(icons);
    });
  }

  function enhanceTikTok() {
    document.querySelectorAll('.social-icons,.story-social').forEach(container => {
      if (container.querySelector('[data-tiktok]')) return;
      const url = window.KayoCms?.social?.tiktok;
      const active = typeof url === 'string' && /^https:\/\/(www\.)?tiktok\.com\/@[A-Za-z0-9._]+\/?$/.test(url);
      const icon = document.createElement(active ? 'a' : 'span'); icon.dataset.tiktok = '';
      icon.className = 'social-icon social-icon--tiktok'; icon.setAttribute('aria-label','TikTok');
      if (active) { icon.href = url; icon.target = '_blank'; icon.rel = 'noopener noreferrer'; }
      else { icon.setAttribute('role','img'); icon.title = 'TikTok'; }
      container.append(icon);
    });
  }
  function updateLabels() {
    enhanceTikTok();
    const menuLabels = labels[locale()] || labels.en;
    document.querySelectorAll('.catalog-dropdown').forEach((dropdown) => {
      const expected = menuLabels.map((text, index) => ({
        text,
        href: `catalog.html${slugs[index] ? `#${slugs[index]}` : ''}`,
      }));
      const current = [...dropdown.children];
      const unchanged = current.length === expected.length && current.every((link, index) => (
        link.textContent === expected[index].text && link.getAttribute('href') === expected[index].href
      ));
      if (unchanged) return;
      dropdown.replaceChildren(...expected.map(({ text, href }) => {
        const link = document.createElement('a');
        link.href = href;
        link.textContent = text;
        return link;
      }));
    });
    updateActiveNavigation();
  }

  function updateActiveNavigation() {
    const filename = window.location.pathname.split('/').pop()?.toLowerCase() || 'index.html';
    const hash = window.location.hash.toLowerCase();
    const active = filename === 'catalog.html' ? 'catalog'
      : filename === 'categories.html' || filename.startsWith('category-') ? 'categories'
      : filename === 'offers.html' ? 'offers'
      : filename === 'where-to-buy.html' ? 'where'
      : filename === 'news.html' ? 'news'
      : filename === 'about.html' ? 'company'
      : filename === 'contact.html' ? 'contacts'
      : filename === 'index.html' && hash === '#sales' ? 'offers'
      : filename === 'index.html' && hash === '#contacts' ? 'contacts'
      : '';

    document.querySelectorAll('header nav.site-nav').forEach((nav) => {
      const links = [nav.querySelector('.catalog-main-link'), ...nav.querySelectorAll(':scope > a')];
      const names = ['catalog', 'categories', 'offers', 'where', 'news', 'company', 'contacts'];
      links.forEach((link, index) => {
        if (!link) return;
        const isCurrent = names[index] === active;
        link.classList.toggle('is-current', isCurrent);
        if (isCurrent) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
      const section = hash.slice(1).split('-')[0];
      nav.querySelectorAll('.catalog-dropdown a').forEach((link) => {
        const isCurrent = active === 'catalog' && (
          section ? link.getAttribute('href') === `catalog.html#${section}` : link.getAttribute('href') === 'catalog.html'
        );
        link.classList.toggle('is-current', isCurrent);
        if (isCurrent) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    });
  }

  function closePrivacy() {
    document.querySelector('.privacy-modal')?.remove();
    document.body.classList.remove('privacy-open');
    privacyOpener?.focus();
    privacyOpener = null;
  }

  function openPrivacy(opener) {
    if (document.querySelector('.privacy-modal')) return;
    privacyOpener = opener;
    const copy = privacyCopy[locale()] || privacyCopy.en;
    const modal = document.createElement('div');
    modal.className = 'privacy-modal';
    modal.innerHTML = '<div class="privacy-backdrop"></div><section class="privacy-dialog" role="dialog" aria-modal="true" aria-labelledby="privacy-title"><button type="button" class="privacy-close" aria-label=""></button><h2 id="privacy-title"></h2><div class="privacy-copy"></div></section>';
    modal.querySelector('#privacy-title').textContent = copy.title;
    modal.querySelector('.privacy-close').setAttribute('aria-label', copy.close);
    modal.querySelector('.privacy-close').textContent = '×';
    copy.paragraphs.forEach((paragraph) => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      modal.querySelector('.privacy-copy').append(p);
    });
    document.body.append(modal);
    document.body.classList.add('privacy-open');
    modal.querySelector('.privacy-close').focus();
  }

  function closeSubscribe() {
    const modal = document.querySelector('.subscribe-modal');
    if (!modal) return;
    modal.remove();
    if (!document.querySelector('.privacy-modal')) document.body.classList.remove('privacy-open');
    subscribeOpener?.focus();
    subscribeOpener = null;
  }

  function updateSubscribeCopy() {
    const modal = document.querySelector('.subscribe-modal');
    if (!modal) return;
    const copy = subscribeCopy[locale()] || subscribeCopy.en;
    modal.querySelector('#subscribe-title').textContent = copy.title;
    modal.querySelector('.subscribe-dialog > p').textContent = copy.note;
    modal.querySelector('.subscribe-email-label span').textContent = copy.email;
    modal.querySelector('.subscribe-consent span').textContent = copy.consent;
    modal.querySelector('.subscribe-submit').textContent = copy.submit;
    modal.querySelector('.subscribe-close').setAttribute('aria-label', copy.close);
  }

  function openSubscribe(opener) {
    if (document.querySelector('.subscribe-modal')) return;
    subscribeOpener = opener;
    const modal = document.createElement('div');
    modal.className = 'subscribe-modal';
    modal.innerHTML = '<div class="subscribe-backdrop"></div><section class="subscribe-dialog" role="dialog" aria-modal="true" aria-labelledby="subscribe-title" aria-describedby="subscribe-note"><button type="button" class="subscribe-close">×</button><h2 id="subscribe-title"></h2><p id="subscribe-note"></p><form class="subscribe-form"><label class="subscribe-email-label"><span></span><input type="email" name="email" autocomplete="email" required></label><label class="subscribe-consent"><input type="checkbox" name="consent" required><span></span></label><button type="submit" class="yellow subscribe-submit"></button><p class="subscribe-status" role="status" aria-live="polite"></p></form></section>';
    document.body.append(modal);
    document.body.classList.add('privacy-open');
    updateSubscribeCopy();
    modal.querySelector('input[name="email"]').value = opener.closest('.subscribe')?.querySelector('.email input')?.value || '';
    modal.querySelector('input[name="email"]').focus();
  }

  const isInsideMenu = (target) => target instanceof Element && Boolean(target.closest('.hamburger, header nav, .catalog-nav, .language-menu-control'));
  document.addEventListener('pointerdown', (event) => {
    if (!isInsideMenu(event.target)) closeMenus();
  });
  document.addEventListener('click', (event) => {
    if (!isInsideMenu(event.target)) closeMenus();
    const hamburger = event.target instanceof Element ? event.target.closest('.hamburger') : null;
    if (hamburger) {
      closeMenus(hamburger.closest('header'));
      hamburger.setAttribute('aria-expanded', String(hamburger.closest('header')?.classList.contains('menu-open')));
    }
    const arrow = event.target.closest('a.down[href^="#"]');
    if (arrow) {
      const target = document.getElementById(arrow.hash.slice(1));
      if (target) {
        event.preventDefault();
        stopArrowScroll();
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) target.scrollIntoView({ behavior: 'auto', block: 'start' });
        else {
          const start = window.scrollY;
          const distance = target.getBoundingClientRect().top;
          const began = performance.now();
          originalScrollBehavior = document.documentElement.style.scrollBehavior;
          document.documentElement.style.scrollBehavior = 'auto';
          const step = (now) => {
            const progress = Math.min((now - began) / 550, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            window.scrollTo(0, start + distance * eased);
            if (progress < 1) scrollFrame = requestAnimationFrame(step);
            else {
              scrollFrame = 0;
              document.documentElement.style.scrollBehavior = originalScrollBehavior;
              originalScrollBehavior = null;
            }
          };
          scrollFrame = requestAnimationFrame(step);
        }
        history.replaceState(null, '', arrow.hash);
      }
    }
    if (event.target.closest('.privacy-trigger')) openPrivacy(event.target.closest('.privacy-trigger'));
    if (event.target.closest('.privacy-close, .privacy-backdrop')) closePrivacy();
    if (event.target.closest('.subscribe-trigger')) openSubscribe(event.target.closest('.subscribe-trigger'));
    if (event.target.closest('.subscribe-close, .subscribe-backdrop')) closeSubscribe();
  });
  document.addEventListener('submit', (event) => {
    if (!event.target.matches('.subscribe-form')) return;
    event.preventDefault();
    event.target.querySelector('.subscribe-status').textContent = (subscribeCopy[locale()] || subscribeCopy.en).pending;
  });
  document.addEventListener('wheel', stopArrowScroll, { passive: true });
  document.addEventListener('touchstart', stopArrowScroll, { passive: true });
  window.addEventListener('scroll', () => closeMenus(), { passive: true });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenus();
    if (event.key === 'Escape' && document.querySelector('.privacy-modal')) closePrivacy();
    if (event.key === 'Escape' && document.querySelector('.subscribe-modal')) closeSubscribe();
    if (event.key === 'Tab' && document.querySelector('.privacy-modal')) {
      event.preventDefault();
      document.querySelector('.privacy-close').focus();
    }
    if (event.key === 'Tab' && document.querySelector('.subscribe-modal')) {
      const controls = [...document.querySelectorAll('.subscribe-modal button, .subscribe-modal input')];
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  document.addEventListener('change', (event) => {
    if (event.target.matches('#language')) setTimeout(() => { updateLabels(); updateSubscribeCopy(); }, 0);
  });
  document.addEventListener('kayo:localechange', () => { updateLabels(); updateSubscribeCopy(); });
  window.addEventListener('hashchange', updateActiveNavigation);

  new MutationObserver(enhanceNavigation).observe(document.body, { childList: true, subtree: true });
  enhanceNavigation();
  enhanceTikTok();
  new MutationObserver(enhanceTikTok).observe(document.body,{childList:true,subtree:true});
  ensureHeroMotion();
})();
