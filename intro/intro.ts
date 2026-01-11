let greeting: string = "Hello, World from TS!";
let id: number = 5;
let isAdmin: boolean = true;

console.log(greeting);

const user = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
};

console.log(user.age);

// functions in TS
function add(num: number): number {
  return num + 1;
}

console.log(add(5));

function signUpUser(name: string, email: string, isPaid: boolean) {}

// example using arrow function
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("John", "j@j.com");

// might be scenarios where function returns more than one thing
function getResult(value: number) {
  if (value > 0) {
    return true;
  }
  return "hey";
}

// TYPE ALIAS
type User = {
  name: string;
  email: string;
  userId: number;
};

// you can now use the User alias as a data type by itself

function CreateUser(user: User) {}

// then when calling the function CreateUser pass in the User object
CreateUser({ name: "John", email: "j@j.com", userId: 1 });

// in case you don't want a variable in a type not to be changed, you use the readonly keyword, also when you want a value to be optional use the question mark (?)

type Car = {
  readonly model: string;
  year: number;
  color?: string;
};

// arrays
const simpleString: string[] = [];
const heroPower: Array<number> = [];
simpleString.push("hello");

// unions, the variable record can hold a number or a string
let record: number | string;

record = "hello";
record = 5;

type Member = {
  role: string;
  name: string;
};

type Admin = {
  name: string;
  age: number;
};

let staff: Member | Admin = {
  name: "John Doe",
  role: "Admin",
};

// unions in arrays is quite different, there the array can now hold strings and numbers all together
const data: (string | number)[] = [1, "2", 3];
