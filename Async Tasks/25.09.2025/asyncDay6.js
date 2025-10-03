//Asynchronous JS Tasks (Predict Output)

(async () => {
    try {
      await Promise.reject("X");
    } catch (e) {
      console.log("C", e);
    }
    console.log("done");
  })();

  (async () => {
    try {
      return await Promise.reject("R");
    } catch (e) {
      console.log("caught", e);
    }
    console.log("after");
  })();

  (async () => {
    console.log("A");
    await Promise.resolve().then(() => { throw "B"; });
    console.log("C");
  })().catch(e => console.log("D", e));

  Promise.resolve("A")
    .finally(() => console.log("F"))
    .then(v => console.log(v));

//A, C X, done, caught R, after, F, D B, A