var express = require('express')
var conn=require('../../../config/conig')
const { query } = require('../../../config/conig')
var router = express.Router()
//Lấy thông tin tất cả khách hàng
router.route('/getCustomer').get(function (req, res) {
    var sql = "select * from khachhangs"
    conn.query(sql, function (err, khachhangs) {
        if (err) {
            res.status(400).json("Lỗi lấy dữ liệu nhá")
        } else {
            res.status(200).json(khachhangs)
        }
    })
})
//Thêm khách hàng vào trong hệ thống
router.route('/addCustomer').post(function (req, res) {
    var maKH = req.body.maKH
    var tenKh = req.body.tenKh
    var diaChi = req.body.diaChi
    var sdt = req.body.sdt
    var loaiKH = req.body.loaiKH
    var data = req.body
    var sql = "insert into khachhangs set ?"
    conn.query(sql, data, function (err, khachhangs) {
        if (err) {
            res.status(400).json("Lỗi lấy dữ liệu nhe")
        } else {
            res.status(200).json(khachhangs)
        }
    })
})
//Tìm khách hàng theo id
router.route("/getCustomer/:maKH").get(function (req, res) {
    var maKH = req.params.maKH
    var sql = "select * from khachhangs where maKH=" + maKH
    conn.query(sql, function (err, khachhangs) {
        if (err) {
            res.status(400).json("Lỗi lấy dữ liẹu nhá")
        } else {
            res.status(200).json(khachhangs)
        }
    })
})
//Cập nhật thông tin khách hàng
router.route("/updateCustomer/:maKH").post(function (req, res) {
    var maKH = router.param.maKH
    var tenKh = req.body.tenKh
    var diaChi = req.body.diaChi
    var sdt = req.body.sdt
    var loaiKH = req.body.loaiKH
    var sql = `update khachhangs set tenKh=${tenKh} diaChi=${diaChi} sdt=${sdt} loaiKH=${loaiKH} where maKH=${maKH}`
    conn.query(sql, function (err, khachhangs) {
        if (err) {
            res.status(200).json("Lỗi lấy thông tin khách hàng")
        } else {
            res.status(200).json(khachhangs)
        }
    })
})
//Xoá khách hàng khi biết id của Khách hàng
router.route('/deleteCustomer/:maKH').post(function (req, res) {
    var maKH = req.params.maKH
    var sql = "delete * from khachhangs where maKH=" + maKH
    conn.query(sql, function (err, khachhangs) {
        if (err) {
            res.status(400).json("Lỗi xoa khách hàng")
        } else {
            res.status(200).json(khachhangs)
        }
    })
})
module.exports=router