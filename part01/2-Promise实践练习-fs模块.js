const fs = require("fs");
//回调函数
// fs.readFile("./resourse/context.txt", (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data.toString());
// });

//Promise

let p = new Promise((resolve, reject) => {
    fs.readFile("./resourse/context.txt", (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});

p.then(
    (data) => {
        console.log(data.toString());
    },
    (err) => {
        console.log(err.toString());
    }
);