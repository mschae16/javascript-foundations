function Werewolf(name, location) {
  this.name = name;
  this.location = location;
  this.human = true;
  this.wolf = false;
  this.hungry = false;
}

Werewolf.prototype.change = function() {
  if(this.human) {
    this.wolf = true;
    this.human = false;
    this.hungry = true;
  } else {
    this.wolf = false;
    this.human = true;
    this.hungry = false;
  }
}

Werewolf.prototype.eat = function(victim) {
  if(this.hungry) {
    victim.alive = false;
    this.wolf = false;
    this.human = true;
  } else if(this.human) {
    victim.alive = true;
  }
}

function Victim(name) {
  this.name = name;
  this.alive = true;
}

module.exports = {Werewolf, Victim};
