function Medusa(name) {
  this.name = name;
  this.statues = [];

}

function Person(name) {
  this.name = name;
  this.stoned = false;
}

Medusa.prototype.stare = function(victim) {
  victim.stoned = true;
  if(this.statues.length < 3) {
    this.statues.push(victim);
    this.stoned = true;
  } else if(this.statues.length = 3 ) {
    this.stoned = true;
    this.statues[0].stoned = false;
  }
}

module.exports = {Medusa, Person};
