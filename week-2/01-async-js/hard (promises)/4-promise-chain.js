/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, t*1000);
    })
}

function wait2(t) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, t*1000);
    })
}

function wait3(t) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, t*1000);
    })
}

async function calculateTime(t1, t2, t3) {
    let p1 = new Date().getTime();
    await wait1(t1);
    let p2 = new Date().getTime();
    let p3 = new Date().getTime();
    await wait2(t2);
    let p4 = new Date().getTime();
    let p5 = new Date().getTime();
    await wait3(t3);
    let p6 = new Date().getTime();
    return new Promise(function(resolve, reject) {
        resolve((p2-p1)+(p4-p3)+(p6-p5));
    });
}

module.exports = calculateTime;
