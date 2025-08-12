//augst 07

//#1 Blocking va Non-Blocking
function block (seconds) {
    const startTime = Date.now();
    const endTime = startTime + seconds * 1000;

    while(Date.now() < endTime) {}
}

console.log("Start");
block(3);
console.log("End");


//#2 Basic setTimeout Demo
console.log("Start");
setTimeout(() => console.log("Timeout done"), 2000);
console.log("End");
//start (first sync)
//end (second sync)
//timeout done (async - in 2 seconds, it goes to callback queue first,
//then prints first sync code, then if there is microtask prints that,
//and at the end macrotask (which is setTimeout here)


//#3 Delayed Greeting
function greetingLater(name) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        
    }, 2000);
}

greetingLater("Liana");


//#4 Multiple Timers, Different Delays
setTimeout(() => {
    console.log("First");
    
}, 3000);

setTimeout(() => {
    console.log("Second");
    
}, 1000);

setTimeout(() => {
    console.log("Third");
}, 2000);


//#5  Multiple Timers, Same Delay
setTimeout(() => {
    console.log("Hello");
    
}, 0);

setTimeout(() => {
    console.log("there");
    
}, 0);

setTimeout(() => {
    console.log("mates");
}, 0);


//#6 Simulate a Phone Call
console.log("Dialing");

setTimeout(() => {
    console.log("Ringing");
}, 1000);

setTimeout(() => {
    console.log("Call connected");
}, 3000);


//#7 Boiling Water Simulation
function boilWater(callback) {
    console.log("Boiling water...");
    
    setTimeout(() => {
        callback();
    }, 3000)
}

boilWater(() => console.log("Water ready!"));


//#8 Boil and Add Pasta
function boilWater(callback) {
    console.log("Boiling water...");
    setTimeout(() => {
        callback();
    }, 2000); 
}

function addPasta(callback) {
    console.log("Adding pasta...");
    setTimeout(() => {
        callback();
    }, 1000); 
}

boilWater(() => {
    addPasta(() => {
        console.log("Pasta is cooking!");
    });
});


//#9 Random Delayed Log
setTimeout(() => {
    console.log("Random msg");
}, Math.floor(Math.random() * 5000));


//#10 Countdown Timer
setTimeout(() => {
    console.log("3...");
    setTimeout(() => {
        console.log("2...");
        setTimeout(() => {
            console.log("1...");
            setTimeout(() => {
                console.log("Go!");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


//#11 Time Estimator
function time() {
    console.log("Task started");
    
    let start = Date.now()

    setTimeout(() => {
        console.log("Task Finished");
        let end = Date.now();
        let delay = end - start;
        console.log(`Real delay is ${delay}`);   
    }, 2000)
}

time()


//#12 Writing a Timer Function
function wait (ms, callback) {
    const start = Date.now()

    while(Date.now() - start < ms) {}

    callback();
}

wait(2000, () => console.log("Waited 2 seconds"));

