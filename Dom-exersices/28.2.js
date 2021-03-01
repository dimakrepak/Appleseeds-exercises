const person = {
    name: 'Dima',
    getName: function () {
        console.log(`Name is ${this.name}`);
        setTimeout((function () {
            console.log(`After sec ${this.name}`);
        }).bind(this), 1000)
    }

}
person.getName()