/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数：path 文件路径
 * 返回：promise 对象
 */

const fs = require("fs");

function mineReadFile(path) {
    const p = new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });

    p.then(
        (data) => {
            console.log(data.toString());
        },
        (err) => {
            console.log(err);
        }
    );
    return p;
}

mineReadFile("./resourse/context.txt");