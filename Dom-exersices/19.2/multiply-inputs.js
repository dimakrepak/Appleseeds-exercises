const inputs = document.querySelectorAll('#container > input')
const button = document.querySelector('button')
console.log(inputs);

inputs.forEach((el) => {

    el.addEventListener('keyup', () => {
        el.nextElementSibling.focus()
    })

})
button.addEventListener('focus', (e) => {
    console.log('focus');
    
})


inputs[0].addEventListener('paste', (event) => {
    const pastedText = event.clipboardData.getData('text');
    inputs.forEach((el, i) => {
        let arr = pastedText.split('')
        el.value = arr[i]
    })
})