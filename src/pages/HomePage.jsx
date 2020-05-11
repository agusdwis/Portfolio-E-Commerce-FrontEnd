import React, {Component, Fragment} from "react";
import NavBar from "../components/NavBarComp";
import FooterComp from "../components/FooterComp";
import HomeBanner from "../components/HomePage/HomeBannerComp";
import {HighlightBook} from "../components/HomePage/HighlightBookComp";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                {/*Navbar*/}
                <NavBar/>

                {/*Home Banner*/}
                <HomeBanner/>

                {/*Popular Book*/}
                <div className="container col-sm-12 popular-container">
                    <div className="column-inner">
                        <div className="divider-inner pt-3">
                            <h3 className="toko-section-title text-center">Popular Books</h3>
                        </div>
                        <div className="container mt-3">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 card-cascade mb-5">
                                    <HighlightBook/>
                                </div>
                                <div className="col-sm-3 col-md-3 card-cascade mb-5">
                                    <HighlightBook/>
                                </div>
                                <div className="col-sm-3 col-md-3 card-cascade mb-5">
                                    <HighlightBook/>
                                </div>
                                <div className="col-sm-3 col-md-3 card-cascade mb-5">
                                    <HighlightBook/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*New Book*/}
                <div className="container col-sm-12 new-container">
                    <div className="column-inner">
                        <div className="divider-inner pt-3">
                            <h3 className="toko-section-title text-center">New Books</h3>
                        </div>
                        <div className="container mt-3">
                            <div className="row">

                                <HighlightBook/>

                            </div>
                        </div>
                    </div>
                </div>

                {/*Best Seller Book*/}
                <div className="container col-sm-12 best_seller-container">
                    <div className="column-inner">
                        <div className="divider-inner pt-3">
                            <h3 className="toko-section-title text-center">Best Seller</h3>
                        </div>
                        <div className="container mt-3">
                            <div className="row">

                                <HighlightBook/>

                            </div>
                        </div>
                    </div>
                </div>

                {/*Promo Book*/}
                <div className="container col-sm-12 promo-container">
                    <div className="column-inner">
                        <div className="divider-inner pt-3">
                            <h3 className="toko-section-title text-center">Special Price</h3>
                        </div>
                        <div className="container mt-3">
                            <div className="row">

                                <HighlightBook/>

                            </div>
                        </div>
                    </div>
                </div>

                {/*Footer*/}
                <FooterComp/>
            </Fragment>
        );
    }
}

export default HomePage;