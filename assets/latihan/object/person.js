const persons = [];

class Person {
    constructor(
        name,
        gender
    ) {
        this.name = name;
        this.gender = gender;
    }

    setTitle(title) {
        if (this.gender === "L") {
            this.name = "Tuan " + this.name;
        } else if (this.gender === "P") {
            this.name = "Nyonya " + this.name;
        }
    }

    static find(name) {
        return persons.find(person => person.name === name);
    } 
}

const person1 = new Person("John", "L");
person1.setTitle("Mr.");
persons.push(person1);

const person2 = new Person("Jane", "P");
person2.setTitle("Mrs.");
persons.push(person2);

console.log(persons);

console.log(Person.find("John"));

