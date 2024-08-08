import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Maincontext from '../Context/Context'

const Header = () => {
    const { fav } = useContext(Maincontext)
    return (
       
        <header>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container">

                    <div className="collapse navbar-collapse" id="navbarText">
                        <Link className="navbar-brand navbar-nav me-auto mb-2 mb-lg-0" to="/" >Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <span className="navbar-text">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Product">Products
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/WishList">WishList <sup>
                                    {
                                        fav.length >= 0 &&
                                        (
                                            <span>{fav.length}</span>
                                        )
                                    }
                                    </sup></Link>
                                   
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Admin/DashBoard">Admin</Link>
                                </li>
                            </ul>
                        </span>

                    </div>
                </div>
            </nav>
            <hr />

        </header>
    )
}

export default Header