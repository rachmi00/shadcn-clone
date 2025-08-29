const content = {
  'en': () => import('./sectionsTable.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'fr': () => import('./sectionsTable.fr.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
