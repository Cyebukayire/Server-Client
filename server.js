const http = require('http');
const fs = require('fs');
// const file=require('./blogs/index.html');

const port1=3000;

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);

    //Set header content type 
    // res.setHeader('Content-Type', 'text/plain'); //Ignores html tags
    res.setHeader('Content-Type', 'text/plain');
    // res.write('<h1>Ninjas!</h1>');
    // res.write(`<p>Hello, Ninjas!</p>`);
    // res.write(`<p>Hello again, Ninjas!</p>`);

    //Send an html file
    fs.readFile(`./blogs/index.txt`, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
});

server.listen(port1, 'localhost', () => {
    console.log(`Listening for requests on port ${port1}`);
})