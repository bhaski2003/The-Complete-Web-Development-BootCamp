// jshint eversion:6

// RUN THIS FILE BY - node NODE.js


const fs = require("fs");

fs.copyFileSync("file1.txt", "file2.txt");
// even if f2 isnt existing it'll create itt

