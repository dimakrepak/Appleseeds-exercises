console.log('Hi');
// 1
const starthere = document.querySelector('.start-here')
starthere.innerHTML = 'Main Title'
// 2
const ulWithLi = document.querySelector('ul > li > ul')
const subli = document.createElement('li')
console.log(ulWithLi);
ulWithLi.appendChild(subli)
subli.innerHTML = 'Subtitle 4'
// 3
const firstUl = document.querySelector('body>ul')
firstUl.lastElementChild.remove()
// 4
document.title = 'King of the Dom'
//5
const p = document.querySelector('div>p')
p.innerHTML='Dmitry the King!!!!'



