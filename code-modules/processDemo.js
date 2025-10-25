// argv

console.log(process.argv)

// output for node processDemo.js;


// [
//   '/usr/local/bin/node',
//   '/Users/credr/Documents/journey-through-nodejs/processDemo.js'
// ]


// output for node processDemo.js import sjdjskj;

// [
//   '/usr/local/bin/node',
//   '/Users/credr/Documents/journey-through-nodejs/processDemo.js',
//   'import',
//   'sjdjskj'
// ]

console.log(process.argv[5])

//----//

// process.env
console.log(process.env.LOGNAME)

// pid
console.log(process.pid)

// cwd
console.log(process.cwd())

// title
console.log(process.title)

// memoryUsage()
console.log(process.memoryUsage())

// uptime
console.log(process.uptime())

process.on('exit',(code)=>{
    console.log(`About to exit with code ${code}`);
})

// exit
process.exit(0);

console.log("hello after exit")