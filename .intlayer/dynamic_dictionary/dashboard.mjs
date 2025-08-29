const content = {
  'en': () => import('./dashboard.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'fr': () => import('./dashboard.fr.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
