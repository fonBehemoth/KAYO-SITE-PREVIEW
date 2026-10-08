(() => {
  // The static exporter injects CMS data immediately before page-shell.js.
  // Read it at render time so edits from the admin panel reach these pages.
  const cms = {
    get copy() { return window.KayoCms?.copy; },
    get media() { return window.KayoCms?.media; },
    get locations() { return window.KayoCms?.locations; },
  };
  const localCopy = window.KayoNewPageCopy || {};
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
  const text = (locale, key) => escapeHtml(cms.copy?.[locale]?.[key] || localCopy[locale]?.[key] || localCopy.en?.[key] || '');
  const media = (key) => escapeHtml(cms.media?.[key] || `assets/${key}.webp`);
  const validPoint = (location) => {
    const latitude = Number(location?.latitude);
    const longitude = Number(location?.longitude);
    return location?.latitude !== null && location?.longitude !== null
      && location?.latitude !== undefined && location?.longitude !== undefined
      && String(location.latitude).trim() !== '' && String(location.longitude).trim() !== ''
      && Number.isFinite(latitude) && Number.isFinite(longitude)
      && Math.abs(latitude) <= 90 && Math.abs(longitude) <= 180;
  };
  const locations = () => Array.isArray(cms.locations)
    ? cms.locations.filter((item) => Number.isInteger(Number(item.slot)) && Number(item.slot) >= 1 && Number(item.slot) <= 4)
    : [1, 2, 3, 4].map((slot) => ({ slot, address: '', description: {} }));

  function hero(locale, heading, lead) {
    return `<section class="sub-hero secondary-hero"><div><span>KAYO / ${text(locale, heading)}</span><h1>${text(locale, heading)}</h1><p>${text(locale, lead)}</p></div></section>`;
  }

  function offers(locale) {
    const active = window.KayoOffers?.list() || [];
    const cards = active.map((offer) => {
      const title = escapeHtml(offer.title);
      return `<article class="offer-card"><img src="${escapeHtml(offer.imageUrl)}" alt="${title}" loading="lazy" decoding="async"><div><p class="eyebrow">${text(locale, 'offersLabel')}</p><h2>${title}</h2><a href="${escapeHtml(offer.href)}" class="offer-link">${text(locale, 'offersCta')} <span aria-hidden="true">↗</span></a></div></article>`;
    }).join('');
    const empty = { en: 'There are no current offers.', uk: 'Наразі немає активних акцій.', cs: 'Momentálně nejsou žádné akce.', pl: 'Obecnie nie ma aktywnych promocji.', de: 'Derzeit gibt es keine Angebote.', fr: 'Aucune offre en cours.', es: 'No hay ofertas activas en este momento.' };
    return hero(locale, 'offersTitle', 'offersLead') + `<main class="page-wrap offers-grid">${cards || `<p class="offers-empty">${empty[locale] || empty.en}</p>`}</main>`;
  }

  const hitsCopy = {
    en: ['Best sellers KAYO', 'Products selected for the best sellers collection.', 'Best seller', 'View details', 'No best sellers have been selected yet.'],
    uk: ['Хіти продажів KAYO', 'Товари, обрані для добірки хітів продажів.', 'Хіт продажів', 'Детальніше', 'Хіти продажів поки не обрані.'],
    cs: ['Nejprodávanější KAYO', 'Produkty vybrané do kolekce nejprodávanějších.', 'Bestseller', 'Zobrazit detail', 'Zatím nebyly vybrány žádné bestsellery.'],
    pl: ['Bestsellery KAYO', 'Produkty wybrane do kolekcji bestsellerów.', 'Bestseller', 'Zobacz szczegóły', 'Nie wybrano jeszcze bestsellerów.'],
    de: ['KAYO Bestseller', 'Produkte aus der ausgewählten Bestseller-Kollektion.', 'Bestseller', 'Details ansehen', 'Es wurden noch keine Bestseller ausgewählt.'],
    fr: ['Meilleures ventes KAYO', 'Produits sélectionnés pour la collection des meilleures ventes.', 'Meilleure vente', 'Voir les détails', 'Aucune meilleure vente n’a encore été sélectionnée.'],
    es: ['Más vendidos KAYO', 'Productos seleccionados para la colección de los más vendidos.', 'Más vendido', 'Ver detalles', 'Todavía no se han seleccionado productos destacados.'],
  };

  function hits(locale) {
    const [title, lead, label, action, empty] = hitsCopy[locale] || hitsCopy.en;
    const cards = (window.KayoFeatured?.list() || []).map((product) => `
      <article class="offer-card hit-card"><img src="${escapeHtml(product.imageUrl)}" alt="${escapeHtml(product.title)}" loading="lazy" decoding="async"><div><p class="eyebrow">${escapeHtml(label)}</p><h2>${escapeHtml(product.title)}</h2><a href="${escapeHtml(product.href)}" class="offer-link">${escapeHtml(action)} <span aria-hidden="true">↗</span></a></div></article>`).join('');
    return `<section class="sub-hero secondary-hero"><div><span>KAYO / ${escapeHtml(title)}</span><h1>${escapeHtml(title)}</h1><p>${escapeHtml(lead)}</p></div></section><main class="page-wrap offers-grid hits-grid">${cards || `<p class="offers-empty">${escapeHtml(empty)}</p>`}</main>`;
  }

  function where(locale) {
    const cards = locations().map((location) => {
      const slot = Number(location.slot);
      const address = escapeHtml(location.address || '');
      const description = escapeHtml(location.description?.[locale] || location.description?.en || '');
      const showMap = validPoint(location)
        ? `<button type="button" class="location-select" data-location-slot="${slot}">${text(locale, 'whereSelect')} <span aria-hidden="true">↗</span></button>`
        : '';
      return `<article class="location-card"><span class="eyebrow">${text(locale, 'wherePoint')} ${slot.toString().padStart(2, '0')}</span><h2 class="location-address">${address}</h2><p class="location-description">${description}</p>${showMap}</article>`;
    }).join('');
    return hero(locale, 'whereTitle', 'whereLead') + `<main class="page-wrap where-layout"><section class="location-grid" aria-label="${text(locale, 'whereTitle')}">${cards}</section><section class="location-map" aria-label="${text(locale, 'whereMapTitle')}"><div class="map-top"><h2>${text(locale, 'whereMapTitle')}</h2><p>${text(locale, 'whereMapIntro')}</p></div><div id="osm-map"><button type="button" class="map-open">${text(locale, 'whereMapOpen')} <span aria-hidden="true">↗</span></button></div><a class="map-source" href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">© OpenStreetMap</a></section></main>`;
  }

  function mapUrl(location) {
    const params = new URLSearchParams({ layer: 'mapnik' });
    if (validPoint(location)) {
      const latitude = Number(location.latitude);
      const longitude = Number(location.longitude);
      params.set('bbox', [longitude - .025, latitude - .015, longitude + .025, latitude + .015].join(','));
      params.set('marker', `${latitude},${longitude}`);
    } else {
      params.set('bbox', '-180,-60,180,75');
    }
    return `https://www.openstreetmap.org/export/embed.html?${params}`;
  }

  function openMap(location) {
    const holder = document.getElementById('osm-map');
    if (!holder) return;
    const iframe = document.createElement('iframe');
    iframe.title = text(document.documentElement.lang || 'en', 'whereMapTitle').replace(/&[^;]+;/g, ' ');
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.src = mapUrl(location);
    holder.replaceChildren(iframe);
    if (validPoint(location)) holder.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
  }

  document.addEventListener('click', (event) => {
    const select = event.target.closest('[data-location-slot]');
    if (select) {
      const location = locations().find((item) => Number(item.slot) === Number(select.dataset.locationSlot));
      if (validPoint(location)) openMap(location);
    } else if (event.target.closest('.map-open')) {
      openMap(null);
    }
  });

  window.KayoPages = { render: (page, locale) => page === 'offers' ? offers(locale) : page === 'hits' ? hits(locale) : page === 'where' ? where(locale) : '' };
})();
