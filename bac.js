// Конструктор вывода


function CreateUser (userName, userAge) {
    
    var myObj = {
        name: userName,
        age: userAge, 
        send: function () {
            alert (`data send: ${this.name} ${this.age}`)
        }
    }
    return myObj;
}

var User1 = new CreateUser('Anna', 25);
var User2 = new CreateUser('Kolya', 30);


User1.send();
User2.send();

console.log(User1);
console.log(User2);

// version 2 NEW

function CreateUser (userName, userAge) {
    this.name = userName;
    this.age = userAge;
    this.send = function () {
        alert (`data send: ${this.name} ${this.age}`)
    }
}

var User1 = new CreateUser('Anna', 25);
var User2 = new CreateUser('Kolya', 30);


User1.send();
User2.send();

console.log(User1);
console.log(User2);