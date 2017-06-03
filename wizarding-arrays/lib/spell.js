function Spell(name, description) {
  this.name = name;
  this.description = description;
  this.executionHistory = [];
}

Spell.prototype.execute = function(target) {
  var result = '';
  if(Array.isArray(target)) {
    target.forEach(function(targ, index) {
      if(index === target.length - 1) {
        result += 'Success! The ' + targ + ' is levitating.';
      } else {
        result += 'Success! The ' + targ + ' is levitating. ';
      }
    });
    return result;
  } else {
    return 'Success! The ' + target + ' is levitating.';
  }
}

Spell.prototype.clearExecutionHistory = function() {
  this.executionHistory = [];
}



module.exports = Spell;
