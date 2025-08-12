//#1 Simulate a Single-Threaded Web Server
function handleRequest(clientId, delay) {
    console.log("Handling", clientId);
    
    setTimeout(() => {
        console.log(clientId, "responded");
    }, delay);
}

handleRequest("client1", 3000);
handleRequest("client2", 1000);
handleRequest("client3", 2000);


//#2 Task Queue Order Challenge
setTimeout(() => {
    console.log("first");
        setTimeout(() => {
            console.log("second");
                setTimeout(() => {
                    console.log("third");
                    
                }, 3000);
        }, 2000);
}, 1000);


//#3 Deeply Nested Recursive Timers
function countDown(n) {
    if(n <= 0) {
        return;
    }

    setTimeout(() => {
        console.log(n);
        countDown(n - 1)
    }, 1000);
}

countDown(5);