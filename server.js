// const livereload = require("livereload")
// const connectLivereload = require("connect-livereload");
const express = require('express')
const cors = require('cors')
// const path = require('path')
let Excel = require("exceljs");



// const publicDirectory = path.join(__dirname, 'public')

// let liveReloadServer = livereload.createServer();
// liveReloadServer.watch(publicDirectory);

// // ping browser on Express boot, once browser has reconnected and handshaken
// liveReloadServer.server.once("connection", () => {
//     setTimeout(() => {
//       liveReloadServer.refresh("/");
//     }, 100);
//   });

const app = express();
app.use(cors());

// monkey patch every served HTML so they know of changes
// app.use(connectLivereload());

app.get('/', async (req, res) => {
    res.send("<h1>Hello World!</h1>")


    // const filePath = "C:\\Users\\AgbenorkuD\\AECOM\\HS2 Birmingham Interchange D&B - General\\200 Project Control\\291 BIM\\HS2 BIS BIM Implementation.xlsx"
    const filePath = "HS2 BIS BIM Implementation.xlsx"

    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filePath);

    
    // fetch sheet by name
    const worksheet = workbook.getWorksheet('Model Element and Layer Table');

    // console.log(worksheet.getCell('F4').value)
    const rows = worksheet.getRows(4, 1000)
    console.log(rows)

})

app.get("/contact", function (req, res) {
    res.send("Contact me at: dodzi@wndowslive.com")
})

app.get("/about", function (req, res) {
    res.send("My name is dodzi agbenorku and I am the owner of this page")
})


app.listen(3000, function () {
    console.log("Server started on port 3000")
})

