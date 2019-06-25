const Unit = require('./Unit');

function doctor() {
    Unit.apply(this, arguments);
    this._healPower = 10;
}

doctor.prototype = Object.create(Unit.prototype);

doctor.prototype.heal = function(char) {
    if (char.isAlive()) {
        let healPoints = this._healPower + (this._healPower * (this._level * 0.1));
        char.addHealth(healPoints);
        this.earnExperience(250);
        console.log(this.getName() + ' healed character ' + char.getName() + ' for ' + healPoints + ' hp');
    }
}

module.exports = doctor;