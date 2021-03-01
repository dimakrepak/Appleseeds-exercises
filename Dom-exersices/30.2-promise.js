
let array = ['dima', 'asdafd', 'traer']

function makeAllCaps(arr) {
    return new Promise(resolve => {
        resolve(arr.map(a => (a[0].toUpperCase() + a.slice(1)))

        )
    })
}

function sorte(arr) {
    const isOnlyString = arr.reduce((isOnlyString, word) => isOnlyString && typeof word === 'string', true)
    return new Promise((resolve, reject) => {
        if (isOnlyString)
            resolve(arr.sort());
        else
            reject("err : The array does not include only words in strings");
    });
}


sorte(array).then(result => {
    console.log(`sorte ${result}`)
    return makeAllCaps(array)
}).then(result => {
    console.log(`caps locke ${result}`)
})
    .catch((err) => {
        console.log(err);
    })


