function Unicorn(name, color='white') {
  this.name = name;
  this.color = color;
  this.isWhite = function() {
    return isWhite = false;
  }
  this.says = function(stuff) {
    return ('**;* ' + stuff + ' *;**');
  }
}

module.exports = Unicorn;
