
var express = require('express')
var app = express()
var cors = require('cors')
//Part dữ liệu từ client gửi về
var route=require('./component/entity/sanpham/sanpha')
const router = require('./component/entity/register/register')
app.use("",route)
app.use("",router)
app.get("/hello", function (req, res) {
    res.json("Hello anh dương nhá");
})
var service = app.listen(8000, function (host, port) {
    var host = service.address().address
    var port = service.address().port
    console.log("Chayy thanh cong nha", host, port);
})