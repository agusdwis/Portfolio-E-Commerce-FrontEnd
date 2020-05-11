import React, {Fragment} from "react";
import {Link} from "react-router-dom"
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import static files
import "../assets/styles/NavBarComp.css"
import {Search} from "./Search";

const NavBar = () => {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark scrolling-navbar ">
                <div className="container">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link active">HOME</Link>
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">KATEGORI</Link>
                                <div className="dropdown-menu">
                                    <Link to="#" className="dropdown-item">Kategori A</Link>
                                    <Link to="#" className="dropdown-item">Kategori B</Link>
                                    <Link to="#" className="dropdown-item">Kategori C</Link>
                                    <Link to="#" className="dropdown-item">Kategori D</Link>
                                    <Link to="#" className="dropdown-item">Kategori E</Link>
                                    <Link to="#" className="dropdown-item">Kategori F</Link>
                                </div>
                            </div>
                        </div>

                        <Search/>

                        <div className="navbar-nav">
                            <Link to="/login" className="nav-item nav-link">MASUK</Link>
                            <Link to="/register" className="nav-item nav-link">DAFTAR</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link to="#" className="nav-item nav-link">
                                <Badge badgeContent={1} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
};

export default NavBar;