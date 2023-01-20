import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import './layout.css'

const Layout = () =>{
    return (
        <>
            <Navbar/>
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;