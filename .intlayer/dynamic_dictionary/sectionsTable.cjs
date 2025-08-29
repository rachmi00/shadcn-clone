const content = {
  'en': () => Promise.resolve(require('./sectionsTable.en.json.cjs')),
  'fr': () => Promise.resolve(require('./sectionsTable.fr.json.cjs'))
};
module.exports = content;
