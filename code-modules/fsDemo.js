// import fs from 'fs';

// //readFile() - callback;
// fs.readFile('./test.txt','utf8',(err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// //readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt','utf8');
// console.log(data);
//---------------------------------------------//

import fs from 'fs/promises';

//readFile() - promise .then();
// fs.readFile('./test.txt','utf8').then((data)=> console.log(data)).catch((err)=> console.log(err));

//readFile() - async/wait
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt','utf8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// writeFile()
const writeFile = async() => {
    try {
        await fs.writeFile('./test.txt',' writing few lines of content into the test file ..Thanks');
        console.log('File written to.........')
    } catch (err) {
        console.log(err);
    }
}

// appendFile()

const appendFile = async() => {
    try {
        await fs.appendFile('./test.txt','\nThis is appended text');
        console.log('File append to.........')
    } catch (err) {
        console.log(err);
    }
}
writeFile();
appendFile();
readFile();
