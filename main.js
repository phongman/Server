var ages = [32, 33, 12, 40, 1, 1.2];
var persons = [
    {
      name: "tien",
      birthday: "30-04-1998"
    },
    {
      name: "tuan anh",
      birthday: "01-05-1994"
    },
    {
      name: "trung",
      birthday: "02-09-1997"
    },
    {
      name: "doan",
      birthday: "23-08-1998"
    },
  ];

  //bai 1
  var x = ages.filter(function(age){
      if(age%2==0) return age;
  })
  console.log(x);
  //bai 2
  function convertDate(arr){
    for( var day of arr){
        day.birthday = day.birthday.split("-").reverse().join("-");
    }
  }
  convertDate(persons);
  var month6 = persons.filter(function(obj){
    var x = new Date(obj.birthday);
        Month=x.getMonth();
    if(Month>=5)
       console.log(obj);
    return;
  })
  //bai 3
  var age22 = persons.filter(function(obj){
      var today= new Date();
      var yearNow= today.getFullYear;
      var born = obj.birthday.getFullYear;
      console.log(today.getMonth()+1);
      if((yearNow-born)>=22)
        //console.log(obj);
    return;
  })
  //bai 4
  persons.sort(function(obj1,obj2){
    obj1.birthday = new Date(obj1.birthday);
    obj2.birthday = new Date(obj2.birthday);
    return obj2.birthday - obj1.birthday;
  })
  //console.log(persons);
  
  //bai 5
  persons.sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  //console.log(persons);

  //bai 6;
  var newobj= persons.map(function(item){
    var newobj=Object.assign({},item);
    var name = item.name.toUpperCase();
    newobj.name = name;
    return  newobj;
})
console.log(newobj);

//bai7
var doan = {
    name: 'Doan',
    age: 22,
    salary: 10000
}

var trung = Object.assign({},doan,{name:'Trung', clone:true});
console.log(doan);
console.log(trung);
