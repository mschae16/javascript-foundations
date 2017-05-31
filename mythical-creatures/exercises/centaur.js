function Centaur(name, breed) {
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
}

Centaur.prototype.sleep = function() {
  if(this.layingDown) {
    return 'ZZZZ';

  } else {
    return 'NO!';
  }
}

Centaur.prototype.run = function() {
  if(this.layingDown) {
    return 'NO!';
  } else {
    return 'Clop clop clop clop!!!';
  }
}

Centaur.prototype.shoot = function() {
  if(this.layingDown) {
    return 'NO!';
  } else {
    return 'Twang!!!';
  }
}

Centaur.prototype.layDown = function() {
  this.standing = false;
  this.layingDown = true;
}

Centaur.prototype.standUp = function() {
  this.standing = true;
  this.layingDown = false;
}

Centaur.prototype.drinkPotion = function() {
  this.cranky = false;
  if(this.layingDown) {
    return 'Not while I\'m standing!';
  }
}

module.exports = Centaur;
