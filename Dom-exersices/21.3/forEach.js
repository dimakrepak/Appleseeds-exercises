const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];
const ul = document.createElement('ul');

users.forEach(el => {
    let li = document.createElement('li');
    li.innerHTML = `${el.firstName} ${el.lastName}`
    li.setAttribute('data-id', `${el.id}`)
    ul.appendChild(li)

})
document.body.appendChild(ul)
console.log(ul)
ul.style.listStyle = 'none'



