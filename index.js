const database = require('./lib/database');

database.connect('./db');

const peopleModel = require('./models/models');

const person1 = {
  firstName: 'Albert',
  lastName: 'Leonard',
  alive: true,
  age: 67
};

peopleModel.create(person1)
  .then(res => {
    peopleModel.findById(res.id)
      .then(res => console.log(res));
  });
// peopleModel.create(person2);

peopleModel.find()
  .then(res => console.log(res));