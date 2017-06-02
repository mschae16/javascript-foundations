function Pirate(name, job = 'Scallywag') {
  this.name = name;
  this.job = job;
  this.cursed = false;
  this.booty = 0;
}

var counter = 0;
Pirate.prototype.commitHeinousAct = function() {
  counter++;
  if(counter >= 3) {
    this.cursed = true;
  }
}

Pirate.prototype.robShip = function() {
  this.booty = 100;
  return 'YAARRR!';
}

module.exports = Pirate;
