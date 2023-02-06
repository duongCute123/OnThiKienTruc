import React from "react"
const Register = () => {
    const list = {
        username: "",
        matkhau: "",
        email: "",
        sdt: ""
    }
    const [forms, setForm] = React.useState(list)
    const { username, matkhau, email, sdt } = forms
    return (
        <div className="register">
            <h1>Trang đăng ký tài khoản</h1>
            <form action="" method="post">
                <div className="form-group">
                    <label htmlFor="username">Nhập tên đăng nhập</label>
                    <input type="text" name="username" value={username} placeholder="Vui lòng nhập tên đăng nhập" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="matkhau">Nhập mật khẩu</label>
                    <input type="password" name="matkhau" value={matkhau} placeholder="Vui lòng nhập mật khẩu" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Nhập tên đăng nhập</label>
                    <input type="text" name="email" value={email} placeholder="Vui lòng nhập địa chỉ email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="sdt">Nhập tên đăng nhập</label>
                    <input type="text" name="sdt" value={sdt} placeholder="Vui lòng nhập số điện thoại" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor=""></label>
                    <input type="button" value="Đăng Ký"/>
                    <div className="help-register">
                        <p>Bạn đã có tài khoản? <a href="#">Đăng nhập nó!!</a></p>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Register