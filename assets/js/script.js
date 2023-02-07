let readXlsxFile = require("read-excel-file");
const filePath = "C:\\Users\\AgbenorkuD\\AECOM\\HS2 Birmingham Interchange D&B - General\\200 Project Control\\291 BIM\\HS2 BIS BIM Implementation.xlsx"

// var fs = require("fs");
// var data = '';
// var readStream = fs.createReadStream('data.txt');
// readStream.setEncoding('UTF8');
// readStream.on('data', function(bits) {
// data += bits;
// });
// readStream.on('end',function() {
// console.log("Data inside data.txt file is: ", data);
// });
// readStream.on('error', function(err) {
// console.log(err.stack);
// });
// console.log("JavaScript Program ends here!!");

const Excel = require('exceljs')
const workbook = new Excel.Workbook()
await workbook.xlsx.readXlsxFile(filePath)

// console.log(workbook)


// await workbook.xlsx.readFile(filePath);

$.get("testdata2.txt", successFn);

$(document).ready(function () {
    $("h1").css("color", "#0088ff");
});

function successFn(result) {
    console.log(result);
    // $("#ajaxContent").append(result);
}

// File path.
// readXlsxFile('HS2 BIS BIM Implementation.xlsx').then((rows) => {
//     // `rows` is an array of rows
//     // each row being an array of cells.
//     console.log(rows)
// })

