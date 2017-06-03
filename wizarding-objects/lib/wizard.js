function Wizard(name) {
  this.name = name;
  this.pets = [];
  this.petsCount = 0;
}

Wizard.prototype.givePet = function (pet) {
  this.pets.push(pet);
  this.petsCount = this.pets.length;
}

Wizard.prototype.petList = function () {
  var animals = '';
  var vowels = ['a', 'e', 'i', 'o', 'u']
  this.pets.forEach(function(pet, index, array) {
    animals += pet.name + ', '
    if(vowels.includes(pet.type[0].toLowerCase())) {
      animals += 'an ' + pet.type
    } else {
      animals += 'a ' + pet.type
    }
    if(index === array.length - 1) {
      animals += '.';
    } else {
      animals += ', ';
    }
  })
  return animals;
}

Wizard.prototype.giveWand = function (wand) {
  this.wand = wand;
};

Wizard.prototype.castSpell = function (spell) {
  return `Casting ${spell}!`;
};

module.exports = Wizard;
