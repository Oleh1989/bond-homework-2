function RandomShot() {

}

RandomShot.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = RandomShot;