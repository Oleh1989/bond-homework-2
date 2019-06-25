function Unit(name) {
    const MAXHEALTH = 100;
    this._health = MAXHEALTH;
    this._name = name;
    this._level = 1;
    this._xp = 0;
}

Unit.prototype.getName = function() {
    return this._name;
}

Unit.prototype.getLevel = function() {
    return this._level;
}

Unit.prototype.isAlive = function() {
    if (this._health > 0) {
        return true;
    }
}

Unit.prototype.addHealth = function(healthAmount) {
    this._health += healthAmount;
}

Unit.prototype.takeDamage = function(healthAmount) {
    this._health -= healthAmount;
    if (this.isAlive()) {
        this.earnExperience(100);
    }
}

Unit.prototype.earnExperience = function(amount) {
    if (this._level > 1) {
        amount = amount - ((this._xp / this._level) * 0.1);
    } else {
        this._xp += amount;
    }

    if (this._xp >= 1000) {
        this.levelUp();
    }
}

Unit.prototype.levelUp = function() {
    this._xp -= 1000;
    this._level += 1;
    console.log('Character takes ' + this._level + ' level');
}

Unit.prototype.log = function() {
    console.log('Character: ' + this.getName() + '\nLevel: ' + this.getLevel() + '\nHealth remains: ' + this._health);
}

module.exports = Unit;