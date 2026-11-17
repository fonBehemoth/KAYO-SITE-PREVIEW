(() => {
  const translations = {
    en: {
      size: 'Size', selected: 'Selected size', view: 'View size chart', close: 'Close size chart',
      title: 'Boxing glove size guide', metric: 'Metric', imperial: 'Imperial',
      glove: 'Glove size', weight: 'Body weight', knuckle: 'Knuckle circumference',
      note: 'Approximate guide for 8–16 oz gloves. Fit varies by model.',
      paragraphs: [
        'Glove weight, measured in ounces (oz), helps you choose the right pair. The ideal size depends on your body weight, training type, and intended use.',
        'Heavier gloves provide more cushioning and protection for you and your training partner. Lighter gloves, such as 10 oz, are commonly used for competition; heavier gloves, 14–16 oz or more, are often chosen for sparring and partner training.',
        'For different types of training:',
        'Beginners may prefer heavier gloves for comfort and gradual adaptation. Each model has its own fit, foam distribution, and support. Check the product details and try gloves with hand wraps to avoid pressure points.',
        'If in doubt, ask your coach for advice tailored to your weight, level, and training goals.',
        'Reminder: “oz” indicates the glove’s weight. Choose gloves according to your training intensity, frequency, and desired protection.',
      ],
      activities: [
        ['Competition', '8–10 oz; rules often depend on the category.'],
        ['Bag and pad work', '12–14 oz for a balance of comfort and versatility.'],
        ['Sparring', 'At least 14 oz; 16 oz or more is often recommended for adults.'],
      ],
    },
    uk: {
      size: 'Розмір', selected: 'Обраний розмір', view: 'Таблиця розмірів', close: 'Закрити таблицю розмірів',
      title: 'Як обрати розмір боксерських рукавичок', metric: 'Метрична', imperial: 'Імперська',
      glove: 'Розмір рукавичок', weight: 'Вага тіла', knuckle: 'Обхват долоні на рівні кісточок',
      note: 'Орієнтовна таблиця для рукавичок 8–16 oz. Посадка залежить від моделі.',
      paragraphs: [
        'Вага рукавичок вимірюється в унціях (oz) і допомагає обрати відповідну пару. Оптимальний розмір залежить від ваги тіла, виду тренувань і мети використання.',
        'Важчі рукавички забезпечують більше амортизації та захисту для вас і партнера. Легші, наприклад 10 oz, часто використовують на змаганнях; важчі, 14–16 oz і більше, часто обирають для спарингів і роботи з партнером.',
        'Для різних видів тренувань:',
        'Початківцям можуть підійти важчі рукавички для комфорту й поступового звикання. Кожна модель має власну посадку, розподіл піни та підтримку. Перевіряйте опис товару й приміряйте рукавички разом із бинтами, щоб уникнути точок тиску.',
        'Якщо сумніваєтеся, запитайте тренера: він врахує вашу вагу, рівень і цілі тренувань.',
        'Нагадування: «oz» позначає вагу рукавички. Обирайте рукавички відповідно до інтенсивності, частоти тренувань і потрібного захисту.',
      ],
      activities: [
        ['Змагання', '8–10 oz; правила часто залежать від категорії.'],
        ['Робота з мішком і лапами', '12–14 oz для балансу комфорту та універсальності.'],
        ['Спаринг', 'Щонайменше 14 oz; дорослим часто рекомендують 16 oz або більше.'],
      ],
    },
    cs: {
      size: 'Velikost', selected: 'Zvolená velikost', view: 'Tabulka velikostí', close: 'Zavřít tabulku velikostí',
      title: 'Průvodce velikostmi boxerských rukavic', metric: 'Metrické', imperial: 'Imperiální',
      glove: 'Velikost rukavic', weight: 'Tělesná hmotnost', knuckle: 'Obvod dlaně přes klouby',
      note: 'Orientační tabulka pro rukavice 8–16 oz. Střih se liší podle modelu.',
      paragraphs: [
        'Hmotnost rukavic se měří v uncích (oz) a pomáhá vybrat správný pár. Vhodná velikost závisí na tělesné hmotnosti, druhu tréninku a zamýšleném použití.',
        'Těžší rukavice poskytují více tlumení a ochrany vám i tréninkovému partnerovi. Lehčí, například 10 oz, se často používají při soutěžích; těžší, 14–16 oz a více, se často volí pro sparing a trénink s partnerem.',
        'Pro různé druhy tréninku:',
        'Začátečníkům mohou vyhovovat těžší rukavice kvůli pohodlí a postupnému přizpůsobení. Každý model má jiný střih, rozložení pěny a oporu. Přečtěte si údaje o výrobku a vyzkoušejte rukavice s bandážemi, aby nikde netlačily.',
        'Pokud si nejste jistí, poraďte se s trenérem podle své hmotnosti, úrovně a tréninkových cílů.',
        'Připomínka: „oz“ udává hmotnost rukavice. Vybírejte podle intenzity a četnosti tréninku a požadované ochrany.',
      ],
      activities: [
        ['Soutěž', '8–10 oz; pravidla často závisí na kategorii.'],
        ['Pytel a lapy', '12–14 oz pro rovnováhu pohodlí a univerzálnosti.'],
        ['Sparing', 'Nejméně 14 oz; dospělým se často doporučuje 16 oz nebo více.'],
      ],
    },
    pl: {
      size: 'Rozmiar', selected: 'Wybrany rozmiar', view: 'Tabela rozmiarów', close: 'Zamknij tabelę rozmiarów',
      title: 'Jak dobrać rozmiar rękawic bokserskich', metric: 'Metryczne', imperial: 'Imperialne',
      glove: 'Rozmiar rękawic', weight: 'Masa ciała', knuckle: 'Obwód dłoni na wysokości kostek',
      note: 'Orientacyjna tabela dla rękawic 8–16 oz. Dopasowanie zależy od modelu.',
      paragraphs: [
        'Waga rękawic jest mierzona w uncjach (oz) i pomaga wybrać odpowiednią parę. Właściwy rozmiar zależy od masy ciała, rodzaju treningu i planowanego zastosowania.',
        'Cięższe rękawice zapewniają więcej amortyzacji i ochrony Tobie oraz partnerowi. Lżejsze, na przykład 10 oz, są często używane podczas zawodów; cięższe, 14–16 oz i więcej, często wybiera się do sparingów i treningu z partnerem.',
        'Do różnych rodzajów treningu:',
        'Początkującym mogą odpowiadać cięższe rękawice ze względu na wygodę i stopniowe przyzwyczajanie się. Każdy model ma inne dopasowanie, rozkład pianki i wsparcie. Sprawdź opis produktu i przymierz rękawice z owijkami, aby uniknąć ucisku.',
        'W razie wątpliwości zapytaj trenera o radę dopasowaną do Twojej masy ciała, poziomu i celów treningowych.',
        'Pamiętaj: „oz” oznacza wagę rękawicy. Wybieraj według intensywności i częstotliwości treningu oraz potrzebnej ochrony.',
      ],
      activities: [
        ['Zawody', '8–10 oz; zasady często zależą od kategorii.'],
        ['Worek i tarcze', '12–14 oz dla równowagi wygody i uniwersalności.'],
        ['Sparing', 'Co najmniej 14 oz; dorosłym często zaleca się 16 oz lub więcej.'],
      ],
    },
    de: {
      size: 'Größe', selected: 'Gewählte Größe', view: 'Größentabelle', close: 'Größentabelle schließen',
      title: 'Größenratgeber für Boxhandschuhe', metric: 'Metrisch', imperial: 'Imperial',
      glove: 'Handschuhgröße', weight: 'Körpergewicht', knuckle: 'Handumfang über den Knöcheln',
      note: 'Ungefähre Orientierung für Handschuhe mit 8–16 oz. Die Passform hängt vom Modell ab.',
      paragraphs: [
        'Das Gewicht von Boxhandschuhen wird in Unzen (oz) angegeben und hilft bei der Auswahl. Die passende Größe hängt vom Körpergewicht, der Trainingsart und dem Verwendungszweck ab.',
        'Schwerere Handschuhe bieten mehr Dämpfung und Schutz für Sie und Ihren Trainingspartner. Leichtere Handschuhe wie 10 oz werden häufig im Wettkampf eingesetzt; schwerere mit 14–16 oz oder mehr werden oft für Sparring und Partnertraining gewählt.',
        'Für verschiedene Trainingsarten:',
        'Anfänger bevorzugen möglicherweise schwerere Handschuhe für mehr Komfort und eine allmähliche Gewöhnung. Passform, Schaumstoffverteilung und Halt unterscheiden sich je nach Modell. Prüfen Sie die Produktdetails und probieren Sie die Handschuhe mit Bandagen an, um Druckstellen zu vermeiden.',
        'Fragen Sie im Zweifel Ihren Trainer nach einer Empfehlung passend zu Gewicht, Erfahrung und Trainingszielen.',
        'Hinweis: „oz“ bezeichnet das Gewicht des Handschuhs. Wählen Sie nach Trainingsintensität, Häufigkeit und gewünschtem Schutz.',
      ],
      activities: [
        ['Wettkampf', '8–10 oz; die Regeln hängen oft von der Kategorie ab.'],
        ['Sack und Pratzen', '12–14 oz als Ausgleich zwischen Komfort und Vielseitigkeit.'],
        ['Sparring', 'Mindestens 14 oz; für Erwachsene werden häufig 16 oz oder mehr empfohlen.'],
      ],
    },
    fr: {
      size: 'Taille', selected: 'Taille choisie', view: 'Guide des tailles', close: 'Fermer le guide des tailles',
      title: 'Guide des tailles des gants de boxe', metric: 'Métrique', imperial: 'Impérial',
      glove: 'Taille des gants', weight: 'Poids corporel', knuckle: 'Tour de main aux articulations',
      note: 'Repères indicatifs pour les gants de 8 à 16 oz. La coupe varie selon le modèle.',
      paragraphs: [
        'Le poids des gants, mesuré en onces (oz), aide à choisir la bonne paire. La taille adaptée dépend de votre poids, du type d’entraînement et de l’usage prévu.',
        'Les gants plus lourds offrent davantage d’amorti et de protection pour vous et votre partenaire. Les gants plus légers, comme ceux de 10 oz, sont souvent utilisés en compétition ; ceux de 14 à 16 oz ou plus sont fréquemment choisis pour le sparring et le travail avec un partenaire.',
        'Selon le type d’entraînement :',
        'Les débutants peuvent préférer des gants plus lourds pour le confort et une adaptation progressive. La coupe, la mousse et le maintien varient selon le modèle. Consultez la fiche du produit et essayez les gants avec des bandes pour éviter les points de pression.',
        'En cas de doute, demandez conseil à votre entraîneur en fonction de votre poids, de votre niveau et de vos objectifs.',
        'Rappel : « oz » indique le poids du gant. Choisissez selon l’intensité et la fréquence de vos séances ainsi que la protection souhaitée.',
      ],
      activities: [
        ['Compétition', '8–10 oz ; les règles dépendent souvent de la catégorie.'],
        ['Sac et pattes d’ours', '12–14 oz pour équilibrer confort et polyvalence.'],
        ['Sparring', 'Au moins 14 oz ; 16 oz ou plus sont souvent conseillés aux adultes.'],
      ],
    },
    es: {
      size: 'Talla', selected: 'Talla elegida', view: 'Guía de tallas', close: 'Cerrar guía de tallas',
      title: 'Guía de tallas de guantes de boxeo', metric: 'Métrico', imperial: 'Imperial',
      glove: 'Talla del guante', weight: 'Peso corporal', knuckle: 'Contorno de la mano en los nudillos',
      note: 'Tabla orientativa para guantes de 8 a 16 oz. El ajuste depende del modelo.',
      paragraphs: [
        'El peso de los guantes se mide en onzas (oz) y ayuda a elegir el par adecuado. La talla ideal depende de tu peso, el tipo de entrenamiento y el uso previsto.',
        'Los guantes más pesados ofrecen mayor amortiguación y protección para ti y tu compañero. Los más ligeros, como los de 10 oz, suelen utilizarse en competición; los de 14–16 oz o más se eligen a menudo para el sparring y el trabajo con compañero.',
        'Para distintos tipos de entrenamiento:',
        'Los principiantes pueden preferir guantes más pesados por comodidad y para adaptarse poco a poco. El ajuste, la distribución de la espuma y la sujeción cambian según el modelo. Consulta la ficha del producto y pruébate los guantes con vendas para evitar puntos de presión.',
        'Si tienes dudas, pide consejo a tu entrenador según tu peso, nivel y objetivos.',
        'Recuerda: «oz» indica el peso del guante. Elige según la intensidad y frecuencia del entrenamiento y la protección deseada.',
      ],
      activities: [
        ['Competición', '8–10 oz; las reglas suelen depender de la categoría.'],
        ['Saco y manoplas', '12–14 oz para equilibrar comodidad y versatilidad.'],
        ['Sparring', 'Al menos 14 oz; para adultos suelen recomendarse 16 oz o más.'],
      ],
    },
  };

  const metricRows = [
    [8, 36, 51, 14, 16.5], [10, 51, 60, 16.5, 19],
    [12, 60, 75, 19, 21.6], [14, 75, 86, 21.6, 24],
    [16, 86, 120, 21.6, 24],
  ];
  const selectedSizes = new Map();
  const mmaLabels = {"en":["MMA glove size chart","Glove size","Knuckle width","Measure across the knuckles, without the thumb."],"uk":["Таблиця розмірів рукавиць MMA","Розмір рукавиць","Ширина долоні на рівні кісточок","Виміряйте ширину долоні на рівні кісточок, без великого пальця."],"cs":["Tabulka velikostí MMA rukavic","Velikost rukavic","Šířka přes klouby","Změřte šířku ruky přes klouby bez palce."],"pl":["Tabela rozmiarów rękawic MMA","Rozmiar rękawic","Szerokość dłoni na wysokości kostek","Zmierz szerokość dłoni na wysokości kostek, bez kciuka."],"de":["Größentabelle für MMA-Handschuhe","Handschuhgröße","Handbreite an den Knöcheln","Miss die Handbreite an den Knöcheln ohne Daumen."],"fr":["Guide des tailles des gants MMA","Taille des gants","Largeur aux articulations","Mesurez la largeur de la main au niveau des articulations, sans le pouce."],"es":["Tabla de tallas de guantes MMA","Talla del guante","Anchura a la altura de los nudillos","Mide la anchura de la mano a la altura de los nudillos, sin el pulgar."]};
  let chartType = "boxing";
  let chart = null;
  let chartTrigger = null;
  let unit = 'metric';
  let activeLocale = 'en';

  const copy = () => translations[activeLocale] || translations.en;
  const version = (product) => product.slug || product.image || product.title;
  const formatInches = (value) => (value / 2.54).toFixed(1).replace(/\.0$/, '');

  function ensureChart() {
    if (chart) return chart;
    chart = document.createElement('div');
    chart.className = 'kayo-size-chart';
    chart.hidden = true;
    chart.innerHTML = `
      <button class="kayo-size-chart-backdrop" type="button" data-size-chart-close tabindex="-1"></button>
      <section class="kayo-size-chart-dialog" role="dialog" aria-modal="true" aria-labelledby="kayo-size-chart-title">
        <header><h2 id="kayo-size-chart-title"></h2><button class="kayo-size-chart-close" type="button" data-size-chart-close aria-label="Close">×</button></header>
        <div class="kayo-size-chart-content">
          <div class="kayo-size-chart-units" role="group"><button type="button" data-unit="metric"></button><button type="button" data-unit="imperial"></button></div>
          <div class="kayo-size-chart-table-wrap"><table><thead><tr><th scope="col"></th><th scope="col"></th><th scope="col"></th></tr></thead><tbody></tbody></table></div>
          <p class="kayo-size-chart-note"></p><div class="kayo-size-chart-guide"></div>
        </div>
      </section>`;
    chart.querySelectorAll('[data-size-chart-close]').forEach((button) => button.addEventListener('click', closeChart));
    chart.querySelectorAll('[data-unit]').forEach((button) => button.addEventListener('click', () => {
      unit = button.dataset.unit;
      renderChart();
    }));
    document.body.append(chart);
    return chart;
  }

  function renderChart() {
    const content = copy();
    if (chartType === 'mma') { renderMmaChart(content); return; }
    chart.querySelector('.kayo-size-chart-table-wrap table').innerHTML = '<thead><tr><th scope="col"></th><th scope="col"></th><th scope="col"></th></tr></thead><tbody></tbody>';
    chart.querySelector('h2').textContent = content.title;
    chart.querySelector('.kayo-size-chart-close').setAttribute('aria-label', content.close);
    chart.querySelector('.kayo-size-chart-backdrop').setAttribute('aria-label', content.close);
    const headers = chart.querySelectorAll('th');
    [content.glove, content.weight, content.knuckle].forEach((label, index) => { headers[index].textContent = label; });
    chart.querySelectorAll('[data-unit]').forEach((button) => {
      button.textContent = content[button.dataset.unit];
      button.setAttribute('aria-pressed', String(button.dataset.unit === unit));
    });
    const rows = metricRows.map(([oz, minWeight, maxWeight, minHand, maxHand]) => {
      const row = document.createElement('tr');
      const values = unit === 'metric'
        ? [`${oz} oz`, `${minWeight}–${maxWeight} kg`, `${minHand}–${maxHand} cm`]
        : [`${oz} oz`, `${Math.round(minWeight * 2.20462)}–${Math.round(maxWeight * 2.20462)} lb`, `${formatInches(minHand)}–${formatInches(maxHand)} in`];
      values.forEach((value, index) => {
        const cell = document.createElement(index === 0 ? 'th' : 'td');
        if (index === 0) cell.scope = 'row';
        cell.textContent = value;
        row.append(cell);
      });
      return row;
    });
    chart.querySelector('tbody').replaceChildren(...rows);
    chart.querySelector('.kayo-size-chart-note').textContent = content.note;
    const guide = chart.querySelector('.kayo-size-chart-guide');
    guide.replaceChildren();
    const heading = document.createElement('h3');
    heading.textContent = content.title;
    guide.append(heading);
    content.paragraphs.forEach((text, index) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      guide.append(paragraph);
      if (index === 2) {
        const list = document.createElement('ul');
        content.activities.forEach(([label, description]) => {
          const item = document.createElement('li');
          const strong = document.createElement('strong');
          strong.textContent = `${label}: `;
          item.append(strong, description);
          list.append(item);
        });
        guide.append(list);
      }
    });
  }

  function renderMmaChart(content) {
    const labels = mmaLabels[activeLocale] || mmaLabels.en;
    chart.querySelector('h2').textContent = labels[0];
    chart.querySelectorAll('[data-size-chart-close]').forEach(b => b.setAttribute('aria-label', content.close));
    chart.querySelectorAll('[data-unit]').forEach(b => { b.textContent = b.dataset.unit === 'metric' ? 'cm' : 'in'; b.setAttribute('aria-pressed', String(b.dataset.unit === unit)); });
    const table = chart.querySelector('table');
    table.innerHTML = '<thead><tr><th scope="col"></th><th scope="col"></th></tr></thead><tbody></tbody>';
    table.querySelectorAll('thead th').forEach((th, i) => { th.textContent = labels[i + 1]; });
    for (const [size, values] of [['S',[7.6,8.3]],['M',[8.9,9.5]],['L',[9.5,10.2]],['XL',[10.2]]]) {
      const row = document.createElement('tr');
      const heading = document.createElement('th'); heading.scope = 'row'; heading.textContent = size;
      const cell = document.createElement('td'); cell.textContent = values.map(v => unit === 'metric' ? v.toFixed(1) : (v / 2.54).toFixed(2)).join('–') + (unit === 'metric' ? ' cm' : ' in');
      row.append(heading, cell); table.querySelector('tbody').append(row);
    }
    chart.querySelector('.kayo-size-chart-note').textContent = '';
    chart.querySelector('.kayo-size-chart-guide').textContent = labels[3];
  }

  function openChart(trigger, locale, type = "boxing") {
    chartType = type;
    chartTrigger = trigger;
    activeLocale = locale;
    unit = 'metric';
    ensureChart();
    renderChart();
    chart.hidden = false;
    chart.querySelector('.kayo-size-chart-close').focus();
  }

  function closeChart() {
    if (!chart || chart.hidden) return;
    chart.hidden = true;
    chartTrigger?.focus();
    chartTrigger = null;
  }

  const stockCopy = {
    ru: ["В наличии", "Выберите размер, чтобы проверить наличие", "Нет в наличии"],
    en: ['Available', 'Choose a size to see availability', 'Out of stock'],
    uk: ['У наявності', 'Оберіть розмір, щоб перевірити наявність', 'Немає в наявності'],
    cs: ['Skladem', 'Pro ověření dostupnosti vyberte velikost', 'Není skladem'],
    pl: ['Dostępne', 'Wybierz rozmiar, aby sprawdzić dostępność', 'Brak w magazynie'],
    de: ['Verfügbar', 'Größe wählen, um die Verfügbarkeit zu sehen', 'Nicht auf Lager'],
    fr: ['Disponible', 'Choisissez une taille pour voir la disponibilité', 'Rupture de stock'],
    es: ['Disponible', 'Elige una talla para ver la disponibilidad', 'Agotado'],
  };
  function renderSelectedSku(modal, product) {
    const sizes = product.variants || [];
    const remembered = selectedSizes.get(version(product));
    const size = sizes.length ? (sizes.includes(remembered) ? remembered : null) : '';
    const sku = (product.skus || []).find(item => item.size === size);
    if (Number.isInteger(sku?.id)) modal.dataset.skuId = String(sku.id);
    else delete modal.dataset.skuId;
    if (size !== null) modal.dataset.selectedSize = size;
    else delete modal.dataset.selectedSize;
    const rows = modal.querySelector('.product-modal-specifications dl')?.children;
    if (rows?.[2]) rows[2].querySelector('dd').textContent = sku?.article || (!sizes.length ? product.specifications?.article : null) || '—';
    for (const key of ['netWeightGrams','grossWeightGrams','barcode']) {
      const row = modal.querySelector(`[data-spec-key="${key}"]`);
      if (!row) continue;
      const value = sku?.specifications?.[key];
      const text = key === 'barcode' ? (typeof value === 'string' ? value : '—') : (Number.isInteger(value) && value > 0 ? `${new Intl.NumberFormat(activeLocale).format(value)} g` : (!sizes.length && row.dataset.baseValue ? row.dataset.baseValue : '—'));
      row.querySelector('dd').textContent = text;
    }
    modal.dispatchEvent(new CustomEvent('kayo:variantchange', {bubbles:true, detail:{productSlug:product.slug || product.image, skuId:sku?.id ?? null, size, article:sku?.article ?? null, stockQuantity:sku?.stockQuantity ?? null}}));
  }

  function renderInventory(modal, product, locale) {
    modal.querySelector('.product-stock')?.remove();
    const inventory = (product.skus || []).length ? Object.fromEntries(product.skus.map(s => [s.size || '__default', s.stockQuantity])) : product.inventory || {};
    const selected = (product.variants || []).length ? selectedSizes.get(version(product)) : '__default';
    const known = Object.values(inventory).some(v => Number.isInteger(v) && v >= 0);
    if (!known) return;
    const quantity = inventory[selected];
    if (selected && (!Number.isInteger(quantity) || quantity < 0)) return;
    const labels = stockCopy[locale] || stockCopy.en;
    const paragraph = document.createElement('p');
    paragraph.className = 'product-stock';
    paragraph.setAttribute('aria-live', 'polite');
    paragraph.textContent = selected ? (quantity === 0 ? labels[2] : `${labels[0]}: ${quantity}`) : labels[1];
    const anchor = modal.querySelector('.product-modal-variants');
    if (anchor && !anchor.hidden) anchor.after(paragraph);
    else modal.querySelector('#product-modal-title').after(paragraph);
  }

  function renderVariants(modal, product, locale) {
    activeLocale = locale;
    let section = modal.querySelector('.product-modal-variants');
    if (!section) {
      section = document.createElement('section');
      section.className = 'product-modal-variants';
      section.innerHTML = '<p class="product-modal-variants-label"></p><div class="product-modal-variant-options" role="group"></div><button class="product-modal-size-chart-link" type="button"></button>';
      modal.querySelector('.product-modal-specifications').before(section);
    }
    const variants = product.variants || [];
    section.hidden = variants.length === 0;
    const favourite = modal.querySelector('.product-modal-favourite');
    if (favourite) section.after(favourite);
    renderSelectedSku(modal, product);
    renderInventory(modal, product, locale);
    if (!variants.length) return;
    const content = copy();
    const selected = selectedSizes.get(version(product));
    section.querySelector('.product-modal-variants-label').textContent = selected ? `${content.selected}: ${selected}` : content.size;
    const options = section.querySelector('.product-modal-variant-options');
    options.setAttribute('aria-label', content.size);
    options.replaceChildren(...variants.map((size) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = size;
      button.setAttribute('aria-pressed', String(size === selected));
      button.addEventListener('click', () => {
        selectedSizes.set(version(product), size);
        renderVariants(modal, product, locale);
        [...options.querySelectorAll('button')].find((candidate) => candidate.textContent === size)?.focus();
      });
      return button;
    }));
    const chartLink = section.querySelector('.product-modal-size-chart-link');
    chartLink.hidden = product.section !== 'gloves' || !['boxing', 'mma'].includes(product.subtype);
    chartLink.textContent = content.view;
    chartLink.onclick = () => openChart(chartLink, locale, product.subtype);
  }

  document.addEventListener('keydown', (event) => {
    if (!chart || chart.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeChart();
    }
    if (event.key === 'Tab') {
      const buttons = [...chart.querySelectorAll('.kayo-size-chart-dialog button')];
      const first = buttons[0];
      const last = buttons.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  }, true);

  window.KayoSizeChart = { renderVariants, closeChart };
})();
