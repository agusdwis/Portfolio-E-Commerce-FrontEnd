import React, {Component, Fragment} from "react";
import NavBar from "../components/NavBarComp";
import FooterComp from "../components/FooterComp";

//import static files
import '../assets/styles/ProductPage.css';
import {BookSearch} from "../components/Search";
import {HighlightBook} from "../components/HomePage/HighlightBookComp";

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
                            <span>Home / Bookstore</span>
                        </div>
                    </div>
                </div>

                <BookSearch/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <div className="row">
                                <HighlightBook/>
                                <HighlightBook/>
                                <HighlightBook/>
                                <HighlightBook/>
                                <HighlightBook/>
                                <HighlightBook/>
                                <HighlightBook/>
                                <HighlightBook/>
                                <HighlightBook/>
                                <HighlightBook/>
                                <HighlightBook/>
                                <HighlightBook/>
                                <HighlightBook/>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <div className="category-list">
                                cek
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