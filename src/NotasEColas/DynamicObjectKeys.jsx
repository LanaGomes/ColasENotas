//https://www.youtube.com/watch?v=_qxCYtWm0tw&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=3
//dot notation

const person = {
  name: "john",
};

console.log(person.name); //john
person.age = 25;
console.log(person); // {name:'john', age: 25}

//square bracket notation

const items = {
  "featured-items": ["item1", "item2"],
};
console.log(items["featured-items"]); // ['item1', 'item2']
console.log(person["name"]); //john

let appState = "loading";
appState = "error";
const keyName = "banana";
const app = {
  [appState]: true,
};

app[keyName] = "apple"; // => app = error : true e keyName = banana e agora
//esta sendo atribuído o valor de apple, entao = banana:apple;

console.log(app); //{error : true, computer:'apple'}

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "john"); // {loading:true, name: 'John', job: ''}
updateState("job", "developer"); // {loading:true, name: '', job: 'developer'}
updateState("loading", false); // {loading:false, name: '', job: ''}

updateState("products", []);

// {loading:true, name: '', job: '', products: []}
