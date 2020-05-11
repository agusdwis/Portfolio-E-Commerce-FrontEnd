import React, {Component, Fragment, useState} from "react";
import {Link} from 'react-router-dom';
import NavBar from "../components/NavBarComp";
import FooterComp from "../components/FooterComp";

//import static files
import '../assets/styles/ProductPage.css';
import {BookSearch} from "../components/Search";
import {HighlightBook} from "../components/HomePage/HighlightBookComp";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import CardCategory from "../components/CardCategoryComp";

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
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-12 pt-5">
                                <CardCategory/>
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