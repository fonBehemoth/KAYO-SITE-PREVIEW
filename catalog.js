(() => {
  const i18n = window.KayoI18n;
  if (!i18n) return;

  const productWhiteCorrection = 'catalog-gloves/krbm-158-red-training';
  const refreshedProductPhotos = new Set([
    'catalog-equipment/krfp-200', 'catalog-equipment/krfp-202',
    'catalog-equipment/krfp-204', 'catalog-equipment/krks-408',
    'catalog-gloves/krbg-168-blk-slv', 'catalog-gloves/krbg-248-blc',
    'catalog-gloves/krbg-248-wht', 'catalog-gloves/krbg-168-wht-blk',
    'catalog-gloves/krbm-158-blue-training', 'catalog-gloves/krbm-158-red-training',
  ]);
  const productPhotoUrl = (key, fallback) => {
    const url = fallback || `assets/${key}.webp`;
    const imageKey = key || url.match(/assets\/(catalog-[a-z]+\/[a-z0-9-]+)\.webp/)?.[1];
    if (imageKey === productWhiteCorrection) return `${url.split('?')[0]}?v=20261116-white`;
    return refreshedProductPhotos.has(imageKey) && !/v=202611(?:12|16)-white/.test(url) ? `${url}${url.includes('?') ? '&' : '?'}v=20261112-white` : url;
  };
  const refreshedGalleryPhotos = new Map(Object.values(window.KayoProductGallery || {}).flat()
    .filter((url) => /v=202611(?:12|16)-white/.test(url)).map((url) => [url.split('?')[0], url]));
  const galleryPhotoUrl = (url) => {
    const relative = url.match(/assets\/catalog-gallery\/[a-z0-9-]+\/[0-9]{2}\.webp/)?.[0];
    return refreshedGalleryPhotos.get(relative) || url;
  };

  const sections = [
    { slug: '', keys: ['catalog'], description: 'heroSub' },
    { slug: 'gloves', keys: ['cat0a', 'cat0b'], description: 'cat0desc' },
    { slug: 'protection', keys: ['cat1a', 'cat1b'], description: 'cat1desc' },
    { slug: 'equipment', keys: ['cat2a', 'cat2b'], description: 'cat2desc' },
    { slug: 'bags', keys: ['cat3a', 'cat3b'], description: 'cat3desc' },
    { slug: 'accessories', keys: ['cat6a', 'cat6b'], description: 'cat6desc' },
  ];

  const gloveLabels = {
    ru: {"allGloves": "Все перчатки", "boxing": "Боксерские перчатки", "mma": "Перчатки MMA", "training": "Снарядные перчатки", "kids": "Детские перчатки", "models": "моделей", "positions": "позиций", "close": "Закрыть", "availableSizes": "Доступные размеры", "descriptionPending": "Подробное описание появится после подтверждения информации о товаре."},
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
    { slug: 'gloves-boxing', label: 'boxing', subtype: 'boxing', image: 'krbg-165-blk-red', lifestyle: 'boxing-gloves-person', sizes: '4–16 oz' },
    { slug: 'gloves-mma', label: 'mma', subtype: 'mma', image: 'krgb-161-black-mma', lifestyle: 'mma-gloves-person', sizes: 'M–XL' },
    { slug: 'gloves-training', label: 'training', subtype: 'training', image: 'krbm-158-blue-training', lifestyle: 'bag-gloves', sizes: 'L' },
    { slug: 'kids', label: 'kids', subtype: 'kids', image: 'krbg-241-blue-kids', lifestyle: 'kids-gloves', sizes: '4–6 oz' },
  ];

  const protectionLabels = {
    ru: {"allProtection": "Вся защита", "mouthguards": "Капы", "wraps": "Бинты", "groin": "Бандажи", "helmets": "Шлемы", "shinguards": "Защита голени", "positions": "позиций", "descriptionPending": "Подробное описание появится после подтверждения информации о товаре."},
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
    { slug: 'protection-mouthguards', lifestyle: 'mouthguards', label: 'mouthguards', subtype: 'mouthguards', image: 'krm-180-ylw' },
    { slug: 'protection-wraps', label: 'wraps', subtype: 'wraps', image: 'krep-231-red' },
    { slug: 'protection-groin', label: 'groin', subtype: 'groin', image: 'krep-213-wht' },
    { slug: 'protection-helmets', label: 'helmets', subtype: 'helmets', image: 'krhg-162-blc-red', lifestyle: 'head-guard-person' },
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
  const products = cms.catalogManaged ? (cms.products || []).map((product) => ({
    ...product,
    images: product.images?.map(galleryPhotoUrl),
  })) : staticProducts;
  const gloveLabel = (key) => (gloveLabels[i18n.locale] || gloveLabels.en)[key] || gloveLabels.en[key];
  const protectionLabel = (key) => (protectionLabels[i18n.locale] || protectionLabels.en)[key] || protectionLabels.en[key];
  const detailLabels = {
    ru: ["Характеристики", "Название", "Категория", "Артикул", "Размер", "Возрастная группа", "Особенности", "Материал", "Цвет", "Вес брутто", "Длина", "Ширина", "Высота", "Описание"],
    en: ['Specifications', 'Name', 'Category', 'Article number', 'Size', 'Age group', 'Features', 'Material', 'Colour', 'Gross weight', 'Length', 'Width', 'Height', 'Description'],
    uk: ['Характеристики', 'Найменування', 'Категорія', 'Артикул', 'Розмір', 'Вікова група', 'Особливості', 'Матеріал', 'Колір', 'Вага брутто', 'Довжина', 'Ширина', 'Висота', 'Опис'],
    cs: ['Parametry', 'Název', 'Kategorie', 'Kód výrobku', 'Velikost', 'Věková skupina', 'Vlastnosti', 'Materiál', 'Barva', 'Hrubá hmotnost', 'Délka', 'Šířka', 'Výška', 'Popis'],
    pl: ['Specyfikacja', 'Nazwa', 'Kategoria', 'Numer artykułu', 'Rozmiar', 'Grupa wiekowa', 'Cechy', 'Materiał', 'Kolor', 'Waga brutto', 'Długość', 'Szerokość', 'Wysokość', 'Opis'],
    de: ['Eigenschaften', 'Name', 'Kategorie', 'Artikelnummer', 'Größe', 'Altersgruppe', 'Merkmale', 'Material', 'Farbe', 'Bruttogewicht', 'Länge', 'Breite', 'Höhe', 'Beschreibung'],
    fr: ['Caractéristiques', 'Nom', 'Catégorie', 'Référence', 'Taille', 'Tranche d’âge', 'Caractéristiques', 'Matière', 'Couleur', 'Poids brut', 'Longueur', 'Largeur', 'Hauteur', 'Description'],
    es: ['Características', 'Nombre', 'Categoría', 'Referencia', 'Talla', 'Grupo de edad', 'Características', 'Material', 'Color', 'Peso bruto', 'Largo', 'Ancho', 'Alto', 'Descripción'],
  };
  const detailLabel = (index) => (detailLabels[i18n.locale] || detailLabels.en)[index];
  const localizedSpecification = (value) => typeof value === 'string' ? value : value?.[i18n.locale] || value?.en || '';
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

  const filterCopy = {
    ru: ["Фильтры", "Категория", "Подкатегория / тип", "Цвет", "Размер", "Материал", "Наличие", "Все", "В наличии", "Сбросить", "Модель или артикул", "Применить", "Ничего не найдено. Измените фильтры."],
    en: ['Filters', 'Category', 'Subcategory / type', 'Colour', 'Size', 'Material', 'Availability', 'All', 'In stock', 'Reset', 'Model or code', 'Apply', 'No products match. Try changing the filters.'],
    uk: ['Фільтри', 'Категорія', 'Підкатегорія / тип', 'Колір', 'Розмір', 'Матеріал', 'Наявність', 'Усі', 'У наявності', 'Скинути', 'Модель або код', 'Застосувати', 'Товарів за цими умовами немає. Змініть фільтри.'],
    cs: ['Filtry', 'Kategorie', 'Podkategorie / typ', 'Barva', 'Velikost', 'Materiál', 'Dostupnost', 'Vše', 'Skladem', 'Resetovat', 'Model nebo kód', 'Použít', 'Žádné odpovídající produkty. Změňte filtry.'],
    pl: ['Filtry', 'Kategoria', 'Podkategoria / typ', 'Kolor', 'Rozmiar', 'Materiał', 'Dostępność', 'Wszystkie', 'Dostępne', 'Wyczyść', 'Model lub kod', 'Zastosuj', 'Brak pasujących produktów. Zmień filtry.'],
    de: ['Filter', 'Kategorie', 'Unterkategorie / Typ', 'Farbe', 'Größe', 'Material', 'Verfügbarkeit', 'Alle', 'Auf Lager', 'Zurücksetzen', 'Modell oder Code', 'Anwenden', 'Keine passenden Produkte. Ändere die Filter.'],
    fr: ['Filtres', 'Catégorie', 'Sous-catégorie / type', 'Couleur', 'Taille', 'Matière', 'Disponibilité', 'Tous', 'En stock', 'Réinitialiser', 'Modèle ou code', 'Appliquer', 'Aucun produit correspondant. Modifiez les filtres.'],
    es: ['Filtros', 'Categoría', 'Subcategoría / tipo', 'Color', 'Talla', 'Material', 'Disponibilidad', 'Todos', 'En stock', 'Restablecer', 'Modelo o código', 'Aplicar', 'No hay productos que coincidan. Cambia los filtros.'],
  };
  const colorNames = {
    black: ['Black', 'Чорний', 'Černá', 'Czarny', 'Schwarz', 'Noir', 'Negro'],
    white: ['White', 'Білий', 'Bílá', 'Biały', 'Weiß', 'Blanc', 'Blanco'],
    red: ['Red', 'Червоний', 'Červená', 'Czerwony', 'Rot', 'Rouge', 'Rojo'],
    blue: ['Blue', 'Синій', 'Modrá', 'Niebieski', 'Blau', 'Bleu', 'Azul'],
    yellow: ['Yellow', 'Жовтий', 'Žlutá', 'Żółty', 'Gelb', 'Jaune', 'Amarillo'],
    silver: ['Silver', 'Сріблястий', 'Stříbrná', 'Srebrny', 'Silber', 'Argent', 'Plateado'],
  };
  const localeIndex = () => Math.max(0, ['en','uk','cs','pl','de','fr','es'].indexOf(i18n.locale));
  const filterState = {};
  for (const key of ['color','size','material','stock','q']) filterState[key] = new URL(location.href).searchParams.get(`f_${key}`)?.slice(0, 160) || '';
  const colorsFor = product => {
    const stored = product.filterColors;
    if (Array.isArray(stored) && stored.length) return stored.filter(key => colorNames[key]);
    const title = (product.title || '').toUpperCase();
    const tokens = {black:/\b(BLACK|BLK|BLC)\b/,white:/\b(WHITE|WHT)\b/,red:/\bRED\b/,blue:/\b(BLUE|BLU)\b/,yellow:/\b(YELLOW|YLW)\b/,silver:/\b(SILVER|SLV)\b/};
    return Object.entries(tokens).filter(([,pattern]) => pattern.test(title)).map(([key]) => key);
  };
  const materialFor = product => product.specifications?.material?.en || '';
  const inStock = (product, size) => {
    const inventory = product.inventory || {};
    return size ? Number.isInteger(inventory[size]) && inventory[size] > 0 : Object.values(inventory).some(n => Number.isInteger(n) && n > 0);
  };
  function applyProductFilters(product) {
    return (!filterState.color || colorsFor(product).includes(filterState.color))
      && (!filterState.size || (product.variants || []).includes(filterState.size))
      && (!filterState.material || materialFor(product) === filterState.material)
      && (!filterState.stock || inStock(product, filterState.size))
      && (!filterState.q || `${product.title || ''} ${product.slug || ''}`.toLocaleLowerCase().includes(filterState.q.toLocaleLowerCase()));
  }
  function syncFilterUrl() {
    const url = new URL(location.href);
    for (const [key,value] of Object.entries(filterState)) { if (value) url.searchParams.set(`f_${key}`, value); else url.searchParams.delete(`f_${key}`); }
    history.replaceState(null, '', url);
  }
  const filterDialogCopy = {ru:['Закрыть фильтры','Показать товары'],en:['Close filters','Show products'],uk:['Закрити фільтри','Показати товари'],cs:['Zavřít filtry','Zobrazit produkty'],pl:['Zamknij filtry','Pokaż produkty'],de:['Filter schließen','Produkte anzeigen'],fr:['Fermer les filtres','Afficher les produits'],es:['Cerrar filtros','Mostrar productos']};
  let filterDialogOpen = false;
  function renderFilters(active, subsection) {
    const labels = filterCopy[i18n.locale] || filterCopy.en;
    document.querySelector('.catalog-filters')?.remove();
    const previousDialog = document.querySelector('.catalog-filter-dialog');
    if (previousDialog?.open) previousDialog.close();
    previousDialog?.remove();
    const panel = document.createElement('div'); panel.className = 'catalog-filters';
    const summary = document.createElement('button'); summary.type = 'button'; summary.className = 'catalog-filter-toggle'; summary.textContent = labels[0];summary.insertAdjacentHTML('beforeend','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/><circle cx="8" cy="6" r="2" fill="#ffb000"/><circle cx="16" cy="12" r="2" fill="#ffb000"/><circle cx="10" cy="18" r="2" fill="#ffb000"/></svg>'); summary.setAttribute('aria-haspopup','dialog'); summary.setAttribute('aria-expanded', String(filterDialogOpen)); panel.append(summary);
    const dialog = document.createElement('dialog'); dialog.className = 'catalog-filter-dialog'; dialog.setAttribute('aria-labelledby','catalog-filter-title');
    const header = document.createElement('header');
    const heading = document.createElement('h2'); heading.id = 'catalog-filter-title'; heading.textContent = labels[0];
    const close = document.createElement('button'); close.type = 'button'; close.textContent = '×'; close.setAttribute('aria-label',(filterDialogCopy[i18n.locale] || filterDialogCopy.en)[0]); header.append(heading,close); dialog.append(header);
    const closeDialog = () => {filterDialogOpen = false; dialog.close(); summary.setAttribute('aria-expanded','false'); summary.focus();};
    close.addEventListener('click',closeDialog);
    dialog.addEventListener('cancel', e => { e.preventDefault(); closeDialog(); });
    dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))closeDialog();});
    summary.addEventListener('click',()=>{filterDialogOpen=true; summary.setAttribute('aria-expanded','true'); dialog.showModal();});
    const form = document.createElement('form'); form.className = 'catalog-filter-fields';
    const select = (key, label, options, value, changed) => {
      const wrapper = document.createElement('label'); wrapper.textContent = label;
      const input = document.createElement('select'); input.name = key; input.dataset.filterKey = key;
      const all = document.createElement('option'); all.value = ''; all.textContent = labels[7]; input.append(all);
      for (const [id,text] of options) { const option = document.createElement('option'); option.value = id; option.textContent = text; input.append(option); }
      if (value && !options.some(([id]) => id === value)) { const saved = document.createElement('option'); saved.value = value; saved.textContent = value; input.append(saved); }
      input.value = value;
      input.addEventListener('change', () => { changed(input.value); syncFilterUrl(); renderCatalog(); document.querySelector(`[data-filter-key="${key}"]`)?.focus(); });
      wrapper.append(input); form.append(wrapper);
    };
    select('category', labels[1], sections.filter(s=>s.slug).map(s=>[s.slug, sectionTitle(s)]), active.slug, value => { const url = new URL(location.href); url.hash = value; history.replaceState(null,'',url); });
    const subs = active.slug === 'gloves' ? gloveSections.filter(s=>s.subtype) : active.slug === 'protection' ? protectionSections.filter(s=>s.subtype) : [...gloveSections,...protectionSections].filter(s=>s.subtype);
    select('type', labels[2], subs.map(s=>[s.slug, s.slug.startsWith('protection') ? protectionLabel(s.label) : gloveLabel(s.label)]), subsection?.subtype ? subsection.slug : '', value => { const url = new URL(location.href); url.hash = value || active.slug; history.replaceState(null,'',url); });
    const base = products.filter(p=>(!active.slug || p.section===active.slug) && (!subsection?.subtype || p.subtype===subsection.subtype));
    const unique = values => [...new Set(values)].filter(Boolean).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
    select('color',labels[3],unique(base.flatMap(colorsFor)).map(c=>[c,colorNames[c][localeIndex()]]),filterState.color,v=>filterState.color=v);
    select('size',labels[4],unique(base.flatMap(p=>p.variants||[])).map(s=>[s,s]),filterState.size,v=>filterState.size=v);
    select('material',labels[5],unique(base.map(materialFor)).map(m=>[m,base.find(p=>materialFor(p)===m)?.specifications?.material?.[i18n.locale]||m]),filterState.material,v=>filterState.material=v);
    select('stock',labels[6],[['yes',labels[8]]],filterState.stock,v=>filterState.stock=v);
    const searchLabel=document.createElement('label');searchLabel.textContent=labels[10];const search=document.createElement('input');search.type='search';search.maxLength=160;search.name='q';search.value=filterState.q;searchLabel.append(search);form.append(searchLabel);
    const show=document.createElement('button');show.type='submit';show.className='catalog-filter-show';show.textContent=(filterDialogCopy[i18n.locale]||filterDialogCopy.en)[1];
    const reset=document.createElement('button');reset.type='button';reset.textContent=labels[9];reset.addEventListener('click',()=>{Object.keys(filterState).forEach(k=>filterState[k]='');syncFilterUrl();const url=new URL(location.href);url.hash='';history.replaceState(null,'',url);renderCatalog();document.querySelector('[data-filter-key="category"]')?.focus();});form.append(reset);
    form.addEventListener('submit',e=>{e.preventDefault();filterState.q=search.value.trim();syncFilterUrl();filterDialogOpen=false;renderCatalog();document.querySelector('.catalog-filter-toggle')?.focus();});
    form.append(show); dialog.append(form); document.body.append(dialog); document.querySelector('.catalog-toolbar').before(panel);
    if (filterDialogOpen) dialog.showModal();
    const counter=document.querySelector('[data-catalog-count]'); counter.setAttribute('aria-live','polite');
    document.querySelector('.catalog-empty').textContent=labels[12];
  }

  const personalLabels = {
    ru: ["Недавно просмотренные", "Избранное", "Добавить в избранное", "Удалить из избранного"],
    en: ['Recently viewed', 'Favourites', 'Save to favourites', 'Remove from favourites'],
    uk: ['Нещодавно переглянуті', 'Обране', 'Додати до обраного', 'Видалити з обраного'],
    cs: ['Nedávno prohlížené', 'Oblíbené', 'Přidat do oblíbených', 'Odebrat z oblíbených'],
    pl: ['Ostatnio oglądane', 'Ulubione', 'Dodaj do ulubionych', 'Usuń z ulubionych'],
    de: ['Zuletzt angesehen', 'Favoriten', 'Zu Favoriten hinzufügen', 'Aus Favoriten entfernen'],
    fr: ['Consultés récemment', 'Favoris', 'Ajouter aux favoris', 'Retirer des favoris'],
    es: ['Vistos recientemente', 'Favoritos', 'Añadir a favoritos', 'Quitar de favoritos'],
  };
  const productId = product => product.slug || product.image;
  const readPersonal = name => {
    try {
      const value = JSON.parse(window.KayoPrivacy?.get(`kayo-${name}`) || '[]');
      return Array.isArray(value) ? [...new Set(value.filter(id => typeof id === 'string' && products.some(p => productId(p) === id)))].slice(0, 100) : [];
    } catch { return []; }
  };
  let favourites = readPersonal('favourites');
  let recent = readPersonal('recent').slice(0, 7);
  try { window.KayoPrivacy?.set('kayo-recent', JSON.stringify(recent)); } catch {}
  const savePersonal = (name, value) => { try { window.KayoPrivacy?.set(`kayo-${name}`, JSON.stringify(value)); } catch {} };
  function favouriteButton(product) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'catalog-favourite';
    const update = () => {
      const saved = favourites.includes(productId(product));
      const labels = personalLabels[i18n.locale] || personalLabels.en;
      button.textContent = saved ? '♥' : '♡';
      button.setAttribute('aria-pressed', String(saved));
      button.setAttribute('aria-label', labels[saved ? 3 : 2]);
    };
    update();
    button.addEventListener('click', () => {
      const id = productId(product);
      favourites = favourites.includes(id) ? favourites.filter(item => item !== id) : [id, ...favourites].slice(0, 100);
      savePersonal('favourites', favourites);
      if (isCatalogPage) renderCatalog();
      document.querySelectorAll('.product-modal .catalog-favourite').forEach(b => { const saved = favourites.includes(productId(product)); b.textContent = saved ? '♥' : '♡'; b.setAttribute('aria-pressed', String(saved)); b.setAttribute('aria-label', (personalLabels[i18n.locale] || personalLabels.en)[saved ? 3 : 2]); });
    });
    return button;
  }
  function renderPersonal() {
    const parent = document.querySelector('.catalog-inner');
    if (!parent) return;
    parent.querySelector('.catalog-personal')?.remove();
    const holder = document.createElement('div');
    holder.className = 'catalog-personal';
    const labels = personalLabels[i18n.locale] || personalLabels.en;
    for (const [index, ids] of [[1, favourites], [0, recent]]) {
      if (!ids.length) continue;
      const section = document.createElement('section');
      const heading = document.createElement('h2');
      heading.textContent = `${labels[index]} (${ids.length})`;
      const grid = document.createElement('div');
      grid.className = 'catalog-personal-grid';
      for (const id of ids) {
        const product = products.find(p => productId(p) === id);
        if (!product) continue;
        const card = document.createElement('div');
        const open = document.createElement('button');
        open.type = 'button';
        const image = document.createElement('img');
        image.src = productPhotoUrl(product.image, product.imageUrl);
        image.alt = '';
        image.loading = 'lazy';
        const title = document.createElement('span');
        title.textContent = product.title || i18n.t(product.key);
        open.append(image, title);
        open.addEventListener('click', () => openProductModal(product, open));
        card.append(open, favouriteButton(product));
        grid.append(card);
      }
      section.append(heading, grid);
      if (index === 0) {
        section.classList.add('catalog-recent');
        const viewport = document.createElement('div'); viewport.className = 'catalog-recent-viewport';
        grid.classList.add('catalog-recent-track'); grid.tabIndex = 0;
        grid.setAttribute('role','region'); grid.setAttribute('aria-label',labels[0]);
        const controls = document.createElement('div'); controls.className = 'catalog-recent-controls';
        const prev = document.createElement('button'); const next = document.createElement('button');
        const directions = {ru:['Предыдущие товары','Следующие товары'],en:['Previous products','Next products'],uk:['Попередні товари','Наступні товари'],cs:['Předchozí produkty','Další produkty'],pl:['Poprzednie produkty','Następne produkty'],de:['Vorherige Produkte','Weitere Produkte'],fr:['Produits précédents','Produits suivants'],es:['Productos anteriores','Productos siguientes']};
        [prev,next].forEach((b,i)=>{b.type='button';b.textContent=i?'›':'‹';b.setAttribute('aria-label',(directions[i18n.locale]||directions.en)[i]);});
        const move = direction => grid.scrollBy({left:direction * (grid.firstElementChild?.getBoundingClientRect().width + 16 || grid.clientWidth),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
        prev.addEventListener('click',()=>move(-1)); next.addEventListener('click',()=>move(1));
        grid.addEventListener('keydown',event=>{if(event.target!==grid)return;if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();if(event.key==='Home')grid.scrollTo({left:0});else if(event.key==='End')grid.scrollTo({left:grid.scrollWidth});else move(event.key==='ArrowLeft'?-1:1);}});
        const update = () => {const left=grid.scrollLeft;const max=grid.scrollWidth-grid.clientWidth;prev.disabled=left<=1;next.disabled=left>=max-1;viewport.classList.toggle('has-more',left<max-1);};
        grid.addEventListener('scroll',update,{passive:true});
        const observer=new ResizeObserver(()=>{if(!grid.isConnected){observer.disconnect();return;}update();}); observer.observe(grid);
        controls.append(prev,next);viewport.append(grid);section.replaceChildren(heading,controls,viewport);requestAnimationFrame(update);
      }

      holder.append(section);
    }
    parent.append(holder);
  }

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
          <section class="product-modal-specifications" aria-labelledby="product-modal-specifications-title">
            <h3 id="product-modal-specifications-title"></h3>
            <dl></dl>
          </section>
          <section class="product-modal-description" aria-labelledby="product-modal-description-title">
            <h3 id="product-modal-description-title"></h3>
            <p class="product-modal-note"></p>
          </section>
          <a class="product-modal-catalog-link" href="catalog.html"></a>
        </div>
      </section>`;
    modal.addEventListener('click', (event) => {
      if (event.target.closest('[data-modal-close]')) closeProductModal();
    });
    document.body.append(modal);
    window.KayoGalleryUI.decorate(modal);
    return modal;
  }

  const extraSpecLabels = {
    ru: ["Вес нетто", "Толщина", "Объём", "Назначение", "Фиксация", "Наполнитель", "Комплектация", "Уход", "Страна производства", "Пол", "Штрихкод", "Количество слоёв наполнителя"],
    en:['Net weight','Thickness','Capacity','Intended use','Fastening','Padding','Package contents','Care','Country of manufacture','Gender','Barcode','Layers of padding'],
    uk:['Вага нетто','Товщина','Об’єм','Призначення','Фіксація','Наповнювач','Комплектація','Догляд','Країна виробництва','Стать','Штрихкод','Кількість шарів наповнювача'],
    cs:['Čistá hmotnost','Tloušťka','Objem','Použití','Zapínání','Výplň','Obsah balení','Údržba','Země výroby','Pohlaví','Čárový kód','Počet vrstev výplně'],
    pl:['Masa netto','Grubość','Pojemność','Przeznaczenie','Zapięcie','Wypełnienie','Zawartość opakowania','Pielęgnacja','Kraj produkcji','Płeć','Kod kreskowy','Liczba warstw wypełnienia'],
    de:['Nettogewicht','Dicke','Volumen','Verwendungszweck','Verschluss','Polsterung','Lieferumfang','Pflege','Herstellungsland','Geschlecht','Barcode','Polsterschichten'],
    fr:['Poids net','Épaisseur','Volume','Utilisation','Fermeture','Rembourrage','Contenu du colis','Entretien','Pays de fabrication','Genre','Code-barres','Couches de rembourrage'],
    es:['Peso neto','Grosor','Capacidad','Uso','Cierre','Acolchado','Contenido del paquete','Cuidados','País de fabricación','Género','Código de barras','Capas de acolchado'],
  };
  function appendExtraSpecifications(list, product) {
    const labels = extraSpecLabels[i18n.locale] || extraSpecLabels.en;
    const keys = ['netWeightGrams','thickness','volume','purpose','fastening','padding','packageContents','care','countryOfOrigin','gender','barcode','layers'];
    const specs = product.specifications || {};
    keys.forEach((key,index)=>{
      const dynamic = key === 'netWeightGrams' || key === 'barcode';
      const value = typeof specs[key] === 'object' ? localizedSpecification(specs[key]) : specs[key];
      if (!value && !(dynamic && (product.skus || []).some(s=>s.specifications?.[key]!==undefined))) return;
      const row = document.createElement('div'); row.dataset.specKey = key;
      const term = document.createElement('dt'); term.textContent = labels[index];
      const definition = document.createElement('dd'); definition.textContent = dynamic ? '—' : value;
      row.append(term,definition);list.append(row);
    });
    list.children[8].dataset.specKey = 'grossWeightGrams';
    list.children[8].dataset.baseValue = list.children[8].querySelector('dd').textContent;
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
    modal.querySelector('.catalog-favourite')?.remove();
    const favourite = favouriteButton(product); favourite.classList.add('product-modal-favourite'); modal.querySelector('.product-modal-specifications').before(favourite);
    const specifications = product.specifications || {};
    const rows = [
      titleText, categoryText, specifications.article,
      product.variants?.join(' · '), localizedSpecification(specifications.ageGroup),
      localizedSpecification(specifications.features), localizedSpecification(specifications.material),
      localizedSpecification(specifications.color), specifications.grossWeight,
      specifications.length, specifications.width, specifications.height,
    ];
    const list = modal.querySelector('.product-modal-specifications dl');
    list.replaceChildren(...rows.map((value, index) => {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const definition = document.createElement('dd');
      term.textContent = detailLabel(index + 1);
      definition.textContent = typeof value === 'string' && value.trim() ? value.trim() : '—';
      row.append(term, definition);
      return row;
    }));
    appendExtraSpecifications(list, product);
    window.KayoSizeChart?.renderVariants(modal, product, i18n.locale);
    modal.querySelector('#product-modal-specifications-title').textContent = detailLabel(0);
    modal.querySelector('#product-modal-description-title').textContent = detailLabel(13);
    modal.dataset.productSlug = productSlug(product);
    renderRelated(modal, product);
    window.KayoReviews?.render(modal, product);
    modal.querySelector('.product-modal-note').textContent = (product.description?.[i18n.locale] || product.description?.en) || (product.section === 'gloves'
      ? gloveDescription(product)
      : product.section === 'protection'
        ? protectionLabel('descriptionPending')
        : gloveLabel('descriptionPending'));
    const catalogLink = modal.querySelector('.product-modal-catalog-link');
    const catalogLinkLabels = {
      ru: 'Открыть в каталоге', en: 'Open in catalog', uk: 'Відкрити в каталозі', cs: 'Otevřít v katalogu',
      pl: 'Otwórz w katalogu', de: 'Im Katalog öffnen', fr: 'Ouvrir dans le catalogue',
      es: 'Abrir en el catálogo',
    };
    catalogLink.textContent = catalogLinkLabels[i18n.locale] || catalogLinkLabels.en;
    catalogLink.href = `catalog.html?product=${encodeURIComponent(productSlug(product))}#${encodeURIComponent(product.section)}`;
    catalogLink.hidden = Boolean(document.querySelector('.catalog-page'));
    modal.querySelectorAll('[data-modal-close]').forEach((button) => {
      button.setAttribute('aria-label', gloveLabel('close'));
    });
  }

  function renderRelated(modal, product) {
    modal.querySelectorAll('.product-related').forEach(section=>section.remove());
    for (const [field,key] of [['relatedProducts','completeKit'],['alternativeProducts','otherColours']]) {
      const selected=(product[field]||[]).map(slug=>products.find(p=>productSlug(p)===slug)).filter(p=>p&&p!==product);
      if(!selected.length)continue;
      const section=document.createElement('section');section.className='product-related';section.dataset.recommendation=field;
      const heading=document.createElement('h3');
      const fallback={completeKit:{en:'Complete your training kit',uk:'Доповніть екіпірування',ru:'Дополните экипировку'},otherColours:{en:'Other colours of this model',uk:'Інші кольори цієї моделі',ru:'Другие цвета этой модели'}};
      heading.textContent=window.KayoEngagement?.t(key)||fallback[key][i18n.locale]||fallback[key].en;
      const grid=document.createElement('div');grid.className='product-related-grid';
      selected.forEach(item=>{const link=document.createElement('a');link.href=`catalog.html?product=${encodeURIComponent(productSlug(item))}#${encodeURIComponent(item.section)}`;const image=document.createElement('img');image.src=productPhotoUrl(item.image,item.imageUrl);image.alt='';image.loading='lazy';const title=document.createElement('span');title.textContent=item.title;link.append(image,title);grid.append(link)});
      section.append(heading,grid);modal.querySelector('.product-modal-content').append(section);
    }
  }
  function openProductModal(product, trigger) {
    recent = [productId(product), ...recent.filter(id => id !== productId(product))].slice(0, 7);
    savePersonal('recent', recent);
    renderPersonal();
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
    window.KayoSizeChart?.closeChart();
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

  const productSlug = (product) => product.slug || product.image?.replace('/', '-');
  window.KayoCatalog = {
    products,
    openBySlug(slug, trigger) {
      const product = products.find((item) => productSlug(item) === slug);
      if (!product || !window.KayoGalleryUI) return false;
      openProductModal(product, trigger);
      return true;
    },
  };

  document.addEventListener('click', (event) => {
    const link = event.target.closest('#hit-cards .product-action a, #hit-cards .product-photo-link, #sale-cards .product-action a, #sale-cards .product-photo-link, .hits-grid .hit-card .offer-link, .hits-grid .hit-card .hit-photo-link, .offers-grid:not(.hits-grid) .offer-card .offer-link, .offers-grid:not(.hits-grid) .offer-card .offer-photo-link');
    if (!link) return;
    const slug = new URL(link.href, location.href).searchParams.get('product');
    if (slug && window.KayoCatalog.openBySlug(slug, link)) event.preventDefault();
  });

  function renderCatalog() {
    const active = activeSection();
    document.documentElement.dataset.catalogInitialSection = active.slug || '';
    const gloveSection = activeGloveSection();
    const protectionSection = activeProtectionSection();
    let visibleProducts = active.slug ? products.filter((product) => product.section === active.slug) : products;
    if (gloveSection?.subtype) visibleProducts = products.filter((product) => product.subtype === gloveSection.subtype);
    if (protectionSection?.subtype) visibleProducts = products.filter((product) => product.section === 'protection' && product.subtype === protectionSection.subtype);

    visibleProducts = visibleProducts.filter(applyProductFilters);
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
    document.querySelectorAll('[data-catalog-feature]').forEach((feature) => {
      feature.hidden = feature.dataset.catalogFeature !== (gloveSection?.slug || protectionSection?.slug || active.slug);
    });
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
      categoryGrid.classList.toggle('catalog-subcategory-grid--gloves', subsectionConfig.assetFolder === 'catalog-gloves');
      categoryGrid.append(...subsectionConfig.sections.filter((section) => section.subtype).map((section) => {
        const link = document.createElement('a');
        link.className = 'catalog-subcategory-card';
        link.classList.toggle('has-lifestyle', Boolean(section.lifestyle));
        link.href = `#${section.slug}`;
        link.classList.toggle('active', section.slug === selectedSlug);
        if (link.classList.contains('active')) link.setAttribute('aria-current', 'page');
        const image = document.createElement('img');
        image.className = 'catalog-subcategory-product-image';
        image.src = productPhotoUrl(`${subsectionConfig.assetFolder}/${section.image}`);
        image.alt = '';
        image.loading = 'lazy';
        const copy = document.createElement('span');
        copy.className = 'catalog-subcategory-copy';
        const heading = document.createElement('strong');
        heading.textContent = subsectionConfig.label(section.label);
        const meta = document.createElement('small');
        const count = subsectionConfig.products.filter((product) => product.subtype === section.subtype).length;
        meta.textContent = section.sizes ? `${gloveModelCount(count)} · ${section.sizes}` : gloveModelCount(count);
        copy.append(heading, meta);
        link.append(image, copy);
        if (section.lifestyle) {
          const lifestyle = document.createElement('img');
          lifestyle.className = 'catalog-subcategory-lifestyle-image';
          lifestyle.src = `assets/catalog-lifestyle/${section.lifestyle}.webp`;
          lifestyle.alt = '';
          lifestyle.loading = 'lazy';
          lifestyle.decoding = 'async';
          link.append(lifestyle);
        }
        return link;
      }));
      subcategories.append(allLink, categoryGrid);
    }

    renderFilters(active, gloveSection?.subtype ? gloveSection : protectionSection);
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
      image.src = productPhotoUrl(product.image, product.imageUrl);
      image.alt = titleText;
      image.loading = 'lazy';
      image.decoding = 'async';
      const imageButton = document.createElement('button');
      imageButton.type = 'button';
      imageButton.className = 'catalog-product-photo';
      imageButton.setAttribute('aria-label', `${i18n.t('details')}: ${titleText}`);
      imageButton.append(image);
      imageButton.addEventListener('click', () => openProductModal(product, imageButton));
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
      action.append(favouriteButton(product), actionButton);
      info.append(category, heading, action);
      card.append(imageButton, info);
      return card;
    }));
    renderPersonal();
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

  const isCatalogPage = Boolean(document.querySelector('.catalog-page'));
  if (isCatalogPage) addEventListener('hashchange', renderCatalog);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !document.querySelector('.kayo-dialog[open]')) closeProductModal();
  });
  document.addEventListener('kayo:localechange', () => {
    if (isCatalogPage) renderCatalog();
    if (activeModalProduct) updateProductModal(activeModalProduct);
  });
  if (isCatalogPage) renderCatalog();
})();
