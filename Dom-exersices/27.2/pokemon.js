

const pokemonAttackList = ['tata', 'baba', 'sasa']

function pokeman(pokemonName, pokemonType, pokemonAttackList) {
    this.pokemonName = pokemonName
    this.pokemonType = pokemonType
    this.pokemonAttackList = pokemonAttackList
}
pokeman.prototype.callPokemon = function () {
    return `${this.pokemonName}`
}
pokeman.prototype.attack = function () {
    return `I choose you ${this.pokemonName} and attack ${this.pokemonAttackList[0]}`
}
const pok1 = new pokeman('Dima', 'tr', pokemonAttackList)

console.log(pok1.callPokemon());
console.log(pok1.attack());
// const pok2 = pokeman()
// const pok3 = pokeman()