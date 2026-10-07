(() => {
  const labels = {
    en: ['All products', 'Gloves', 'Protection', 'Training equipment', 'Sports bags / apparel', 'Accessories'],
    uk: ['Всі товари', 'Рукавиці', 'Захист', 'Снарядне обладнання', 'Спортивні сумки / одяг', 'Аксесуари'],
    cs: ['Všechny produkty', 'Rukavice', 'Ochrana', 'Tréninkové vybavení', 'Sportovní tašky / oblečení', 'Doplňky'],
    pl: ['Wszystkie produkty', 'Rękawice', 'Ochraniacze', 'Sprzęt treningowy', 'Torby sportowe / odzież', 'Akcesoria'],
    de: ['Alle Produkte', 'Handschuhe', 'Schutz', 'Trainingsausrüstung', 'Sporttaschen / Bekleidung', 'Zubehör'],
    fr: ['Tous les produits', 'Gants', 'Protection', 'Matériel d’entraînement', 'Sacs de sport / vêtements', 'Accessoires'],
    es: ['Todos los productos', 'Guantes', 'Protección', 'Equipo de entrenamiento', 'Bolsas deportivas / ropa', 'Accesorios'],
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

  const locale = () => {
    const selected = document.querySelector('#language')?.value?.toLowerCase();
    const htmlLocale = document.documentElement.lang?.toLowerCase();
    return labels[selected] ? selected : labels[htmlLocale] ? htmlLocale : 'en';
  };

  function closeMenus(except) {
    document.querySelectorAll('.catalog-nav.is-open').forEach((menu) => {
      if (menu !== except) {
        menu.classList.remove('is-open');
        menu.querySelector('.catalog-toggle')?.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function enhanceNavigation() {
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
      original.addEventListener('click', (event) => {
        if (window.matchMedia('(max-width: 1000px)').matches && !wrapper.classList.contains('is-open')) {
          event.preventDefault();
          toggleDropdown();
        }
      });
    });

    updateLabels();
  }

  function updateLabels() {
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
      : filename === 'news.html' ? 'news'
      : filename === 'about.html' ? 'company'
      : filename === 'contact.html' ? 'contacts'
      : filename === 'index.html' && hash === '#sales' ? 'offers'
      : filename === 'index.html' && hash === '#contacts' ? 'where'
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

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.catalog-nav')) closeMenus();
    if (event.target.closest('.privacy-trigger')) openPrivacy(event.target.closest('.privacy-trigger'));
    if (event.target.closest('.privacy-close, .privacy-backdrop')) closePrivacy();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenus();
    if (event.key === 'Escape' && document.querySelector('.privacy-modal')) closePrivacy();
    if (event.key === 'Tab' && document.querySelector('.privacy-modal')) {
      event.preventDefault();
      document.querySelector('.privacy-close').focus();
    }
  });
  document.addEventListener('change', (event) => {
    if (event.target.matches('#language')) setTimeout(updateLabels, 0);
  });
  document.addEventListener('kayo:localechange', updateLabels);
  window.addEventListener('hashchange', updateActiveNavigation);

  new MutationObserver(enhanceNavigation).observe(document.body, { childList: true, subtree: true });
  enhanceNavigation();
})();
