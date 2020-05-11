import React, {Fragment} from "react";
import NavBar from "../components/NavBarComp";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {BookSearch} from "../components/Search";

import '../assets/styles/ProductPage.css';
import BookDetail from "../components/BookDetailComp";
import {HighlightBook} from "../components/HomePage/HighlightBookComp";
import CardCategory from "../components/CardCategoryComp";
import FooterComp from "../components/FooterComp";

const ProductDetail = () => {
    return(
        <Fragment>
            <div className="navbar-page">
                <NavBar/>
            </div>

            <div className="product-page wrapper">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Book Overview</h1>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" to="/">
                                Home
                            </Link>
                            <Link color="inherit" to="/">
                                Produk
                            </Link>
                            <Typography color="textPrimary">Nama Produk</Typography>

                        </Breadcrumbs>
                    </div>
                </div>
            </div>

            <BookSearch/>

            <div className="detail-produk bg-success">
                <BookDetail/>
            </div>

            <div className="suggested-product bg-dark">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 pt-5">
                            <h1 className="text-center mb-5 text-light">Produk Rekomendasi</h1>
                            <div className="row">
                                <div className="col-md-3 col-sm-12 mb-4">
                                    <HighlightBook/>
                                </div>
                                <div className="col-md-3 col-sm-12 mb-4">
                                    <HighlightBook/>
                                </div>
                                <div className="col-md-3 col-sm-12 mb-4">
                                    <HighlightBook/>
                                </div>
                                <div className="col-md-3 col-sm-12 mb-4">
                                    <HighlightBook/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="related-product bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 pt-5">
                            <h1 className="text-center mb-5 text-dark">Produk Terkait</h1>
                            <div className="row">
                                <div className="col-md-3 col-sm-12 mb-4">
                                    <HighlightBook/>
                                </div>
                                <div className="col-md-3 col-sm-12 mb-4">
                                    <HighlightBook/>
                                </div>
                                <div className="col-md-3 col-sm-12 mb-4">
                                    <HighlightBook/>
                                </div>
                                <div className="col-md-3 col-sm-12 mb-4">
                                    <HighlightBook/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComp/>
        </Fragment>
    )
};

export default ProductDetail;