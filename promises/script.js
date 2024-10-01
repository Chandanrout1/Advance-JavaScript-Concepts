// 1.  Promises

let responsefromServer = fetch("https://jsonplaceholder.typicode.com/posts");
console.log(responsefromServer);

// above code returns a promise

//1. using async await

async function getData() {
  let datafromServer = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(await datafromServer.json());
}

getData();

//2. using .then

let datafromServer = fetch("https://jsonplaceholder.typicode.com/posts");

datafromServer
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
