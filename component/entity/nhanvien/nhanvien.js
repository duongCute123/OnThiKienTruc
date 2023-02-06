var express=require("express")
var conn=require('../../../config/conig')
var bodyParse = require("body-parser")
const { json } = require('body-parser')
var cors = require('cors')
var router=express.Router()
//Lấy thông tin tất cả sản phẩm
router.route("/getNhanVien").get(function (req,res) {
    var sql="select * from nhanviens"
    conn.query(sql,function (err,product) {
        if (err) {
            res.status(400).json(err)
        }else{
            res.status(200).json(product)
        }
    })
})
//Them san phẩm   
router.route('/addNhanVien').post(function (req,res) {
    var data=req.body
    console.log(data);
    var sql = "insert into nhanviens set ?"
    conn.query(sql,data,function (err,product) {
        if (err) {
            res.status(400).json(err)
            console.log(err);
        }else{
            res.status(200).json(product)
            console.log(product);
        }
    })
})
// Tìm sản phẩm theo id
router.route("/getProduct/:maNV").get(function (req,res) {
    var maSanPham=req.params.maSanPham
    var sql="select * from nhanviens where maSanPham="+maSanPham
    conn.query(sql,function (err,product) {
        if (err) {
            res.status.json("Lỗi tìm san phẩm nhá")
            console.log(err);
        }else{
            res.status(200).json(product)
            console.log("Tìm thành công");
        }
    })
})
// Cập nhật sản phẩm theo id
router.route("/updateProduct").post(function (req,res) {
    var maSanPham=req.params.maSanPham
    var sql=`update sanphams set tenSanPham=${req.body.tenSanPham},nhaSanXuat=${req.body.nhaSanXuat},loaiSanPham=${req.body.loaiSanPham},thongTinSanPham=${req.body.thongTinSanPham},soLuong=${req.body.soLuong},gia=${req.body.gia} where maSanPham=${maSanPham}`
    conn.query(sql,function (err,product) {
        if (err) {
            res.status(400).json("Lôilaays dữ liệu")
        }else{
            res.status(200).json(product)
        }
    })
})
//Xoá sản phẩm
router.route("/deleteProduct/:maSanPham").delete(function (req,res) {
    var maSanPham=req.params.maSanPham
    var sql="delete * from sanphams where maSanPham="+maSanPham
    conn.query(sql,function (err,product) {
        if (err) {
            res.json("Lỗi lây sản phẩm")
            console.log(err);
        }else{
            res.status(200).json(product)
        }
    })
})
//Tính tổng các sản phẩm có trong database
// router.route("/getTotal").get(function (req,res) {
//     var gia=req.body.gia
//     var sql="select * from "
// })
module.exports=router