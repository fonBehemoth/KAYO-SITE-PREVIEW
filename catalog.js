(() => {
  const i18n = window.KayoI18n;
  if (!i18n) return;

  const sections = [
    { slug: '', keys: ['catalog'], description: 'heroSub' },
    { slug: 'gloves', keys: ['cat0a', 'cat0b'], description: 'cat0desc' },
    { slug: 'protection', keys: ['cat1a', 'cat1b'], description: 'cat1desc' },
    { slug: 'equipment', keys: ['cat2a', 'cat2b'], description: 'cat2desc' },
    { slug: 'bags', keys: ['cat3a', 'cat3b'], description: 'cat3desc' },
    { slug: 'accessories', keys: ['cat6a', 'cat6b'], description: 'cat6desc' },
  ];

  const gloveLabels = {
    en: { allGloves: 'All gloves', boxing: 'Boxing gloves', mma: 'MMA gloves', training: 'Bag gloves', kids: 'Children’s gloves', models: 'models', positions: 'positions', close: 'Close', availableSizes: 'Available sizes', descriptionPending: 'The detailed description will be added after the product information is confirmed.' },
    uk: { allGloves: 'Усі рукавиці', boxing: 'Боксерські рукавиці', mma: 'Рукавиці MMA', training: 'Снарядні рукавиці', kids: 'Дитячі рукавиці', models: 'моделей', positions: 'позицій', close: 'Закрити', availableSizes: 'Доступні розміри', descriptionPending: 'Детальний опис буде додано після підтвердження інформації про товар.' },
    cs: { allGloves: 'Všechny rukavice', boxing: 'Boxerské rukavice', mma: 'MMA rukavice', training: 'Pytlové rukavice', kids: 'Dětské rukavice', models: 'modelů', positions: 'položek', close: 'Zavřít', availableSizes: 'Dostupné velikosti', descriptionPending: 'Podrobný popis bude doplněn po potvrzení informací o výrobku.' },
    pl: { allGloves: 'Wszystkie rękawice', boxing: 'Rękawice bokserskie', mma: 'Rękawice MMA', training: 'Rękawice przyrządowe', kids: 'Rękawice dziecięce', models: 'modeli', positions: 'pozycji', close: 'Zamknij', availableSizes: 'Dostępne rozmiary', descriptionPending: 'Szczegółowy opis zostanie dodany po potwierdzeniu informacji o produkcie.' },
    de: { allGloves: 'Alle Handschuhe', boxing: 'Boxhandschuhe', mma: 'MMA-Handschuhe', training: 'Sackhandschuhe', kids: 'Kinderhandschuhe', models: 'Modelle', positions: 'Positionen', close: 'Schließen', availableSizes: 'Verfügbare Größen', descriptionPending: 'Die ausführliche Beschreibung wird nach Bestätigung der Produktinformationen ergänzt.' },
    fr: { allGloves: 'Tous les gants', boxing: 'Gants de boxe', mma: 'Gants MMA', training: 'Gants de sac', kids: 'Gants pour enfants', models: 'modèles', positions: 'positions', close: 'Fermer', availableSizes: 'Tailles disponibles', descriptionPending: 'La description détaillée sera ajoutée après confirmation des informations sur le produit.' },
    es: { allGloves: 'Todos los guantes', boxing: 'Guantes de boxeo', mma: 'Guantes de MMA', training: 'Guantes de saco', kids: 'Guantes infantiles', models: 'modelos', positions: 'posiciones', close: 'Cerrar', availableSizes: 'Tallas disponibles', descriptionPending: 'La descripción detallada se añadirá tras confirmar la información del producto.' },
  };

  const gloveSections = [
    { slug: 'gloves', label: 'allGloves' },
    { slug: 'gloves-boxing', label: 'boxing', subtype: 'boxing', image: 'krbg-165-blk-red', sizes: '4–16 oz' },
    { slug: 'gloves-mma', label: 'mma', subtype: 'mma', image: 'krgb-161-black-mma', sizes: 'M–XL' },
    { slug: 'gloves-training', label: 'training', subtype: 'training', image: 'krbm-158-blue-training', sizes: 'L' },
    { slug: 'kids', label: 'kids', subtype: 'kids', image: 'krbg-241-blue-kids', sizes: '4–6 oz' },
  ];

  const protectionLabels = {
    en: { allProtection: 'All protection', mouthguards: 'Mouthguards', wraps: 'Hand wraps', groin: 'Groin guards', helmets: 'Head guards', shinguards: 'Shin guards', positions: 'positions', descriptionPending: 'The detailed description will be added after the product information is confirmed.' },
    uk: { allProtection: 'Увесь захист', mouthguards: 'Капи', wraps: 'Бинти', groin: 'Бандажі', helmets: 'Шоломи', shinguards: 'Захист гомілки', positions: 'позицій', descriptionPending: 'Детальний опис буде додано після підтвердження інформації про товар.' },
    cs: { allProtection: 'Veškerá ochrana', mouthguards: 'Chrániče zubů', wraps: 'Bandáže', groin: 'Suspenzory', helmets: 'Chrániče hlavy', shinguards: 'Chrániče holení', positions: 'položek', descriptionPending: 'Podrobný popis bude doplněn po potvrzení informací o výrobku.' },
    pl: { allProtection: 'Cała ochrona', mouthguards: 'Ochraniacze szczęki', wraps: 'Bandaże bokserskie', groin: 'Ochraniacze krocza', helmets: 'Kaski', shinguards: 'Ochraniacze goleni', positions: 'pozycji', descriptionPending: 'Szczegółowy opis zostanie dodany po potwierdzeniu informacji o produkcie.' },
    de: { allProtection: 'Alle Schutzausrüstung', mouthguards: 'Mundschutz', wraps: 'Bandagen', groin: 'Tiefschutz', helmets: 'Kopfschutz', shinguards: 'Schienbeinschutz', positions: 'Positionen', descriptionPending: 'Die ausführliche Beschreibung wird nach Bestätigung der Produktinformationen ergänzt.' },
    fr: { allProtection: 'Toutes les protections', mouthguards: 'Protège-dents', wraps: 'Bandages', groin: 'Coquilles', helmets: 'Casques', shinguards: 'Protège-tibias', positions: 'positions', descriptionPending: 'La description détaillée sera ajoutée après confirmation des informations sur le produit.' },
    es: { allProtection: 'Todas las protecciones', mouthguards: 'Protectores bucales', wraps: 'Vendas', groin: 'Protectores inguinales', helmets: 'Cascos', shinguards: 'Espinilleras', positions: 'posiciones', descriptionPending: 'La descripción detallada se añadirá tras confirmar la información del producto.' },
  };

  const protectionSections = [
    { slug: 'protection', label: 'allProtection' },
    { slug: 'protection-mouthguards', label: 'mouthguards', subtype: 'mouthguards', image: 'krm-180-ylw' },
    { slug: 'protection-wraps', label: 'wraps', subtype: 'wraps', image: 'krep-231-red' },
    { slug: 'protection-groin', label: 'groin', subtype: 'groin', image: 'krep-213-wht' },
    { slug: 'protection-helmets', label: 'helmets', subtype: 'helmets', image: 'krhg-162-blc-red' },
    { slug: 'protection-shinguards', label: 'shinguards', subtype: 'shinguards', image: 'krep-250-blue' },
  ];

  const gloveDescriptions = {
    en: {
      standard: 'Training and sparring gloves made from artificial leather. The model uses multilayer EVA foam, a wide hook-and-loop wrist strap, a breathable palm insert and a fixed thumb.',
      competitionLeather: 'Natural-leather boxing gloves for training, sparring and competition. The model uses multilayer EVA foam, a wide hook-and-loop wrist strap, a breathable palm insert and a fixed thumb.',
      competitionSynthetic: 'Artificial-leather boxing gloves for training, sparring and competition. The model uses multilayer EVA foam, a wide hook-and-loop wrist strap, a breathable palm insert and a fixed thumb.',
      leatherTraining: 'Natural-leather boxing gloves for training and sparring. The model uses multilayer EVA foam, a wide hook-and-loop wrist strap, a breathable palm insert and a fixed thumb.',
      mma: 'Artificial-leather MMA gloves for training and competition. They have multilayer EVA foam with gel padding, an open palm, thumb protection and a long adjustable hook-and-loop strap.',
      training: 'Artificial-leather bag gloves for training on pads, speed bags and heavy bags. They have multilayer EVA foam, a wide hook-and-loop wrist strap and an open thumb.',
      kids: 'Artificial-leather boxing gloves designed for children’s training. They have EVA foam padding, reinforced seams, a wide hook-and-loop wrist strap, a breathable palm insert and a fixed thumb.',
    },
    uk: {
      standard: 'Рукавиці зі штучної шкіри для тренувань і спарингів. Модель має багатошарове наповнення з піни EVA, широку застібку-липучку, дихаючу вставку на долоні та фіксацію великого пальця.',
      competitionLeather: 'Боксерські рукавиці з натуральної шкіри для тренувань, спарингів і змагань. Модель має багатошарове наповнення з піни EVA, широку застібку-липучку, дихаючу вставку на долоні та фіксацію великого пальця.',
      competitionSynthetic: 'Боксерські рукавиці зі штучної шкіри для тренувань, спарингів і змагань. Модель має багатошарове наповнення з піни EVA, широку застібку-липучку, дихаючу вставку на долоні та фіксацію великого пальця.',
      leatherTraining: 'Боксерські рукавиці з натуральної шкіри для тренувань і спарингів. Модель має багатошарове наповнення з піни EVA, широку застібку-липучку, дихаючу вставку на долоні та фіксацію великого пальця.',
      mma: 'Рукавиці зі штучної шкіри для тренувань і змагань зі змішаних єдиноборств. Мають багатошарове наповнення з піни EVA та гелем, відкриту долоню, захист великого пальця і довгу регульовану застібку-липучку.',
      training: 'Снарядні рукавиці зі штучної шкіри для тренувань на лапах, грушах і важких мішках. Мають багатошарове наповнення з піни EVA, широку застібку-липучку та відкритий великий палець.',
      kids: 'Боксерські рукавиці зі штучної шкіри, призначені для дитячих тренувань. Мають наповнення з піни EVA, посилені шви, широку застібку-липучку, дихаючу вставку на долоні та фіксацію великого пальця.',
    },
  };

  const gloveProducts = [
    { title: 'KRBG 165 BLK / RED', image: 'krbg-165-blk-red', subtype: 'boxing', copy: 'standard', variants: ['8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRBG 168 BLK / SLV', image: 'krbg-168-blk-slv', subtype: 'boxing', copy: 'standard', variants: ['8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRBG 248 BLC', image: 'krbg-248-blc', subtype: 'boxing', copy: 'competitionSynthetic', variants: ['8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRBG 248 WHT', image: 'krbg-248-wht', subtype: 'boxing', copy: 'competitionSynthetic', variants: ['8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRBG 170 BLC / RED', image: 'krbg-170-blc-red', subtype: 'boxing', copy: 'standard', variants: ['8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRBG 170 BLC / BLU', image: 'krbg-170-blc-blu', subtype: 'boxing', copy: 'standard', variants: ['8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRBG 162 BLU — LEATHER', image: 'krbg-162-blu-leather', subtype: 'boxing', copy: 'competitionLeather', variants: ['8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRBG 162 BLU — VINYL', image: 'krbg-162-blu-vinyl', subtype: 'boxing', copy: 'competitionSynthetic', variants: ['4 oz', '6 oz', '8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRBG 162 RED — LEATHER', image: 'krbg-162-red-leather', subtype: 'boxing', copy: 'competitionLeather', variants: ['8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRBG 162 RED — VINYL', image: 'krbg-162-red-vinyl', subtype: 'boxing', copy: 'competitionSynthetic', variants: ['4 oz', '6 oz', '8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRBG 215 WHT / RED — LEATHER', image: 'krbg-215-wht-red-leather', subtype: 'boxing', copy: 'leatherTraining', variants: ['8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRBG 168 WHT / BLK', image: 'krbg-168-wht-blk', subtype: 'boxing', copy: 'standard', variants: ['8 oz', '10 oz', '12 oz', '14 oz', '16 oz'] },
    { title: 'KRGB 161 BLACK', image: 'krgb-161-black-mma', subtype: 'mma', copy: 'mma', variants: ['M', 'L', 'XL'] },
    { title: 'KRGB 174 BLACK / WHITE', image: 'krgb-174-blk-wht-mma', subtype: 'mma', copy: 'mma', variants: ['M', 'L', 'XL'] },
    { title: 'KRBM 158 BLUE', image: 'krbm-158-blue-training', subtype: 'training', copy: 'training', variants: ['L'] },
    { title: 'KRBM 158 RED', image: 'krbm-158-red-training', subtype: 'training', copy: 'training', variants: ['L'] },
    { title: 'KRBG 241 BLACK', image: 'krbg-241-black-kids', subtype: 'kids', copy: 'kids', variants: ['4 oz', '6 oz'] },
    { title: 'KRBG 241 WHITE', image: 'krbg-241-white-kids', subtype: 'kids', copy: 'kids', variants: ['4 oz', '6 oz'] },
    { title: 'KRBG 241 RED', image: 'krbg-241-red-kids', subtype: 'kids', copy: 'kids', variants: ['4 oz', '6 oz'] },
    { title: 'KRBG 241 BLUE', image: 'krbg-241-blue-kids', subtype: 'kids', copy: 'kids', variants: ['4 oz', '6 oz'] },
  ].map((product) => ({
    ...product,
    image: `catalog-gloves/${product.image}`,
    section: 'gloves',
  }));

  const protectionProducts = [
    { title: 'KRM 180 WHT', image: 'krm-180-wht', subtype: 'mouthguards' },
    { title: 'KRM 180 YLW', image: 'krm-180-ylw', subtype: 'mouthguards' },
    { title: 'KRM 181 BLACK', image: 'krm-181-blk', subtype: 'mouthguards' },
    { title: 'KREP 231 BLACK', image: 'krep-231-blk', subtype: 'wraps' },
    { title: 'KREP 231 RED', image: 'krep-231-red', subtype: 'wraps' },
    { title: 'KRM 161 BLACK — 4 m', image: 'krm-161-blk', subtype: 'wraps' },
    { title: 'KRM 161 WHT — 4 m', image: 'krm-161-wht', subtype: 'wraps' },
    { title: 'KRM 161 RED — 4 m', image: 'krm-161-red', subtype: 'wraps' },
    { title: 'KRM 161 BLU — 4 m', image: 'krm-161-blu', subtype: 'wraps' },
    { title: 'KRM 161 YLW — 4 m', image: 'krm-161-ylw', subtype: 'wraps' },
    { title: 'KREP 213 WHT', image: 'krep-213-wht', subtype: 'groin', variants: ['M', 'L'] },
    { title: 'KRHG 162 BLC / RED', image: 'krhg-162-blc-red', subtype: 'helmets', variants: ['M', 'L'] },
    { title: 'KRHG 170 BLC / WHT', image: 'krhg-170-blc-wht', subtype: 'helmets', variants: ['M', 'L', 'XL'] },
    { title: 'KREP 250 RED', image: 'krep-250-red', subtype: 'shinguards' },
    { title: 'KREP 250 BLUE', image: 'krep-250-blue', subtype: 'shinguards' },
  ].map((product) => ({
    ...product,
    image: `catalog-protection/${product.image}`,
    section: 'protection',
  }));

  const staticProducts = [
    { title: 'KRFP 200 BLACK', image: 'catalog-equipment/krfp-200', section: 'equipment' },
    { title: 'KRFP 202 BLACK / RED', image: 'catalog-equipment/krfp-202', section: 'equipment' },
    { title: 'KRFP 204 BLACK', image: 'catalog-equipment/krfp-204', section: 'equipment' },
    { title: 'KRKS 408 BLACK', image: 'catalog-equipment/krks-408', section: 'equipment' },
    { title: 'KRKKB 202', image: 'catalog-bags/krkkb-202', section: 'bags' },
    { title: 'KRKKB 315 BLACK', image: 'catalog-bags/krkkb-315', section: 'bags' },
    ...gloveProducts,
    ...protectionProducts,
  ];

  const cms = window.KayoCms || {};
  const products = cms.catalogManaged ? (cms.products || []) : staticProducts;
  const gloveLabel = (key) => (gloveLabels[i18n.locale] || gloveLabels.en)[key] || gloveLabels.en[key];
  const protectionLabel = (key) => (protectionLabels[i18n.locale] || protectionLabels.en)[key] || protectionLabels.en[key];
  const gloveModelCount = (count) => {
    const forms = {
      en: count === 1 ? 'model' : 'models',
      uk: count === 1 ? 'модель' : count >= 2 && count <= 4 ? 'моделі' : 'моделей',
      cs: count === 1 ? 'model' : count >= 2 && count <= 4 ? 'modely' : 'modelů',
      pl: count === 1 ? 'model' : count >= 2 && count <= 4 ? 'modele' : 'modeli',
      de: count === 1 ? 'Modell' : 'Modelle',
      fr: count === 1 ? 'modèle' : 'modèles',
      es: count === 1 ? 'modelo' : 'modelos',
    };
    return `${count} ${forms[i18n.locale] || forms.en}`;
  };
  const gloveDescription = (product) => {
    const edited = product.description?.[i18n.locale] || product.description?.en;
    if (edited) return edited;
    const localeCopy = gloveDescriptions[i18n.locale] || gloveDescriptions.en;
    return localeCopy[product.copy] || gloveDescriptions.en[product.copy] || gloveLabel('descriptionPending');
  };
  const sectionTitle = (section) => section.keys.map(i18n.t).filter(Boolean).join(' ');
  const currentHash = () => location.hash.slice(1);
  const activeGloveSection = () => gloveSections.find((section) => section.slug === currentHash()) || null;
  const activeProtectionSection = () => protectionSections.find((section) => section.slug === currentHash()) || null;
  const activeSection = () => {
    const gloveSection = activeGloveSection();
    if (gloveSection) return sections.find((section) => section.slug === 'gloves');
    const protectionSection = activeProtectionSection();
    if (protectionSection) return sections.find((section) => section.slug === 'protection');
    return sections.find((section) => section.slug === currentHash()) || sections[0];
  };

  let activeModalProduct = null;
  let modalTrigger = null;
  const linkedProductSlug = new URLSearchParams(location.search).get('product');
  let linkedProductHandled = false;

  function ensureProductModal() {
    let modal = document.querySelector('.product-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.hidden = true;
    modal.innerHTML = `
      <button class="product-modal-backdrop" type="button" data-modal-close aria-label="Close"></button>
      <section class="product-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
        <button class="product-modal-close" type="button" data-modal-close aria-label="Close"><span aria-hidden="true"></span></button>
        <div class="product-modal-media"><img alt=""></div>
        <div class="product-modal-content">
          <p class="product-modal-category"></p>
          <h2 id="product-modal-title"></h2>
          <div class="product-modal-sizes">
            <strong></strong>
            <p></p>
          </div>
          <p class="product-modal-note"></p>
        </div>
      </section>`;
    modal.addEventListener('click', (event) => {
      if (event.target.closest('[data-modal-close]')) closeProductModal();
    });
    document.body.append(modal);
    window.KayoGalleryUI.decorate(modal);
    return modal;
  }

  function updateProductModal(product) {
    const modal = ensureProductModal();
    const titleText = product.title || i18n.t(product.key);
    const categoryText = product.subtype
      ? product.section === 'protection' ? protectionLabel(product.subtype) : gloveLabel(product.subtype)
      : sectionTitle(sections.find((section) => section.slug === product.section));
    window.KayoGalleryUI.update(modal, product, titleText, i18n.locale);
    modal.querySelector('.product-modal-category').textContent = categoryText;
    modal.querySelector('#product-modal-title').textContent = titleText;
    const sizes = modal.querySelector('.product-modal-sizes');
    sizes.hidden = !product.variants?.length;
    sizes.querySelector('strong').textContent = gloveLabel('availableSizes');
    sizes.querySelector('p').textContent = product.variants?.join(' · ') || '';
    modal.querySelector('.product-modal-note').textContent = (product.description?.[i18n.locale] || product.description?.en) || (product.section === 'gloves'
      ? gloveDescription(product)
      : product.section === 'protection'
        ? protectionLabel('descriptionPending')
        : gloveLabel('descriptionPending'));
    modal.querySelectorAll('[data-modal-close]').forEach((button) => {
      button.setAttribute('aria-label', gloveLabel('close'));
    });
  }

  function openProductModal(product, trigger) {
    activeModalProduct = product;
    modalTrigger = trigger;
    const modal = ensureProductModal();
    updateProductModal(product);
    modal.hidden = false;
    document.body.classList.add('modal-open');
    modal.querySelector('.product-modal-close').focus();
  }

  function closeProductModal() {
    const modal = document.querySelector('.product-modal');
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    activeModalProduct = null;
    modalTrigger?.focus();
    modalTrigger = null;
    if (linkedProductSlug && new URLSearchParams(location.search).get('product') === linkedProductSlug) {
      const url = new URL(location.href);
      url.searchParams.delete('product');
      history.replaceState(null, '', url);
    }
  }

  function renderCatalog() {
    const active = activeSection();
    document.documentElement.dataset.catalogInitialSection = active.slug || '';
    const gloveSection = activeGloveSection();
    const protectionSection = activeProtectionSection();
    let visibleProducts = active.slug ? products.filter((product) => product.section === active.slug) : products;
    if (gloveSection?.subtype) visibleProducts = products.filter((product) => product.subtype === gloveSection.subtype);
    if (protectionSection?.subtype) visibleProducts = products.filter((product) => product.section === 'protection' && product.subtype === protectionSection.subtype);

    const currentLabel = gloveSection?.subtype
      ? gloveLabel(gloveSection.label)
      : protectionSection?.subtype
        ? protectionLabel(protectionSection.label)
      : active.slug
        ? sectionTitle(active)
        : i18n.t('allProducts');
    const title = active.slug ? ((gloveSection?.subtype || protectionSection?.subtype) ? currentLabel : sectionTitle(active)) : `${i18n.t('catalog')} KAYO`;

    document.querySelector('[data-catalog-title]').textContent = title;
    document.querySelector('[data-catalog-description]').textContent = i18n.t(active.description);
    document.querySelector('[data-catalog-current]').textContent = currentLabel;
    document.querySelector('[data-catalog-count]').textContent = `${visibleProducts.length} · ${currentLabel}`;
    document.title = `${title} — KAYO`;

    const tabs = document.querySelector('.catalog-tabs');
    tabs.replaceChildren(...sections.map((section) => {
      const link = document.createElement('a');
      link.href = section.slug ? `#${section.slug}` : 'catalog.html';
      link.textContent = section.slug ? sectionTitle(section) : i18n.t('allProducts');
      link.classList.toggle('active', section.slug === active.slug);
      if (section.slug === active.slug) link.setAttribute('aria-current', 'page');
      return link;
    }));

    const subcategories = document.querySelector('.catalog-subcategories');
    const subsectionConfig = active.slug === 'gloves'
      ? { sections: gloveSections, products: products.filter((product) => product.section === 'gloves'), label: gloveLabel, assetFolder: 'catalog-gloves', allLabel: 'allGloves' }
      : active.slug === 'protection'
        ? { sections: protectionSections, products: products.filter((product) => product.section === 'protection'), label: protectionLabel, assetFolder: 'catalog-protection', allLabel: 'allProtection' }
        : null;
    subcategories.hidden = !subsectionConfig;
    subcategories.replaceChildren();
    if (subsectionConfig) {
      const selectedSlug = currentHash() || active.slug;
      const allLink = document.createElement('a');
      allLink.className = 'catalog-subcategory-all';
      allLink.href = `#${active.slug}`;
      allLink.textContent = `${subsectionConfig.label(subsectionConfig.allLabel)} · ${subsectionConfig.products.length} ${subsectionConfig.label('positions')}`;
      allLink.classList.toggle('active', selectedSlug === active.slug);
      if (allLink.classList.contains('active')) allLink.setAttribute('aria-current', 'page');

      const categoryGrid = document.createElement('div');
      categoryGrid.className = 'catalog-subcategory-grid';
      categoryGrid.append(...subsectionConfig.sections.filter((section) => section.subtype).map((section) => {
        const link = document.createElement('a');
        link.className = 'catalog-subcategory-card';
        link.href = `#${section.slug}`;
        link.classList.toggle('active', section.slug === selectedSlug);
        if (link.classList.contains('active')) link.setAttribute('aria-current', 'page');
        const image = document.createElement('img');
        image.src = `assets/${subsectionConfig.assetFolder}/${section.image}.webp`;
        image.alt = '';
        const copy = document.createElement('span');
        copy.className = 'catalog-subcategory-copy';
        const heading = document.createElement('strong');
        heading.textContent = subsectionConfig.label(section.label);
        const meta = document.createElement('small');
        const count = subsectionConfig.products.filter((product) => product.subtype === section.subtype).length;
        meta.textContent = section.sizes ? `${gloveModelCount(count)} · ${section.sizes}` : gloveModelCount(count);
        copy.append(heading, meta);
        link.append(image, copy);
        return link;
      }));
      subcategories.append(allLink, categoryGrid);
    }

    const grid = document.querySelector('.catalog-grid');
    grid.replaceChildren(...visibleProducts.map((product) => {
      const titleText = product.title || i18n.t(product.key);
      const categoryText = product.subtype
        ? product.section === 'protection' ? protectionLabel(product.subtype) : gloveLabel(product.subtype)
        : sectionTitle(sections.find((section) => section.slug === product.section));
      const card = document.createElement('article');
      card.className = 'catalog-product';
      card.dataset.section = product.section;
      card.dataset.productSlug = product.slug || product.image.replace('/', '-');
      if (product.variants) card.dataset.variants = product.variants.join(',');
      const image = document.createElement('img');
      image.src = product.imageUrl || `assets/${product.image}.webp`;
      image.alt = titleText;
      image.loading = 'lazy';
      image.decoding = 'async';
      const info = document.createElement('div');
      info.className = 'catalog-product-info';
      const category = document.createElement('p');
      category.className = 'catalog-product-category';
      category.textContent = categoryText;
      const heading = document.createElement('h2');
      heading.textContent = titleText;
      const action = document.createElement('div');
      action.className = 'catalog-product-action';
      const actionButton = document.createElement('button');
      actionButton.type = 'button';
      actionButton.textContent = i18n.t('details');
      actionButton.addEventListener('click', () => openProductModal(product, actionButton));
      action.append(actionButton);
      info.append(category, heading, action);
      card.append(image, info);
      return card;
    }));
    if (linkedProductSlug && !linkedProductHandled) {
      linkedProductHandled = true;
      const product = visibleProducts.find((item) => (item.slug || item.image.replace('/', '-')) === linkedProductSlug);
      const card = [...grid.children].find((item) => item.dataset.productSlug === linkedProductSlug);
      if (product && card) requestAnimationFrame(() => {
        card.scrollIntoView({ block: 'center', behavior: 'auto' });
        openProductModal(product, card.querySelector('button'));
      });
    }
  }

  addEventListener('hashchange', renderCatalog);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeProductModal();
  });
  document.addEventListener('kayo:localechange', () => {
    renderCatalog();
    if (activeModalProduct) updateProductModal(activeModalProduct);
  });
  renderCatalog();
})();
