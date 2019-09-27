class Employee{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.img = 'https://placekitten.com/640/360';
    }
}
var data = [];
for(i=0; i<1000; i++){
    var person = new Employee('Name'+i,i);
    data.push(person);
}

module.exports = data;