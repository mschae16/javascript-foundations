function Pirate(name, job = 'Scallywag') {
  this.name = name;
  this.job = job;
  this.cursed = false;
  this.actCount = 0;
  this.booty = 0;
  this.robShip = function() {
    this.booty = 100;
    return 'YAARRR!';
  }
}

Pirate.prototype.commitHeinousAct = function() {
  this.actCount++;
  if(this.actCount >= 3) {
    this.cursed = true;
  }
}

module.exports = Pirate;
