//Advanced Asynchronous JS Tasks (Predict Output)

//1
setTimeout(() => {
    console.log("T");
    Promise.resolve().then(() => console.log("M inside T"));
  }, 0);
  Promise.resolve().then(() => console.log("M outside"));
  console.log("S");
//S, M outside, T, M inside T


//2.
  for (let i = 0; i < 2; i++) {
    setTimeout(() => console.log("A", i), 0);
    Promise.resolve().then(() => console.log("B", i));
  }
//B 0, B 1, A 0, A 1



//3.
  const p = new Promise(r => {
    console.log("P body");
    r();
  });
  p.then(() => console.log("P then"));
  console.log("after P");
//P body, after P, P then



//4.
  let x = 0;
  setTimeout(() => x = 1, 0);
  Promise.resolve().then(() => console.log(x));
  console.log("done");
//done, 0
 
  
//5.
  const a = Promise.resolve("A");
  const b = Promise.resolve("B");
  Promise.all([a, b]).then(v => console.log(v.join("")));
  console.log("C");
//C, AB