//for of loop

let arr = [1, 2, 3, 4, 5];

for (val of arr) {
  //   console.log(val);
}

// iterators

function makeIterator(start = 0, end = Infinity, step = 1) {
  let nextStart = start;
  let iterationCount = 0;

  return {
    next() {
      let result;
      if (iterationCount < end) {
        result = { value: nextStart, done: false };
        nextStart = nextStart + step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
}

// const myIterator = makeIterator(1, 10, 1);

// let result = myIterator.next();

// while (!result.done) {
//   console.log(result.value);
//   result = myIterator.next();
// }

//generator function

function* count() {
  yield 2;
  yield 4;
  yield 6;
  yield 8;
  yield 10;
}

const num = count();

for (const val of num) {
  //   console.log(val);
}

//iterator in generator function

function* makeIterator1(start, end, step) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

const btn = document.getElementById("btn");
const oneTwoTen = makeIterator1(1, 10, 1);

// for (val of oneTwoTen) {
//   console.log(val);
// }

btn.addEventListener("click", () => {
  btn.innerText = oneTwoTen.next().value;
});
