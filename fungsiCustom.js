// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  arrString = [];

  fs.readFile(file1, { encoding: "utf8" }, (err, data1) => {
    if (err) {
      fnCallback(err, null);
    } else {
      let temp = JSON.parse(data1).message.split(" ");
      arrString.push(temp[1]);
    }

    fs.readFile(file2, { encoding: "utf8" }, (err, data2) => {
      if (err) {
        fnCallback(err, null);
      } else {
        let temp = JSON.parse(data2)[0].message.split(" ");
        arrString.push(temp[1]);
      }

      fs.readFile(file3, { encoding: "utf8" }, (err, data3) => {
        if (err) {
          fnCallback(err, null);
        } else {
          let temp = JSON.parse(data3)[0].data.message.split(" ");
          arrString.push(temp[1]);

          fnCallback(null, arrString);
        }
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
