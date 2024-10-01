// Immediately Invoked Function Expression

(function add(a, b) {
  console.log(a + b);
})(1, 2);

(function printName(name) {
  console.log(name);
})("chandan");

// es6

((name) => console.log(name))("Chandan Rout");
((a, b) => console.log(a + b))(10, 8);

const value = ((a) => a * 10)(5);
console.log(value);

((add) => {
  let age = 18;
  console.log(age + add);
})(6);

// asyncronous iife

const data = (async () => await fetch(""))();

// module pattern

const atm = function (initialBalance) {
    let balance = initialBalance;
    function withdraw(amt) {
        if(amt > balance) {
            return "Insufficient balance";
        }else {
            balance -= amt;
            return balance;
        }
    }
    return { withdraw }
}

const chandan = atm(2000);

console.log(chandan.withdraw(800));
console.log(chandan.withdraw(800));
console.log(chandan.withdraw(600));







