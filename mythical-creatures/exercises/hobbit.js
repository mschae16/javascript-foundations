function Hobbit(name) {
  this.name = name;
  this.disposition = 'homebody';
  this.age = 0;
  var ageCount = 0;
  this.celebrateBirthday = function() {
    ageCount++;
    if(ageCount === 3) {
        this.age = ageCount;
      }
  }
}


module.exports = Hobbit;
