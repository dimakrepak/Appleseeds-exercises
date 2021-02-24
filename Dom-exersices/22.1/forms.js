const signupForm = document.querySelector('[name="signup"]')


signupForm.addEventListener('submit', (event) => {
    let d = confirm(`Your name is ${event.currentTarget.name.value} and email ${event.currentTarget.email.value} and age ${event.currentTarget.age.value}`)
    if (d) {

        alert('Congrutilationsn!!')

    }
})