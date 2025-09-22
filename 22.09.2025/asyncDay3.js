//Advanced Asynchronous JS Tasks (Predict Output)

// //1
new Promise(r => { console.log("start"); r(); })
.then(() => { 
    console.log("then1"); return Promise.resolve("X"); 
}).then(console.log);
console.log("sync");
//start, sync, then1, X


//2.
Promise.reject("err")
  .catch(e => { 
    console.log("catch", e); return Promise.resolve("ok"); 
  }).then(console.log);
//catch err, ok


//3.
const p = Promise.resolve("first");
const q = p.then(v => v + " second");
p.then(console.log);
q.then(console.log);
//first, first second



//4.
Promise.resolve()
  .then(() => console.log("1"))
  .then(() => { 
    throw "boom"; 
  }).catch(e => console.log("caught", e)).then(() => console.log("2"));
//1, caught boom, 2


//5.
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => {
  console.log(3);
  setTimeout(() => console.log(4), 0);
});
console.log(5);
//1, 5, 3, 2, 4