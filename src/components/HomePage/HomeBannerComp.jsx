import React, {Fragment} from "react";
import "../../assets/styles/style.css";
import {Link} from "react-router-dom";

const HomeBanner = () => {
    return(
        <Fragment>
            <div className="section-1">
                <div className="container-fluid mt-5">
                    <div className="col-12 mb-4">
                        <div className="container">
                            <div className="row">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"> </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"> </li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"> </li>
                                </ol>
                                <div className="carousel-inner img-fluid">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100"
                                             src={require("../../assets/images/banner/Banner01.jpg")} alt="First slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100"
                                             src={require("../../assets/images/banner/Banner02.jpg")} alt="Second slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100"
                                             src={require("../../assets/images/banner/Banner03.jpg")} alt="Third slide"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3 mx-auto">
                            <Link to="#" className="btn-floating btn-fb mx-1">
                                <img src={require("../../assets/images/higlight/1.buku_baru.png")} alt="Baru"/>
                            </Link>
                        </div>
                        <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3 mx-auto">
                            <Link to="#" className="btn-floating btn-fb mx-1">
                                <img src={require("../../assets/images/higlight/3.buku_pilihan.png")} alt="Pilihan"/>
                            </Link>
                        </div>
                        <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3 mx-auto">
                            <Link to="#" className="btn-floating btn-fb mx-1">
                                <img src={require("../../assets/images/higlight/2.buku_best_seller.png")} alt="Best Seller"/>
                            </Link>
                        </div>
                        <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3 mx-auto">
                            <Link to="#" className="btn-floating btn-fb mx-1">
                                <img src={require("../../assets/images/higlight/3.buku_promo.png")} alt="Promo"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default HomeBanner;