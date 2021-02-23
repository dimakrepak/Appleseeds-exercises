const input = document.querySelector('input')
const button = document.querySelector('button')
console.log(input)

button.addEventListener('click', () => {
    const inputVal = parseInt(input.value)
    console.log(inputVal)
    if (inputVal < 18) {
        document.querySelector('p').innerHTML = 'You cant drink!!!'
        document.querySelector('p').style.color = 'red'
    }else{
        document.querySelector('p').innerHTML = 'GO ONNNN!'
        document.querySelector('p').style.color = 'green'
    }
})

