function TrickOrTreater(costume) {
  this.dressedUpAs = costume.style;
  this.bag = [];
  this.hasCandy = false;
  this.countCandies = 0;
}

TrickOrTreater.prototype.putCandyInBag = function(candy) {
  this.bag.push(candy);
  this.countCandies = this.bag.length;
  this.hasCandy = true;
}

TrickOrTreater.prototype.eat = function() {
  this.bag.pop();
  this.countCandies = this.bag.length;
}

module.exports = TrickOrTreater;
