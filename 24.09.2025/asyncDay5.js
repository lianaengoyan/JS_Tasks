//Asynchronous JS Tasks (Predict Output)

Promise.race([
    new Promise(r => setTimeout(() => r("slow"), 50)),
    Promise.resolve("fast")
  ]).then(console.log);

  let done = false;
  const p = new Promise(r => setTimeout(() => { done = true; r("ok"); }, 0));
  console.log(done);
  p.then(() => console.log(done));

  async function seq(){
    for (const v of [1,2]) {
      await Promise.resolve(v).then(console.log);
    }
  }
  seq();
  console.log("end");

  const results = [];
  [1,2,3].forEach(async n => {
    results.push(await Promise.resolve(n));
  });
  setTimeout(() => console.log(results), 0);
  
 //false, end, 1, fast, 2, true, [1,2,3]
