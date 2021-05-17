//1) OBJECT DESTRUCTURING


// const person={
//     //name:'Abhishek Kumar Maniyal',
//     name:'Abhishek Kumar Maniyal',
//     age:21,
//     location :{
//         city:'Ramagundam',
//         temp: 38
//     }
// }
// const {name='Anonymous',age}=person;
// const {city,temp:t}=person.location;


// console.log( name,'is of age',age);
// console.log( 'and he lives in',city,'where temperature is',t);



//1) ARRAY DESTRUCTURING

const item=['coffee(hot)','₹10','₹20','₹30'];

const [first, second,third]=item;

console.log('A medium',first,'costs',third);