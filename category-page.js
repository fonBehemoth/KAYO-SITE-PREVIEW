(() => {
  const i18n = window.KayoI18n;
  const page = document.body.dataset.category;
  const cms = window.KayoCms || {};
  if (!i18n || !page) return;

  const labels = {"ru":{"categories":"Категории","characteristics":"Характеристики","storage":"Хранение и срок службы","care":"Уход","safety":"Предупреждение","catalog":"Перейти в раздел каталога"},"en":{"categories":"Categories","characteristics":"Characteristics","storage":"Storage and service life","care":"Care","safety":"Warning","catalog":"Go to this catalog section"},"uk":{"categories":"Категорії","characteristics":"Характеристики","storage":"Зберігання та термін служби","care":"Догляд","safety":"Попередження","catalog":"Перейти до розділу каталогу"},"cs":{"categories":"Kategorie","characteristics":"Vlastnosti","storage":"Skladování a životnost","care":"Údržba","safety":"Upozornění","catalog":"Přejít do této části katalogu"},"pl":{"categories":"Kategorie","characteristics":"Charakterystyka","storage":"Przechowywanie i trwałość","care":"Pielęgnacja","safety":"Ostrzeżenie","catalog":"Przejdź do tej części katalogu"},"de":{"categories":"Kategorien","characteristics":"Eigenschaften","storage":"Lagerung und Lebensdauer","care":"Pflege","safety":"Warnhinweis","catalog":"Zu diesem Katalogbereich"},"fr":{"categories":"Catégories","characteristics":"Caractéristiques","storage":"Stockage et durée de vie","care":"Entretien","safety":"Avertissement","catalog":"Voir cette rubrique du catalogue"},"es":{"categories":"Categorías","characteristics":"Características","storage":"Almacenamiento y vida útil","care":"Cuidados","safety":"Advertencia","catalog":"Ir a esta sección del catálogo"}};

  const gloveCopy = {"en":{"summary":"KAYO gloves have a specially shaped profile designed for effective and safe training, partner work and training sparring. Quality triple-density foam helps distribute and absorb impact. A wide hook-and-loop strap supports the wrist, while a breathable mesh palm insert improves ventilation and comfort.","characteristics":["Outer material: 100% artificial leather","Filling: 100% EVA foam","Three-layer foam padding","Reinforced seams","Wide hook-and-loop closure","Breathable mesh palm insert","Fixed thumb","Soft palm","For training and sparring","Sizes: 8, 10, 12, 14 and 16 oz"],"storage":"Store the protective equipment in a dry place away from constant sunlight and high temperatures. Replace it if it is damaged or its protective performance has noticeably decreased.","care":"Do not machine-wash the gloves. After each use, wipe them inside and outside and dry them at room temperature. The gloves must be completely dry before use. Clean, dry boxing wraps help prevent odour.","safety":"Boxing gloves cannot provide complete protection from injury."},"uk":{"summary":"Рукавиці KAYO мають спеціальну форму об’єму, яка дозволяє ефективно та безпечно тренуватися, працювати в парах і проводити тренувальні спаринги. Наповнення з якісного піноматеріалу потрійної щільності допомагає правильно розподіляти та поглинати удар. Широка застібка-липучка зміцнює зап’ястя, а дихаюча сітчаста вставка на долоні покращує вентиляцію та комфорт.","characteristics":["Зовнішній матеріал: штучна шкіра 100%","Наповнювач: 100% піна EVA","Спеціальне наповнення з трьох шарів піни","Посилені шви для більшої міцності","Застібка: широка липучка","Дихаюча сітчаста вставка на долоні","Фіксація великого пальця","М’яка долоня","Тип: для тренувань і спарингів","Розміри: 8, 10, 12, 14 і 16 унцій"],"storage":"Зберігайте захисне спорядження в сухому місці, подалі від постійного сонячного світла та високих температур. У разі пошкодження або помітного зниження захисних властивостей його необхідно замінити.","care":"Не періть рукавиці у пральній машині. Після кожного використання протирайте їх зовні та всередині й сушіть за кімнатної температури. Перед використанням рукавиці мають бути повністю сухими. Чисті сухі боксерські бинти допомагають запобігти появі запаху.","safety":"Боксерські рукавиці не можуть забезпечити повного захисту від травм."},"cs":{"summary":"Rukavice KAYO mají tvarovaný profil pro trénink, práci s partnerem a cvičný sparing. Pěna trojí hustoty pomáhá rozložit a pohltit úder. Široký suchý zip podporuje zápěstí a prodyšná síťovaná dlaň zlepšuje větrání a pohodlí.","characteristics":["Vnější materiál: 100% umělá kůže","Výplň: 100% pěna EVA","Třívrstvá pěnová výplň","Zesílené švy","Široké zapínání na suchý zip","Prodyšná síťovaná vložka v dlani","Fixovaný palec","Měkká dlaň","Pro trénink a sparing","Velikosti: 8, 10, 12, 14 a 16 oz"],"storage":"Ochranné vybavení skladujte v suchu mimo stálé sluneční záření a vysoké teploty. Při poškození nebo znatelném snížení ochrany je vyměňte.","care":"Rukavice neperte v pračce. Po použití je otřete uvnitř i zvenku a sušte při pokojové teplotě. Používejte je až zcela suché. Čisté suché bandáže pomáhají předcházet zápachu.","safety":"Boxerské rukavice nemohou zajistit úplnou ochranu před zraněním."},"pl":{"summary":"Rękawice KAYO mają profil do treningu, pracy z partnerem i sparingów treningowych. Pianka o potrójnej gęstości pomaga rozkładać i pochłaniać uderzenia. Szeroki rzep wspiera nadgarstek, a siatka na dłoni poprawia wentylację i komfort.","characteristics":["Materiał zewnętrzny: 100% skóra syntetyczna","Wypełnienie: 100% pianka EVA","Trzywarstwowe wypełnienie piankowe","Wzmocnione szwy","Szerokie zapięcie na rzep","Oddychająca siatka na dłoni","Przymocowany kciuk","Miękka dłoń","Do treningu i sparingów","Rozmiary: 8, 10, 12, 14 i 16 oz"],"storage":"Przechowuj sprzęt ochronny w suchym miejscu, z dala od stałego słońca i wysokich temperatur. Wymień go po uszkodzeniu lub zauważalnym spadku właściwości ochronnych.","care":"Nie pierz rękawic w pralce. Po każdym użyciu wytrzyj je wewnątrz i z zewnątrz, susz w temperaturze pokojowej. Używaj dopiero po całkowitym wyschnięciu. Czyste, suche bandaże zapobiegają zapachowi.","safety":"Rękawice bokserskie nie zapewniają całkowitej ochrony przed urazami."},"de":{"summary":"KAYO-Handschuhe haben ein geformtes Profil für Training, Partnerübungen und Trainingssparring. Schaum mit drei Dichten verteilt und dämpft Schläge. Ein breiter Klettverschluss stützt das Handgelenk, ein Netzeinsatz an der Handfläche verbessert Belüftung und Komfort.","characteristics":["Außenmaterial: 100 % Kunstleder","Polsterung: 100 % EVA-Schaum","Dreilagige Schaumstoffpolsterung","Verstärkte Nähte","Breiter Klettverschluss","Atmungsaktiver Netzeinsatz an der Handfläche","Fixierter Daumen","Weiche Handfläche","Für Training und Sparring","Größen: 8, 10, 12, 14 und 16 oz"],"storage":"Schutzausrüstung trocken und vor dauernder Sonneneinstrahlung und hohen Temperaturen geschützt lagern. Bei Schäden oder merklich verminderter Schutzwirkung ersetzen.","care":"Handschuhe nicht in der Maschine waschen. Nach jedem Gebrauch innen und außen abwischen und bei Raumtemperatur trocknen. Erst vollständig trocken verwenden. Saubere, trockene Bandagen helfen gegen Geruch.","safety":"Boxhandschuhe bieten keinen vollständigen Schutz vor Verletzungen."},"fr":{"summary":"Les gants KAYO ont un profil conçu pour l’entraînement, le travail avec partenaire et le sparring d’entraînement. La mousse à triple densité répartit et absorbe les impacts. Une large fermeture soutient le poignet ; la paume en maille améliore l’aération et le confort.","characteristics":["Extérieur : 100 % cuir synthétique","Rembourrage : 100 % mousse EVA","Rembourrage en mousse à trois couches","Coutures renforcées","Large fermeture autoagrippante","Insert en maille respirante sur la paume","Pouce attaché","Paume souple","Pour l’entraînement et le sparring","Tailles : 8, 10, 12, 14 et 16 oz"],"storage":"Conservez les protections au sec, à l’abri du soleil permanent et des températures élevées. Remplacez-les si elles sont abîmées ou si leur protection diminue sensiblement.","care":"Ne lavez pas les gants en machine. Après chaque utilisation, essuyez l’intérieur et l’extérieur et laissez sécher à température ambiante. Utilisez-les uniquement secs. Des bandes propres et sèches aident à prévenir les odeurs.","safety":"Les gants de boxe ne protègent pas complètement contre les blessures."},"es":{"summary":"Los guantes KAYO tienen un perfil diseñado para entrenamiento, trabajo con compañero y sparring de práctica. La espuma de triple densidad ayuda a distribuir y absorber impactos. El cierre ancho sostiene la muñeca y la malla transpirable mejora la ventilación y comodidad de la palma.","characteristics":["Material exterior: 100 % piel sintética","Relleno: 100 % espuma EVA","Relleno de espuma de tres capas","Costuras reforzadas","Cierre ancho de velcro","Inserto de malla transpirable en la palma","Pulgar fijo","Palma suave","Para entrenamiento y sparring","Tallas: 8, 10, 12, 14 y 16 oz"],"storage":"Guarda las protecciones en un lugar seco, lejos del sol continuo y las altas temperaturas. Sustitúyelas si están dañadas o si su protección disminuye de forma apreciable.","care":"No laves los guantes a máquina. Tras cada uso, limpia el interior y el exterior y seca a temperatura ambiente. Úsalos solo cuando estén completamente secos. Las vendas limpias y secas ayudan a evitar olores.","safety":"Los guantes de boxeo no ofrecen protección completa contra las lesiones."},"ru":{"summary":"Перчатки KAYO имеют специальную форму для тренировок, работы с партнёром и учебных спаррингов. Пена тройной плотности помогает распределять и поглощать удары. Широкая застёжка-липучка поддерживает запястье, а сетчатая вставка на ладони улучшает вентиляцию и комфорт.","characteristics":["Внешний материал: 100% искусственная кожа","Наполнитель: 100% пена EVA","Трёхслойный пенный наполнитель","Усиленные швы","Широкая застёжка-липучка","Дышащая сетчатая вставка на ладони","Фиксированный большой палец","Мягкая ладонь","Для тренировок и спаррингов","Размеры: 8, 10, 12, 14 и 16 oz"],"storage":"Храните защитную экипировку в сухом месте вдали от постоянного солнечного света и высоких температур. Замените её при повреждении или заметном снижении защитных свойств.","care":"Не стирайте перчатки в машине. После каждого использования протирайте их внутри и снаружи и сушите при комнатной температуре. Перед использованием они должны полностью высохнуть. Чистые сухие боксёрские бинты помогают предотвратить неприятный запах.","safety":"Боксёрские перчатки не обеспечивают полной защиты от травм."}};

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
