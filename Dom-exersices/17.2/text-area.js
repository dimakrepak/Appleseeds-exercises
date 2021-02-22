const textarea = document.querySelector('.textarea')
const b = document.querySelector('button')

const countWords = () => {
    let text = textarea.value;
    console.log(text)
    let split = text.split(' ')

    let numWords = 0;

    for (let i = 0; i < split.length; i++) {
        if (split[i] !== "") numWords++
    }
    if (numWords > 10) {
        document.querySelector('p').innerHTML = `Good ${numWords} is right`
    } else {
        document.querySelector('p').innerHTML = 'Enter more tha 10 words'
    }
}
b.addEventListener('click', countWords)