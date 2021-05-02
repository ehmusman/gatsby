import React from 'react'
import { Link } from "gatsby"
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container">
                <Link to="/" className="navbar-brand">Blog SIte</Link>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link">Blogs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
