import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import NavBar from "../components/NavBarComp";
import FooterComp from "../components/FooterComp";

//import static files
import '../assets/styles/ProductPage.css';
import {BookSearch} from "../components/Search";
import {HighlightBook} from "../components/HomePage/HighlightBookComp";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

class ProductPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="navbar-page">
                    <NavBar/>
                </div>

                <div className="product-page wrapper">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Bookstore</h1>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" to="/">
                                    Home
                                </Link>
                                <Typography color="textPrimary">Bookstore</Typography>
                            </Breadcrumbs>
                        </div>
                    </div>
                </div>

                <BookSearch/>

                <div className="container-fluid p-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-sm-12 pt-5">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-4 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-12 pt-5">
                                <div className="category-list">
                                    <div className="card">
                                        <div className="d-flex justify-content-center my-4">
                                            <div className="w-75">
                                                <input type="range" className="custom-range" id="customRange11" min="0"
                                                       max="200"/>
                                            </div>
                                            <span className="font-weight-bold text-primary ml-2 valueSpan2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterComp/>
            </Fragment>
        );
    }

}

export default ProductPage;