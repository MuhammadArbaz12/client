import React from 'react'
import "./Header.css"
import { COLORS } from '../../../Utils/style'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h3 style={{ color: COLORS.Primary }}>ARBAZ INVENTS</h3>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to={"/"} style={{
                            color: COLORS.TextColor
                        }} href="">Home</Link></li>
                        <li><Link to={"/product"} style={{
                            color: COLORS.TextColor
                        }} href="">Products</Link></li>
                        <li><Link to={"/newarrivals"} style={{
                            color: COLORS.TextColor
                        }} href="">New Arrivals</Link></li>
                        <li><Link to={"/about"} style={{
                            color: COLORS.TextColor
                        }} href="">About Us</Link></li>
                        <li><Link to={"/contact"} style={{
                            color: COLORS.TextColor
                        }} href="">Contact US</Link></li>
                    </ul>
                </div>
                <div className="auth">
                    <button className="login">Login</button>
                    <button className='Singup'>Create New account</button>
                </div>
            </nav>
        </>
    )
}


export default Header
