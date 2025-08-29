const content = {
  'en': () => import('./header.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'fr': () => import('./header.fr.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
