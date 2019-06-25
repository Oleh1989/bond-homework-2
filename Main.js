const Soldier = require('./Soldier');
const Heavy = require('./Heavy');
const Doctor = require('./Doctor');

var doc = new Doctor('Morfius');
var sold = new Soldier('Neo');
var heavy = new Heavy('Mr.Smith');

while (sold.isAlive() && heavy.isAlive()) {
    sold.handAttack(heavy);
    heavy.log();
    heavy.machineGunAttack(sold, Heavy.getRandomInt(0, 5));
    sold.log();
    doc.heal(sold);
}

if (!sold.isAlive()) {
    console.log(heavy.getName() + ' wins this battle');
} else {
    console.log(sold.getName() + ' wins this battle');
}