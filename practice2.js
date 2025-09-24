let user = { address: { city: "Lahore" } };

console.log(user.address?.city);    // Lahore
console.log(user.profile?.age);     // undefined

let score = 0;
let finalScore = score ?? 50;
console.log(finalScore);  // 0

let person = { name: "Ali", age: 22 };
let { name, age } = person;

console.log(name); 
console.log(age);  


let nums = [1, 2, 3, 4];
let newNums = [...nums, 5, 6];

console.log(newNums); // [1, 2, 3, 4, 5, 6]
function sum(...values) {
  return values.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

async function fetchData() {
  return "Data received!";
}
async function showData() {
  let result = await fetchData();
  console.log(result);
}
showData();
