//print "hello world"
console.log("hello world from here");

const generator = require ("generate-password");

const nodemailer = require("nodemailer");

//create server 3000 and run in local host
const http = require("node:http");

const server = http.createServer((req, res) =>{
  res.writeHead(200)
  res.end(" Hello Node");
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});

//const fs = require("node:fs");

//const fileContent = fs.readFileSync("./file.txt", "utf-8");
//console.log(fileContents);

//file system 
var fs = require("fs");

fs.readFile('welcome.txt', function (err, data) {
//this is the callBack function
   if (err) return console.error(err);
   console.log(data.toString());
});

//Password-Generator

const password = generator.generate({
  length: 10,
  numbers: true
});
 
console.log(password)

//nodeMailer

const transporter = nodemailer.createTransport({
  host: "gmail.com",
  port: 3000,
  auth: {
    user: `oluwadamilolastowe2001@gmail.com`,
    pass: `knpnangkfmfaywrh`
  }
});



