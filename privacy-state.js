(() => {
  const key = 'kayo-consent-v1', version = 1, lifetime = 180 * 86400000;
  const defaults = () => ({version, preferences:false, externalMedia:false, statistics:false, marketing:false, updatedAt:0});
  let state = defaults(), expired = false;
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved?.version === version && Number.isFinite(saved.updatedAt) && saved.updatedAt <= Date.now() && Date.now()-saved.updatedAt < lifetime) {
      state = {...defaults(), preferences:saved.preferences === true, externalMedia:saved.externalMedia === true, updatedAt:saved.updatedAt};
    } else if (saved?.version === version && Number.isFinite(saved.updatedAt)) expired = true;
  } catch {}
  const clearPreferences = () => {try {for (const name of ['kayo-language','kayo-favourites','kayo-recent']) localStorage.removeItem(name);} catch {}};
  if (expired) clearPreferences();
  window.KayoPrivacy = {
    get state(){return {...state};},
    get(name){if (!state.preferences) return null;try{return localStorage.getItem(name)}catch{return null}},
    set(name,value){if (state.preferences)try{localStorage.setItem(name,value)}catch{}},
    save(value){
      state = {...defaults(), preferences:value.preferences === true, externalMedia:value.externalMedia === true, updatedAt:Date.now()};
      let persisted = true;
      try{localStorage.setItem(key,JSON.stringify(state))}catch{persisted=false}
      if(!state.preferences)clearPreferences();
      document.dispatchEvent(new CustomEvent('kayo:consentchange',{detail:{...state}}));
      return persisted;
    },
  };
})();
