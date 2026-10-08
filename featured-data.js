(() => {
  const fallback = [
    ['catalog-protection-krm-180-ylw', 'KRM 180 YLW', 'protection'],
    ['catalog-gloves-krgb-174-blk-wht-mma', 'KRGB 174 BLACK / WHITE', 'gloves'],
    ['catalog-protection-krm-161-blu', 'KRM 161 BLU — 4 M', 'protection'],
    ['catalog-equipment-krks-408', 'KRKS 408 BLACK', 'equipment'],
    ['catalog-protection-krep-250-blue', 'KREP 250 BLUE', 'protection'],
    ['catalog-protection-krep-213-wht', 'KREP 213 WHT', 'protection'],
    ['catalog-gloves-krbg-162-blu-leather', 'KRBG 162 BLU — LEATHER', 'gloves'],
    ['catalog-bags-krkkb-202', 'KRKKB 202', 'bags'],
  ];

  function list() {
    const cms = window.KayoCms;
    if (cms?.catalogManaged) {
      const products = new Map((cms.products || []).map((product) => [product.slug, product]));
      return fallback.flatMap((_, slot) => {
        const product = products.get(cms.featuredProducts?.[`product-${slot}`]);
        return product?.imageUrl ? [{ slot, slug: product.slug, title: product.title, section: product.section,
          imageUrl: product.imageUrl, href: `catalog.html?product=${encodeURIComponent(product.slug)}#${encodeURIComponent(product.section)}` }] : [];
      });
    }
    return fallback.map(([slug, title, section], slot) => ({ slot, slug, title, section,
      imageUrl: `assets/product-${slot}.webp`, href: `catalog.html?product=${encodeURIComponent(slug)}#${section}` }));
  }

  window.KayoFeatured = { list };
})();
