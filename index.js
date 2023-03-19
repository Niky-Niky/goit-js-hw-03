const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  console.log(user.mood);
  console.log(user.hobby);
  console.log(user.premium);
  // const keys = Object.keys(user);
  // console.log(keys);
  // for(const key of keys){
  //   console.log('Value: ', hotel[key]);
  // }
  const keys = Object.keys(user); // ["name", "stars", "capacity"]

for (const key of keys) {
  console.log('Value: ', user[key]);
}

  
  
  
  
  
  
  
  
  
  const countProps = function (object){
keysQuantity = Object.keys(object).length;
return keysQuantity
}
console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 })); 
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// const findBestEmployee = function(employees){

// }
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// );