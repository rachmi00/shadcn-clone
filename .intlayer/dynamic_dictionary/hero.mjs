const content = {
  'en': () => import('./hero.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'fr': () => import('./hero.fr.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
