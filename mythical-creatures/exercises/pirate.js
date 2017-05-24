function Pirate(name, job = 'Scallywag') {
  this.name = name;
  this.job = job;
  this.cursed = false;
  this.booty = 0;
  this.robShip = function() {
    this.booty = 100;
    return 'YAARRR!';
  }
}
var actCount = 0;
Pirate.prototype.commitHeinousAct = function() {
  actCount++;
  if(actCount > 3) {
    this.cursed = true;
  } else {
    this.cursed = false;
  }
}

module.exports = Pirate;
