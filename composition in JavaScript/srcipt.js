//without composition

function add(a, b) {
  return a + b;
}

function square(num) {
  return num * num;
}

function mul(args) {
  return args[0] * args[1];
}
// const addResult = add(5, 6);
// console.log(square(addResult));

function addThenSquare(a, b) {
  return square(add(a, b));
}

// console.log(addThenSquare(2, 3));

//composition

function composeTwofn(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

const task = composeTwofn(add, square);
// console.log(task(4, 5));

const task2 = composeTwofn(mul, square);
// console.log(task2(4, 5));

//es6

const composeTwofunc = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

const task3 = composeTwofunc(mul, square);
// console.log(task3(4,5));

// example

function compose(...fns) {
    return function(...values) {
       return fns.reduce((a,b) => b(a), values)
    } 
}

//es6

const composeAll = (...fns) => (...val) => fns.reduce((a,b) => b(a), val)

const task4 = compose(mul, square)
const task5 = composeAll(mul, square)

const task6 = composeAll(mul, square, function(val) {return val * 2})

console.log(task4(2,3));
console.log(task5(2,3));
console.log(task6(2,3));


