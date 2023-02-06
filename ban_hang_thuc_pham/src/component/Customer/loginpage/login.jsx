import { useState,useEffect } from "react"
import { NavLink } from "react-router-dom"
const Login=()=>{
    const list={
        ten:"",
        matkhau:"",
    }
    const [forms,setForm]=useState(list)
    const {ten,matkhau}=forms
    return(
        <div className="loginpage containner-fluid">
            <h1>Login</h1>
            <form action="" method="post">
                <div className="form-group">
                    <label htmlFor="ten">Nhập tên đăng nhập</label>
                    <input type="text" name="username" value={ten} placeholder="Vui lòng nhập tên tài khoản" id="username" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="passworks">Nhập mật khẩu</label>
                    <input type="password" name="matkhau" placeholder="Vui lòng nhập mật khẩu đăng nhập" value={matkhau} id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor=""></label>
                    <input type="button" value="Đăng Nhập" className="btn btn-default"/>
                    <div className="help">
                        <p>Bạn chưa có tài khoản <NavLink to={"/register"}>Tạo nó</NavLink> </p>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login