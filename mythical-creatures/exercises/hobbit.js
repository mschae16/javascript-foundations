function Hobbit(name) {
  this.name = name;
  this.disposition = 'homebody';
  this.age = 0;
  this.old = false;
  this.isShort = true;
  if(this.name === 'Frodo') {
    this.hasRing = true;
  } else {
    this.hasRing = false
  };
}

Hobbit.prototype.celebrateBirthday = function() {
  this.age++;
  if(this.age >= 101) {
    this.old = true;
  } else if(this.age <= 32) {
    this.age;
    this.adult = false;
  } else if(this.age > 32) {
    this.age;
    this.adult = true;
  }
}

module.exports = Hobbit;
