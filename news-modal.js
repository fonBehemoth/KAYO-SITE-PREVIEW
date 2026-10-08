(() => {
  let opener = null;

  function closeModal(dialog) {
    dialog.close();
  }

  function openModal(button) {
    const card = button.closest('.news-card');
    if (!card || document.querySelector('.news-dialog')) return;
    const locale = document.documentElement.lang || 'en';
    const copy = window.KayoCms?.copy?.[locale]?.newsArticleBody
      || window.KayoNewPageCopy?.[locale]?.newsArticleBody
      || window.KayoNewPageCopy?.en?.newsArticleBody || '';
    const closeLabel = { en: 'Close', uk: 'Закрити', cs: 'Zavřít', pl: 'Zamknij', de: 'Schließen', fr: 'Fermer', es: 'Cerrar' }[locale] || 'Close';
    const dialog = document.createElement('dialog');
    dialog.className = 'news-dialog';
    dialog.setAttribute('aria-labelledby', 'news-dialog-title');

    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'news-dialog-close';
    close.setAttribute('aria-label', closeLabel);
    close.textContent = '×';

    const image = document.createElement('img');
    image.src = card.querySelector('img')?.src || '';
    image.alt = '';

    const content = document.createElement('div');
    content.className = 'news-dialog-content';
    const tag = document.createElement('span');
    tag.className = 'eyebrow';
    tag.textContent = card.querySelector('article > div > span, .news-card > div > span')?.textContent || '';
    const title = document.createElement('h2');
    title.id = 'news-dialog-title';
    title.textContent = card.querySelector('h2')?.textContent || '';
    const intro = document.createElement('p');
    intro.textContent = card.querySelector('p')?.textContent || '';
    const body = document.createElement('p');
    body.textContent = copy;
    content.append(tag, title, intro, body);
    dialog.append(close, image, content);
    document.body.append(dialog);
    opener = button;
    dialog.addEventListener('close', () => {
      dialog.remove();
      document.body.classList.remove('news-dialog-open');
      opener?.focus();
      opener = null;
    }, { once: true });
    close.addEventListener('click', () => closeModal(dialog));
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closeModal(dialog);
    });
    document.body.classList.add('news-dialog-open');
    dialog.showModal();
    close.focus();
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.news-read');
    if (button) openModal(button);
  });
})();
