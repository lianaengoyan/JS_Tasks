//Asynchronous JS Tasks (Predict Output)

//1
console.log("Start");
setTimeout(() => console.log("Timeout 0"), 0);
Promise.resolve().then(() => console.log("Microtask 1"));
console.log("End");
//Start, End, Microtask 1, Timeout 0


//2
console.log(1);
queueMicrotask(() => console.log(2));
console.log(3);
setTimeout(() => console.log(4));
Promise.resolve().then(() => console.log(5));
//1, 3, 2, 5, 4


//3
setTimeout(() => console.log("A"), 0);
Promise.resolve().then(() => console.log("B"));
console.log("C");
//C, B, A


//4
Promise.resolve().then(() => console.log("P1"));
Promise.resolve().then(() => console.log("P2"));
console.log("S");
//S, P1, P2


//5
console.log("X");
setTimeout(() => {
  console.log("Y");
  Promise.resolve().then(() => console.log("Z"));
}, 0);
//X, Y, Z


//6
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 0);
    }
}
//4, 4, 4, 4


//7
console.log("M1");
queueMicrotask(() => {
  console.log("M2");
  queueMicrotask(() => console.log("M3"));
});
console.log("M4");
// M1, M4, M2, M3


//8
console.log("Start");
setTimeout(() => console.log("Timeout 0"), 0);
Promise.resolve().then(() => console.log("Microtask 1"));
console.log("End");
//Start, End, Microtask 1, Timeout 0