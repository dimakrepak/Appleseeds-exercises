
class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
    getSound() {
        console.log(this.sound);
        return this.sound;
    }
}


a1 = new Animal('Lion', 'rawwr')
a2 = new Animal('Cat', 'Myau')

a1.getName()
a2.getSound()