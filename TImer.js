const waitTime = 10000;
const waitInterval = 500;
let currentTime = 0;

const inclTime = () => {
    currentTime += waitInterval;
   const p = Math.floor((currentTime / waitInterval) * 100);
   process.stdout.clearLine();
   process.stdout.cursorTo(0);
   process.stdout.write(`waiting... ${p}%`);
}

console.log(`setting a ${waitTime / 1000} second delay...`);

const timeFinished = () => {

    
    clearInterval(Interval);
    process.stdout.clearLine();
   process.stdout.cursorTo(0);
    console.log("Done!");

};
const Interval = setInterval(inclTime, waitInterval);
setTimeout(timeFinished, waitTime);