import React, {Fragment} from "react";
import {Link} from "react-router-dom"
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import static files
import "../assets/styles/NavBarComp.css"
import {Search} from "./Search";
import Avatar from "@material-ui/core/Avatar";

const NavBar = (props, postLogout) => {
    postLogout = async () => {
        localStorage.removeItem('is_login');
        localStorage.removeItem('avatar');
        localStorage.removeItem('token');
        await props.doSignOut();
    };

    const login = localStorage.getItem('is_login');
    const avatar = localStorage.getItem('avatar');
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
                                    <Link to="#" className="dropdown-item">Fiction</Link>
                                    <Link to="#" className="dropdown-item">Inspiration</Link>
                                    <Link to="#" className="dropdown-item">Programming</Link>
                                    <Link to="#" className="dropdown-item">Life Style</Link>
                                    <Link to="#" className="dropdown-item">Bussiness</Link>
                                </div>
                            </div>
                        </div>

                        <Search/>

                        {props.login || login?
                            <div className="navbar-nav mx-1">
                                <Link to={'/profile'}><Avatar alt="Remy Sharp" src={avatar}/></Link>
                                <Link onClick={()=>postLogout()} to="#" className="nav-item nav-link">KELUAR</Link>
                            </div>
                            :
                            <div className="navbar-nav mx-1">
                                <Link to="/login" className="nav-item nav-link">MASUK</Link>
                                <Link to="/register" className="nav-item nav-link">DAFTAR</Link>
                            </div>
                        }
                        <div className="navbar-nav">
                            <Link to="/cart" className="nav-item nav-link">
                                {props.login || login ?
                                    <Badge badgeContent={props.trans.total_qty} color="error">
                                        <ShoppingCartIcon/>
                                    </Badge>
                                    :
                                    <Badge badgeContent={0} color="error">
                                        <ShoppingCartIcon/>
                                    </Badge>
                                }
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
};

export default NavBar;