// example without currying

function add(a, b, c) {
  return a + b + c;
}

console.log(add(10, 30, 40));

// currying

function addNumber(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(addNumber(5)(15)(10));

//2nd way

const addNumbers = (a) => (b) => (c) => a + b + c;
console.log(addNumbers(5)(25)(50));

// currying practical

function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(
        `This a auto email for ${to} with subject ${subject} : ${body}`
      );
    };
  };
}

let step1 = sendAutoEmail("chandan@gmail.com");
let step2 = step1("New task assigned");
step2("task details...");

//2nd way

const sendAutoEmail2 = (to) => (subject) => (body) =>
  `This a auto email for ${to} with subject ${subject} : ${body}`;

console.log(
  sendAutoEmail2("chandu18@gmail.com")("new order recieved")("order details...")
);
