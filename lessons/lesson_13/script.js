console.log("Hallo!");

let user = {
    name: "John",
    age: 30,
    isAdmin: true
}

console.log(user.name);

user.greet = function(){
    console.log('Hallo, my name ist ${this.name} and i am ${this.age}');
}

user.greet();