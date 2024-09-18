const os = require('os');


console.log('My first app');
console.log(`File Name: ${__filename}`);
console.log(`Directory Name: ${__dirname}`);

console.log("=============== Built in Module - OS =======================");
console.log(`Arch: ${os.arch()}`);
console.log(`platform: ${os.platform()}`);
console.log(`freemem: ${os.freemem()}`);
console.log(`totalmem: ${os.totalmem()}`);
console.log(`hostname: ${os.hostname()}`);
console.log(`release: ${os.release()}`);
console.log(`type: ${os.type()}`);
console.log(`uptime: ${os.uptime()}`);
console.log(`userInmfo: ${os.userInfo()}`);

console.log("======Global Object==========");
console.log(`File Name: ${__filename}`);
console.log(`Directory Name: ${__dirname}`);

console.log(`console: ${console}`);
console.log(`process: ${process}`);
console.log(`module: ${module}`);



