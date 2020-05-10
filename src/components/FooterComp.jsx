import React, {Fragment} from "react";
import {Link} from "react-router-dom"

// import static files
import "../assets/styles/FooterComp.css"

const FooterComp = () => {
    return(
        <Fragment>
            <footer className="my-footer font-small blue mt-5">
                {/*Contact*/}
                <div className="page-footer font-small blue-grey lighten-5">
                    <div className="container text-center text-md-left mt-5">
                        <div className="row mt-3 dark-grey-text">

                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                                <h6 className="text-uppercase font-weight-bold">About Us</h6>
                                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "100px"}}/>
                                    <p>We Are The Cheapest Online Bookstore on Earth!!.</p>

                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "100px"}}/>
                                <p>
                                    <i className="fas fa-home mr-3"/> Jalan Tidar No.23, Malang</p>
                                <p>
                                    <i className="fas fa-envelope mr-3"/> bookme@alterra.id</p>
                                <p>
                                    <i className="fas fa-phone mr-3"/> +62 123 456 789</p>
                            </div>

                            <div className="my-social col-md-3 col-lg-2 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Social Media</h6>
                                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "100px"}}/>
                                <div className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <Link to="#" className="btn-floating btn-fb mx-1">
                                            <img src={require("../assets/images/social-icon/facebook.png")} alt="Facebook"/>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="btn-floating btn-tw mx-1">
                                            <img src={require("../assets/images/social-icon/twitter.png")} alt="Twitter"/>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="btn-floating btn-gplus mx-1">
                                            <img src={require("../assets/images/social-icon/instagram.png")} alt="Instagram"/>
                                        </Link>
                                    </li>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase font-weight-bold">Payment</h6>
                                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "100px"}}/>
                                <div className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <Link to="#" className="btn-floating btn-fb mx-1">
                                            <img src={require("../assets/images/payment/payment-bca.png")} alt="BCA"/>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="btn-floating btn-tw mx-1">
                                            <img src={require("../assets/images/payment/payment-bni.png")} alt="BNI"/>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="btn-floating btn-gplus mx-1">
                                            <img src={require("../assets/images/payment/payment-bri.png")} alt="BRI"/>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="btn-floating btn-gplus mx-1">
                                            <img src={require("../assets/images/payment/payment-mandiri.png")} alt="Mandiri"/>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="btn-floating btn-gplus mx-1">
                                            <img src={require("../assets/images/payment/payment-dana.png")} alt="Dana"/>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#" className="btn-floating btn-gplus mx-1">
                                            <img src={require("../assets/images/payment/payment-go-pay.png")} alt="Gopay"/>
                                        </Link>
                                    </li>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/*Copyright*/}
                <div className="footer-copyright text-center py-3">
                    © 2020 Copyright: BOOK.me
                </div>

            </footer>
        </Fragment>
    )
};

export default FooterComp;