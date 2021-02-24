const chars = document.querySelector('.chars')
const guess = document.querySelector('.guess')
const btn = document.querySelector('button')
console.log(chars);


let arr = [];
let count
let twice
let key 
window.addEventListener('keyup', (event) => {
    key = event.key
    console.log(key);
    arr.push(key)
    chars.innerHTML = `${arr}`
    console.log(arr);
    twice = arr.filter(x => x === key)
    console.log(twice);
    if (twice.length > 1) chars.innerHTML = `this key entered twice ${key}`;
    ifGuess(key)
    const btn = document.querySelector('button')
    btn.addEventListener('click',()=>{
        location.reload()
    })




})

function ifGuess(key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    console.log(randomCharacter);
    if (key === 'a') {
        guess.innerHTML = `True guessed! The letter is ${key}`
        chars.innerHTML = `<button>Start Over</button>`
    }
}
// btn.addEventListener('click',()=>{
//     location.reload()
// })