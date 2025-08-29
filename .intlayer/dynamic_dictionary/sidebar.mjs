const content = {
  'en': () => import('./sidebar.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'fr': () => import('./sidebar.fr.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
