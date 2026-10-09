(() => {
  const labels = {
    en: 'Play video', uk: 'Відтворити відео', cs: 'Přehrát video',
    pl: 'Odtwórz wideo', de: 'Video abspielen', fr: 'Lire la vidéo',
    es: 'Reproducir vídeo',
  };
  const validId = (value) => typeof value === 'string' && /^[A-Za-z0-9_-]{11}$/.test(value);
  const locale = () => document.querySelector('#language')?.value?.toLowerCase()
    || document.documentElement.lang?.toLowerCase() || 'en';
  const label = () => labels[locale()] || labels.en;
  const videoId = (player) => {
    const slot = player.dataset.videoSlot;
    const videos = window.KayoCms?.videos;
    const value = videos && Object.prototype.hasOwnProperty.call(videos, slot)
      ? videos[slot] : player.dataset.videoId;
    return validId(value) ? value : null;
  };

  function syncButtons() {
    document.querySelectorAll('.video-player [data-video-play]').forEach((button) => {
      button.setAttribute('aria-label', label());
      button.hidden = !videoId(button.closest('.video-player'));
    });
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-video-play]');
    if (!button) return;
    const player = button.closest('.video-player');
    const id = player && videoId(player);
    if (!id) return;

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`;
    iframe.title = `${label()} — KAYO`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    player.replaceChildren(iframe);
    player.classList.add('video-player--active');
    iframe.focus();
  });

  document.addEventListener('change', (event) => {
    if (event.target.matches('#language')) syncButtons();
  });
  document.addEventListener('kayo:localechange', syncButtons);
  new MutationObserver(syncButtons).observe(document.body, { childList: true, subtree: true });
  syncButtons();
})();
