const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else {
            return this.power;
        }
    }
}
console.log(hero.getStrength());

function whoIsStronger(getStrength) {
    const myStrength = 82;

    if (getStrength() < myStrength) {
        return `${myStrength} ${getStrength()}`;
    } else {
        return `${myStrength} ${getStrength()}`;
    }
}
console.log(whoIsStronger(hero.getStrength.bind(hero)));
//Function getStrength inside who is stronger its undefined means its didnt invoked right.
//So I use the bind() method creates a new function that, when called, has its this keyword set to the provided