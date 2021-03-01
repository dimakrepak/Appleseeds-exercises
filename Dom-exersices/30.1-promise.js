function lessGreater(num) {

    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`${num} is greater than 10`)
        } else {
            reject(`${num} is less than 10`)
        }
    })
}

lessGreater(8).then(result => console.log(result))
    .catch(err => console.log(err))