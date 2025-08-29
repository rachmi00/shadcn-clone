const content = {
  'en': () => Promise.resolve(require('./sidebar.en.json.cjs')),
  'fr': () => Promise.resolve(require('./sidebar.fr.json.cjs'))
};
module.exports = content;
