import React, {Fragment} from "react";

// import static files
import "../../assets/styles/HomePage.css";
import Background from '../../assets/images/slider/slider-03.jpg'
import {Link} from "react-router-dom";

const HomeBanner = () => {
    return(
        <Fragment>
            <div className="page w-100">
                <div className="jumbotron card card-image img-fluid d-flex align-items-center justify-content-center"
                     style={{backgroundImage: "url("+ Background+")"}}>
                    <div className="text-white text-center">
                        <div>
                            <h2 className="card-title h1-responsive pt-3 mb-5 font-bold">Cheapest OFFLINE Bookstore on Earth!!</h2>
                            <Link to="/book" className="btn btn-lg btn-success purple-gradient btn-rounded mb-4"><i className="fas fa-book left"/> Go Shop</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default HomeBanner;
