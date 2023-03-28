// alert("i'm rohith");

// function sum(a, b, c) {
//   "use strict";
//   return a + b + c;
// }

// console.log(sum(2, 3, 4));

// let message = "rohith";
// message = "reddy";
// console.log(message);

// const name = "iron man";
// console.log(name);


// console.log(typeof "rohith");

// let names = "Ilya";

// alert( `hello ${1}` );

// alert( `hello ${"name"}` ); 

// alert( `hello ${names}` );

// let person = prompt(`enter the name `);
// let persons = confirm(`are the person of the rohith`);
// alert(persons)

// let counter = 0;
// counter++;
// ++counter;
// alert( counter );

// let a = 1, b = 1;

// let c = ++a; 
// let d = b++;
// console.log(c);
// console.log(d);

// let a = 2;

// let x = 1 + (a *= 2);
// console.log(x);


// let a = 23;
// if(a==23){
//     console.log("you have entered the correct value");
// }else{
//     console.log("you have entered the wrong number");
// }

// let age=13;
// let access = age > 18 ? true : false;
// console.log(access);


// let age = prompt('enter the age',12);
// if (age < 3) {
//     message = 'Hi, baby!';
//   } else if (age < 18) {
//     message = 'Hello!';
//   } else if (age < 100) {
//     message = 'Greetings!';
//   } else {
//     message = 'What an unusual age!';
//   }

//   console.log(message);


//   let value = prompt('enter the value');
//   if(value>0){
//     alert('the value is correct grater than 1');
//   }else if(value < 0){
//     alert('enter the value is correct less than 0');
//   }else{
//     alert('you have entered the less than the number');
//   }

// let age = 92;
// if(age>=14&&age<=90){
//     alert('your range is between the condition');
// }else{
//     alert('your range is out of the box');
// }

// let ages = 93;
// if(ages!=14 && age!=90){
//     alert('your range is betwwen the condition');
// }else{
//     alert('your range is out of the box')
// }

let admin = prompt('enter the username');
if(admin == 'rohith'){
    let master = prompt('enter the password');
    if(master == 'reddy'){
        alert('you have entered the correct password');
    }else if(master == ''){
        alert('you have entered the wrong password');
    }else{
        alert('cancel'); 
    }
}else if(admin == 'reddy'){
    alert('you have entered the wrong password')
}else{
    alert('cancel');
}