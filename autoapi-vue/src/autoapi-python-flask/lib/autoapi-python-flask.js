'use strict';

const fs = require('fs');
const path = require('path');




module.exports = class PythonFlaskProduct {

    constructor(opts = {}) {
        this.dir = opts.dir || process.cwd();
        console.log("Autoapi.constructor.dir:", this.dir)
    }

    test() {
        console.log("createProduct")
        console.log(path)
        console.log(fs)
        // 判断是否已有python文件夹
        if (!fs.existsSync(this.dir)) return {
            
        };
 
        console.log("isExists")
        // 创建文件夹

        // git clone 


    }


}



