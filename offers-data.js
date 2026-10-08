(() => {
  const fallback = [
    ['catalog-gloves-krbg-168-wht-blk', 'KRBG 168 WHT / BLK', 'gloves', 'catalog-gloves/krbg-168-wht-blk.webp'],
    ['catalog-gloves-krbg-215-wht-red-leather', 'KRBG 215 WHT / RED — LEATHER', 'gloves', 'catalog-gloves/krbg-215-wht-red-leather.webp'],
    ['catalog-equipment-krfp-204', 'KRFP 204 BLACK', 'equipment', 'catalog-equipment/krfp-204.webp'],
    ['catalog-bags-krkkb-315', 'KRKKB 315 BLACK', 'bags', 'catalog-bags/krkkb-315.webp'],
  ];
  const todayInZurich = () => {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Zurich', year: 'numeric', month: '2-digit', day: '2-digit',
    }).formatToParts(new Date());
    const part = (type) => parts.find((item) => item.type === type)?.value;
    return `${part('year')}-${part('month')}-${part('day')}`;
  };
  const validDate = (value) => value == null || /^\d{4}-\d{2}-\d{2}$/.test(value);
  const isCurrent = (offer, today) => validDate(offer.startsOn) && validDate(offer.endsOn)
    && (!offer.startsOn || offer.startsOn <= today)
    && (!offer.endsOn || offer.endsOn >= today);

  function list(today = todayInZurich()) {
    const cms = window.KayoCms;
    if (cms && !cms.catalogManaged) return [];
    if (!cms) return fallback.map(([slug, title, section, path], slot) => ({
      slot, slug, title, section, imageUrl: `assets/${path}`,
      href: `catalog.html?product=${encodeURIComponent(slug)}#${section}`,
    }));
    const products = new Map((cms.products || []).map((product) => [product.slug, product]));
    return [0, 1, 2, 3].flatMap((slot) => {
      const offer = cms.offers?.[`sale-${slot}`];
      const product = offer && products.get(offer.slug);
      if (!product?.imageUrl || !isCurrent(offer, today)) return [];
      return [{ slot, slug: product.slug, title: product.title, section: product.section,
        imageUrl: product.imageUrl,
        href: `catalog.html?product=${encodeURIComponent(product.slug)}#${encodeURIComponent(product.section)}` }];
    });
  }

  window.KayoOffers = { list };
})();
