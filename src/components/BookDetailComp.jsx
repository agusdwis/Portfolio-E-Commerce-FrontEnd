import React, {Fragment} from "react";
import '../assets/styles/ProductPage.css';
import ReviewBook from "./ReviewComp";

const BookDetail = (props) => {
    return(
    <Fragment>
        <div className="container py-5">
            <div className="card detail-card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-5">
                            <div className="card mt-5 d-flex align-items-center">
                                <div className="tab-pane active" id="pic-1">
                                    <img width="300" height="350" className="img-fluid"
                                         src={require('../assets/images/product/book-23-250x333.jpg')}
                                         sizes="(max-width: 300px) 100vw, 300px" alt="Our Product"/>
                                </div>
                            </div>

                        </div>
                        <div className="details col-md-7">
                            <h3 className="product-title pt-5">{props.title}</h3>
                            <div className="rating">
                                <div className="stars">
                                    <span className="fa fa-star checked"> </span>
                                    <span className="fa fa-star checked"> </span>
                                    <span className="fa fa-star checked"> </span>
                                    <span className="fa fa-star"> </span>
                                    <span className="fa fa-star"> </span>
                                </div>
                                <span className="review-no">41 reviews</span>
                            </div>
                            <p className="product-description">
                                What can you do to save money with online shopping? You may be wondering if finding coupons and sales is time consuming. If you aren’t into that, there are other options. You simply need to heed the tips in this piece and act on them.
                            </p>

                            <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                                <div className="card-header d-flex justify-content-between">
                                    <del><span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">Rp. </span>100.000</span></del>

                                    <ins><span className="woocommerce-Price-amount amount"><span
                                        className="woocommerce-Price-currencySymbol">Rp. </span>{props.price}</span></ins>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title text-center">{props.stock} in stock</h6>
                                    <button type="submit" className="btn btn-primary btn-block">
                                        <i className="fa fa-plus"/> &nbsp;
                                        add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-5">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                   aria-controls="home" aria-selected="true">Deskripsi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                   aria-controls="profile" aria-selected="false">Review</a>
                            </li>
                        </ul>
                        <div className="tab-content mb-5" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                 aria-labelledby="home-tab">
                                <p className='p-3'>{props.desc}</p>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel"
                                 aria-labelledby="profile-tab">
                                <p className='p-3'>1 review untuk judul buku ini</p>
                                <ReviewBook/>
                                <ReviewBook/>
                                <ReviewBook/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
};

export default BookDetail;