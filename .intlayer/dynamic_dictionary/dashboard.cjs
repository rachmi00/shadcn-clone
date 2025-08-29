const content = {
  'en': () => Promise.resolve(require('./dashboard.en.json.cjs')),
  'fr': () => Promise.resolve(require('./dashboard.fr.json.cjs'))
};
module.exports = content;
