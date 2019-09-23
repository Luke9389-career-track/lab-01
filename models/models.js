const Model = require('../lib/model');

const config = {
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  alive: { type: 'boolean' },
  age: { type: 'number' },
};

const peopleModel = new Model('people', config);

module.exports = peopleModel;
