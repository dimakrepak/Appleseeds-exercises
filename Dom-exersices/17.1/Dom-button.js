const text = document.querySelector('p')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')

console.log(text)
let fontSize = parseInt(window.getComputedStyle(text).fontSize);
console.log(fontSize)

plus.addEventListener('click', () => {
    if (fontSize < 100) {
        fontSize += 10
        text.style.fontSize = `${fontSize}px`
    }
})
