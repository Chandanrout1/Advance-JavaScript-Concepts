// without promise

function loadScript(src, callback) {
  const script = document.createElement("script");

  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error("Error loading"));

  document.head.appendChild(script);
}

// loadScript("test.js", (err, script) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Script Loaded");
//   }
// });

// promisification

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  };
}

const loadScriptNew = promisify(loadScript);
//.then method

//   loadScriptNew("test.js")
//       .then(()=> console.log("Done"))
//       .catch((err) => console.log("Error")
//       )

// async await iife

(async () => {
  try {
    const result = await loadScriptNew("test.js");
    console.log("Done");
  } catch (error) {
    console.log("error ho gayil ba");
  }
})();
