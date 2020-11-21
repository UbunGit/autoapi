'use strict';
const console = require('console');
const fs = require('fs');

 test(){
  fs.open('/文件.txt', 'r', (err, fd) => {
    if (err) {
        console.log("error")
    }else{
      console.log("ok")
    }
  
  });
}
