import { BrowserRouter, Router, Route, NavLink, Routes } from "react-router-dom"
import Login from "../loginpage/login"
import Register from "../loginpage/register"
import Slideshow from "./slideshow"
import ListProduct from "../../product/listproduct"
import Nav from "./menu"
//Page của khách hàng
const Homepage = () => {
    return (
        <div className="homepage">
            <BrowserRouter>
                <Nav />
                <Slideshow />
                <Routes>
                    <Route path="/home" element={<Login />} />
                    <Route path="/news" element={<Register />} />
                    <Route path="/store" element={<Login />} />
                    <Route path="/thanhtoan" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Homepage