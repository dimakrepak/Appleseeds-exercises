const table = document.createElement('table')
const mainrow = document.createElement('tr')
mainrow.innerHTML = `<td>name</td>
        <td>haircolor</td>
        <td>height</td>
        <td>planet name</td>
        <td>population</td>`;
document.body.appendChild(table)
table.appendChild(mainrow)

function handleError(err) {
    console.log('Oh No');
    console.log(err);
}

const endpoint = 'https://swapi.dev/api/';
const peopleEndpoint = 'https://swapi.dev/api/people/';

// const promise = fetch(peopleEndpoint);
// promise.then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
//     console.log(data.results);
// }).catch(handleError)

async function fetchCharacters() {
    const promisePeople = await fetch(peopleEndpoint);
    const data = await promisePeople.json();
    console.log(data);


    for (let i = 0; i < data.results.length; i++) {
        let person = data.results[i];
        let homePromise = await fetch(person.homeworld)
        let personHome = await homePromise.json()
        console.log((personHome));


        const row = document.createElement('tr');
        row.innerHTML = `<td>${person.name}</td>
        <td>${person.hair_color}</td>
        <td>${person.height}</td>
        <td>${personHome.name}</td>
        <td>${personHome.population}</td>`;

        table.appendChild(row);
    }


}
fetchCharacters().catch(handleError)