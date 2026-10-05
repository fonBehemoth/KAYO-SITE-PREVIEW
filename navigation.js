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
  }

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.catalog-nav')) closeMenus();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenus();
  });
  document.addEventListener('change', (event) => {
    if (event.target.matches('#language')) setTimeout(updateLabels, 0);
  });
  document.addEventListener('kayo:localechange', updateLabels);

  new MutationObserver(enhanceNavigation).observe(document.body, { childList: true, subtree: true });
  enhanceNavigation();
})();
