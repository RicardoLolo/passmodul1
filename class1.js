class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;

    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return 'Name: ' + this.name + '; ' + 'Weight: ' + this.weight;
    }

}

let objAnimal1 = new Animal('Elephant', 45.6);
console.log(objAnimal1.toString());

let objAnimal2 = new Animal('NAME', 'WEIGHT');
objAnimal2.setName('MOUSE');
console.log(objAnimal2.getName());