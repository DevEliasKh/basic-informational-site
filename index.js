const fs = require("node:fs");
const http = require("http");
const url = require("url");
const path = require("path");

const PORT = process.env.PORT || 8080;

let index;
fs.readFile("./index.html", "utf8", (err, data) => {
   if (err) {
      console.log(err);
      return;
   }
   index = data;
});

let about;
fs.readFile("./about.html", "utf8", (err, data) => {
   if (err) {
      console.log(err);
      return;
   }
   about = data;
});

let contact;
fs.readFile("./contact-me.html", "utf8", (err, data) => {
   if (err) {
      console.log(err);
      return;
   }
   contact = data;
});

let error;
fs.readFile("./404.html", "utf8", (err, data) => {
   if (err) {
      console.log(err);
      return;
   }
   error = data;
});

const server = http.createServer((req, res) => {
   switch (req.url) {
      case "/":
         res.write(index);
         res.end();
         break;
      case "/about":
         res.write(about);
         res.end();
         break;
      case "/contact-me":
         res.write(contact);
         res.end();
         break;
      default:
         res.write(error);
         res.end();
         break;
   }
});
server.listen(PORT, () => {
   console.log(`server is running on ${PORT}`);
});
