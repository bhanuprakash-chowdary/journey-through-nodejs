import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
import { dirname } from 'path';
const PORT = process.env.PORT;

const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
console.log(__filename,__dirname);


function requestHandler(req, res) {
    // res.write('Hello world');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<h1> Hello world </h1>');
}

const server = http.createServer(async(req, res) => {

    try {
        if (req.method === 'GET') {
            let filePath;
            if (req.url === "/") {
                filePath = path.join(__dirname,'public','index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname,'public','about.html');
            } else {
                throw new Error("Not Found")
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type','text/html')
            res.write(data);
            res.end();
        } else {
            throw new Error("Method not allowed")
        }
    } catch (e) {
        res.writeHead(505, { 'content-type': 'text/plain' });
        res.end(`Internal Server Error ${e}`);
    }

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

