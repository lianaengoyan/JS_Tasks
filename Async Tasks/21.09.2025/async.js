//Asynchronous JS Tasks (Predict Output)

//1
setTimeout(() => console.log("T1"), 0);
Promise.resolve().then(() => {
  console.log("P1");
  Promise.resolve().then(() => console.log("P2"));
});
console.log("S");
//S, P1, P2, T1


//2
(async () => {
    console.log("X");
    await Promise.resolve().then(() => console.log("Y"));
    console.log("Z");
  })();
  console.log("W");
//X, W, Y, Z


//3
for (let i = 0; i < 2; i++) {
    setTimeout(() => console.log("T", i), 0);
    Promise.resolve().then(() => console.log("M", i));
}
//M 0, M 1, T 0, T 1


//4
const p = Promise.resolve("done");
p.then(v => {
  console.log("first", v);
  return "next";
}).then(v => console.log("second", v));
console.log("sync");
//sync, first done, second next 


//5
async function foo(){
    console.log("foo start");
    await null;
    console.log("foo end");
}
console.log("script");
foo();
console.log("after");
//script, foo start, after, foo end

