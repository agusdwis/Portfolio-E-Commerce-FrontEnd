import React, {Fragment} from "react";
import '../assets/styles/ProductPage.css';
import '../assets/styles/BookDetailComp.css';
import ReviewBook from "./ReviewComp";

const BookDetail = (props) => {
    return(
    <Fragment>
        <div className="container py-5">
            <div className="card detail-card">
                <div className="container-fliud">

                    <div className="card">
                        <div className="row">
                            <aside className="col-sm-5 border-right">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap">
                                        <div><a href="#"><img src={props.url_image} alt='Book Image'/></a>
                                        </div>
                                    </div>

                                    <div className="img-small-wrap">
                                        <div className="item-gallery"><img src={props.url_image} alt='#'/></div>
                                        <div className="item-gallery"><img src={props.url_image} alt='#'/></div>
                                        <div className="item-gallery"><img src={props.url_image} alt='#'/></div>
                                        <div className="item-gallery"><img src={props.url_image} alt='#'/></div>
                                    </div>

                                </article>

                            </aside>
                            <aside className="col-sm-7">
                                <article className="card-body p-5">
                                    <h3 className="title mb-3">{props.title}</h3>

                                    <p className="price-detail-wrap">
                                        <span className="price h3 text-warning">
                                            <span className="currency">IDR Rp. </span><span className="num">{props.price}</span>
                                        </span>
                                    </p>
                                    <dl className="item-property">
                                        <dt>Description</dt>
                                        <dd><p>{props.desc} </p></dd>
                                    </dl>
                                    <dl className="param param-feature">
                                        <dt>Penulis</dt>
                                        <dd>{props.penulis}</dd>
                                    </dl>

                                    <dl className="param param-feature">
                                        <dt>Penerbit</dt>
                                        <dd>{props.penerbit}</dd>
                                    </dl>

                                    <dl className="param param-feature">
                                        <dt>Sold</dt>
                                        <dd>{props.sold}</dd>
                                    </dl>

                                    <dl className="param param-feature">
                                        <dt>Stock</dt>
                                        <dd>{props.stock}</dd>
                                    </dl>

                                    <dl className="param param-feature">
                                        <dt>Delivery</dt>
                                        <dd>From Malang, East Java, Indonesia</dd>
                                    </dl>


                                    <hr/>
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <dl className="param param-inline">
                                                    <dt>Quantity:</dt>
                                                    <dd>
                                                        <select className="form-control form-control-sm"
                                                                style={{width:'70px'}}>
                                                            <option> 1</option>
                                                            <option> 2</option>
                                                            <option> 3</option>
                                                            <option> 4</option>
                                                            <option> 5</option>
                                                        </select>
                                                    </dd>
                                                </dl>

                                            </div>

                                            <div className="col-sm-7">
                                                <dl className="param param-inline">
                                                    <dt>Assurance:</dt>
                                                    <dd>
                                                        <label className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio"
                                                                   name="inlineRadioOptions" id="inlineRadio2"
                                                                   value="option2"/>
                                                                <span className="form-check-label">Yes</span>
                                                        </label>
                                                        <label className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio"
                                                                   name="inlineRadioOptions" id="inlineRadio2"
                                                                   value="option2"/>
                                                                <span className="form-check-label">No</span>
                                                        </label>
                                                    </dd>
                                                </dl>

                                            </div>

                                        </div>

                                        <hr/>
                                            <a href="#" className="btn btn-lg btn-primary text-uppercase"> Buy now </a>
                                            <a href="#" className="btn btn-lg btn-outline-primary text-uppercase"><i className="fas fa-shopping-cart"/> Add to cart </a>
                                </article>

                            </aside>

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