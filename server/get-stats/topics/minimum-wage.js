const { wrapper } = require('./utils');

const name = 'minimumWage';

const search = '\\"minimum wage\\"';

const body = wrapper(builder => (
  builder
    .orFilter('match_phrase', 'text', 'minimum wage')
));

module.exports = { body, name, search };
