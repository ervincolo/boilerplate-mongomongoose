require('dotenv').config();
const mongoose = require('mongoose');
const uri = 'mongodb+srv://coloervin2408:ervincolo24@ervinovcluster.1hemyjo.mongodb.net/mongo-baza?retryWrites=true&w=majority&appName=ErvinovCluster';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  favoriteFoods: {
    type: [String]
  },
  age: Number
});

let Person;
Person = mongoose.model('Person', personSchema); 

const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: 'Ervin',
    age: 29,
    favoriteFoods: ['Cevapi','Burek']
  });
  newPerson.save((err,data) => {
    if (err) {
      return console.log(err);
    }
    done(null,data);
  });
};

let arrayOfPeople = [{name: 'Lamija', age: 28, favoriteFoods: ['Sirnica','Zeljanica']},
{name: 'Ervin', age: 29, favoriteFoods: ['Cevapi','Burek']}
];

const createManyPeople = (arrayOfPeople,done) => {
  Person.create(arrayOfPeople,function(err,people) {
    if(err) {
      return console.log(err)
    }
    done(null,people)
  });
};


const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err,data) => {
    if(err) {
      return done(err);
    }
    done(null,data);
  });
};




const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
