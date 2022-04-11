const crypto = require("crypto");
const start = Date.now();

function logHashTime(){
    crypto.pbkdf2("a","b",100000,512,"sha512",()=>{
        console.log(`Hash: ${Date.now() - start}`);
    });
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();

function logHashTimeSync(){
        return crypto.pbkdf2Sync("a","b",100000,512,"sha512")
}
const start2 = Date.now();

let sync1 = logHashTimeSync();
console.log(`Sync: ${Date.now() - start2}`)
let sync2 = logHashTimeSync();
console.log(`Sync: ${Date.now() - start2}`)

console.log(sync1);
console.log(sync2);
