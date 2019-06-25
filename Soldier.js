const Unit = require('./Unit');

function soldier() {
    Unit.apply(this, arguments);
    this._attack = 15;
}

soldier.prototype = Object.create(Unit.prototype);

soldier.prototype.handAttack = function(char) {
    if (this.isAlive() && char.isAlive()) {
        let damage = this._attack + (this._attack * (this._level * 0.1));
        char.takeDamage(damage);
        this.earnExperience(250);
        console.log(this.getName() + ' hits ' + char.getName() + ' ' + damage + ' hp');
    }
}

module.exports = soldier;