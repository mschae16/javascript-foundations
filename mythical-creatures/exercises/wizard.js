function Wizard(object) {
  this.counter = 0
  this.name = object.name;
  this.bearded = true;
  this.isRested = true;
  if (object.bearded === false) {
    this.bearded = false;
  }
}

Wizard.prototype.incantation = function(word) {
  return word.toUpperCase();
}

Wizard.prototype.cast = function(spell) {
  this.counter++
  if(this.counter >= 3){
    this.isRested = false;
    return 'I SHALL NOT CAST!';
  }
  return 'MAGIC BULLET';
}

module.exports = Wizard;
