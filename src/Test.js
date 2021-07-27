var animals_nature = require('./data')

animals = {}

for (var key in animals_nature) {
    animals[key] = animals_nature[key].toLowerCase();
}

console.log(animals)