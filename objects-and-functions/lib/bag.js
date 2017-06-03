function Bag(candy) {
  this.empty = true;
  this.count = 0;
  this.candies = [];
};

Bag.prototype.push = function(candy) {
  this.candies.push(candy);
  this.count = this.candies.length;
}

Bag.prototype.contains = function(candy) {
  for(i = 0; i < this.candies.length; i++) {
    return this.candies[i].type === candy;
  }
}

module.exports = Bag;
