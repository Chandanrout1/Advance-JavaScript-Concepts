//closure example

function main() {
  let name = "chandan";

  //closure
  function sayMyName() {
    console.log(name);
  }
  sayMyName();
}

// main();

// example 2

function displayName(name) {
  function sayMyName() {
    console.log(name);
  }
  return sayMyName;
}

let consoleName = displayName("chandan rout");

// consoleName();

//example 3

function adder(num) {
  function add(num2) {
    console.log(num + num2);
  }
  return add;
}

let adder1 = adder(1);

// adder1(2);


//example 4 practical closer

const myName = document.getElementById("name")
const btn = document.getElementById("btn")

function changeTextSize (size) {
    function changeSize() {
        myName.style.fontSize = `${size}px`;
    }
    return changeSize;
}

const size10 = changeTextSize(10)
const size20 = changeTextSize(20)
const size30 = changeTextSize(30)
const size40 = changeTextSize(40)

btn.addEventListener("click", ()=> size30())

// example 5 

const btn2 = document.getElementById("btn2")
const displayCount = document.getElementById("count")



function makeCounter() {
    
    let count = 1;
    
    function increseCount () {
        console.log(count ++);
    }
    return increseCount;
}

const counter = makeCounter()


btn2.addEventListener("click", () => {counter()} )






