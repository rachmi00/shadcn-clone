const content = {
  'en': () => Promise.resolve(require('./hero.en.json.cjs')),
  'fr': () => Promise.resolve(require('./hero.fr.json.cjs'))
};
module.exports = content;
