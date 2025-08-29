const content = {
  'en': () => Promise.resolve(require('./header.en.json.cjs')),
  'fr': () => Promise.resolve(require('./header.fr.json.cjs'))
};
module.exports = content;
