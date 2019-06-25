const Soldier = require('./Soldier');

function heavy() {
    Soldier.apply(this, arguments);
    this.damageResist = 0.2;
}

heavy.prototype = Object.create(Soldier.prototype);

heavy.prototype.machineGunAttack = function(char, amountOfShots) {
    if (this.isAlive() && char.isAlive()) {
        let damage = this.attakPower + (this.attakPower + (this._level * 0.1));
        let fullDamage = damage * amountOfShots;
        char.takeDamage(fullDamage);
        this.earnExperience(250);
        console.log(this.getName() + ' hits ' + char.getName() + ' ' + fullDamage + ' hp');
    }
}

heavy.prototype.takeDamage = function(amount) {
    this._health -= amount - this.damageResist;
    this.earnExperience(250);
}

module.exports = heavy;