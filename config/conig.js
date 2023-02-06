var mysql=require('mysql')
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'khanhly1',
    database: 'BanHang'
})
conn.connect(err => {
    if (err) throw err
    console.log("Kết nối cơ sở dữ liệu thành công nhá!!");
})
module.exports=conn