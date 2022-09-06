console.log(global)

global.setTimeout(() => {
    console.log('This will print after 3 seconds')
}, 3000);