(() => {
  const i18n = window.KayoI18n;
  const page = document.body.dataset.category;
  const cms = window.KayoCms || {};
  if (!i18n || !page) return;

  const labels = {
    en: { categories: 'Categories', characteristics: 'Characteristics', storage: 'Storage and service life', care: 'Care', safety: 'Warning', catalog: 'Go to this catalog section' },
    uk: { categories: 'Категорії', characteristics: 'Характеристики', storage: 'Зберігання та термін служби', care: 'Догляд', safety: 'Попередження', catalog: 'Перейти до розділу каталогу' },
  };

  const gloveCopy = {
    en: {
      summary: 'KAYO gloves have a specially shaped profile designed for effective and safe training, partner work and training sparring. Quality triple-density foam helps distribute and absorb impact. A wide hook-and-loop strap supports the wrist, while a breathable mesh palm insert improves ventilation and comfort.',
      characteristics: [
        'Outer material: 100% artificial leather',
        'Filling: 100% EVA foam',
        'Three-layer foam padding',
        'Reinforced seams',
        'Wide hook-and-loop closure',
        'Breathable mesh palm insert',
        'Fixed thumb',
        'Soft palm',
        'For training and sparring',
        'Sizes: 8, 10, 12, 14 and 16 oz',
      ],
      storage: 'Store the protective equipment in a dry place away from constant sunlight and high temperatures. Replace it if it is damaged or its protective performance has noticeably decreased.',
      care: 'Do not machine-wash the gloves. After each use, wipe them inside and outside and dry them at room temperature. The gloves must be completely dry before use. Clean, dry boxing wraps help prevent odour.',
      safety: 'Boxing gloves cannot provide complete protection from injury.',
    },
    uk: {
      summary: 'Рукавиці KAYO мають спеціальну форму об’єму, яка дозволяє ефективно та безпечно тренуватися, працювати в парах і проводити тренувальні спаринги. Наповнення з якісного піноматеріалу потрійної щільності допомагає правильно розподіляти та поглинати удар. Широка застібка-липучка зміцнює зап’ястя, а дихаюча сітчаста вставка на долоні покращує вентиляцію та комфорт.',
      characteristics: [
        'Зовнішній матеріал: штучна шкіра 100%',
        'Наповнювач: 100% піна EVA',
        'Спеціальне наповнення з трьох шарів піни',
        'Посилені шви для більшої міцності',
        'Застібка: широка липучка',
        'Дихаюча сітчаста вставка на долоні',
        'Фіксація великого пальця',
        'М’яка долоня',
        'Тип: для тренувань і спарингів',
        'Розміри: 8, 10, 12, 14 і 16 унцій',
      ],
      storage: 'Зберігайте захисне спорядження в сухому місці, подалі від постійного сонячного світла та високих температур. У разі пошкодження або помітного зниження захисних властивостей його необхідно замінити.',
      care: 'Не періть рукавиці у пральній машині. Після кожного використання протирайте їх зовні та всередині й сушіть за кімнатної температури. Перед використанням рукавиці мають бути повністю сухими. Чисті сухі боксерські бинти допомагають запобігти появі запаху.',
      safety: 'Боксерські рукавиці не можуть забезпечити повного захисту від травм.',
    },
  };

  const configByCategory = {
    gloves: { index: 0, section: 'gloves' },
    protection: { index: 1, section: 'protection' },
    equipment: { index: 2, section: 'equipment' },
    bags: { index: 3, section: 'bags' },
    accessories: { index: 6, section: 'accessories' },
  };

  function currentLabels() {
    return labels[i18n.locale] || labels.en;
  }

  function render() {
    const config = configByCategory[page];
    if (!config) return;
    const index = config.index;
    const ui = currentLabels();
    const title = [i18n.t(`cat${index}a`), i18n.t(`cat${index}b`)].filter(Boolean).join(' ');
    document.title = `${title} — KAYO`;
    document.querySelector('[data-category-breadcrumb]').textContent = ui.categories;
    document.querySelectorAll('[data-category-title]').forEach((node) => { node.textContent = title; });
    document.querySelector('[data-category-tagline]').textContent = i18n.t(`cat${index}desc`);
    const catalogLink = document.querySelector('[data-category-catalog]');
    catalogLink.href = `catalog.html#${config.section}`;
    catalogLink.textContent = ui.catalog;

    const detail = document.querySelector('[data-category-detail]');
    detail.replaceChildren();
    const additionalText = cms.categories?.[page]?.body?.[i18n.locale] || cms.categories?.[page]?.body?.en || '';
    const appendAdditionalText = () => {
      for (const paragraph of additionalText.split(/\n\s*\n/).map((value) => value.trim()).filter(Boolean)) {
        const node = document.createElement('p');
        node.className = 'category-detail-intro';
        node.textContent = paragraph;
        detail.append(node);
      }
    };
    if (page !== 'gloves') {
      appendAdditionalText();
      return;
    }

    const copy = gloveCopy[i18n.locale] || gloveCopy.en;
    const intro = document.createElement('p');
    intro.className = 'category-detail-intro';
    intro.textContent = copy.summary;

    const features = document.createElement('section');
    const featuresTitle = document.createElement('h2');
    featuresTitle.textContent = ui.characteristics;
    const list = document.createElement('ul');
    list.append(...copy.characteristics.map((item) => {
      const row = document.createElement('li');
      row.textContent = item;
      return row;
    }));
    features.append(featuresTitle, list);

    const textSections = [
      [ui.storage, copy.storage],
      [ui.care, copy.care],
      [ui.safety, copy.safety],
    ].map(([heading, text]) => {
      const section = document.createElement('section');
      const titleNode = document.createElement('h2');
      titleNode.textContent = heading;
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      section.append(titleNode, paragraph);
      return section;
    });
    detail.append(intro, features, ...textSections);
    appendAdditionalText();
  }

  document.addEventListener('kayo:localechange', render);
  render();
})();
