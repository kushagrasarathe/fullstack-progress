console.log(global)

global.setTimeout(() => {
    console.log('This will be logged after 3 seconds')
    clearInterval(log)
}, 3000);

const log = setInterval(() => {
    console.log('Keep logging after 1 second')
}, 1000);

// dirname
console.log(__dirname)
console.log(__filename)