import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid ms-4">
                <Link className="navbar-brand" to="/">Online-<span className="text-danger">News</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav collapse navbar-collapse ms-5" id="navbarSupportedContent">
                    <ul className="nav navbar-nav text-center">
                        <li className="nav-item">
                            <Link className="nav-link btn-outline-secondary" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link btn-outline-secondary" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link btn-outline-secondary" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link btn-outline-secondary" to="/general">General</Link></li>
                        <li className="nav-item"><Link className="nav-link btn-outline-secondary" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link btn-outline-secondary" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link btn-outline-secondary" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link btn-outline-secondary" to="/technology">Technology</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

}
