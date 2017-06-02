function Centaur(name, breed) {
  this.shot = 0;
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.rested = false;
  this.standing = true;
  this.layingDown = false;
}

Centaur.prototype.sleep = function() {
  if(this.layingDown) {
    this.cranky = false;
    return 'ZZZZ';

  } else {
    return 'NO!';
  }
}

Centaur.prototype.run = function() {
  this.shot++;
  if(this.shot >= 3) {
    this.cranky = true;
  } else if(this.layingDown) {
    return 'NO!';
  } else {
    return 'Clop clop clop clop!!!';
  }
}

Centaur.prototype.shoot = function() {
  this.shot++;
  if(this.shot >= 3) {
    this.cranky = true;
    return 'NO!';
  } else if(this.layingDown) {
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
  // this.rested = true;
  if(this.layingDown) {
    return 'Not while I\'m standing!';
  } else if(this.rested) {
    this.cranky = true;
  }
}

module.exports = Centaur;
