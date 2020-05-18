import React, {Fragment} from "react";
import '../assets/styles/ProductPage.css';
import '../assets/styles/BookDetailComp.css';
import ReviewBook from "./ReviewComp";
import {Link} from "react-router-dom";


const BookDetail = (props, handleClick) => {
    handleClick=(e)=>{
        e.preventDefault();
        props.postCart(e.target.value);
    };

    return(
    <Fragment>
        <div className="container py-5">
            <div className="card detail-card">
                <div className="container-fliud">

                    <div className="card">
                        <div className="row">
                            <aside className="col-sm-5 border-right">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap text-center">
                                        <div><a href="."><img src={props.url_image} alt='Book'/></a>
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
                                            <span className="currency">Rp. </span><span className="num">{props.price}</span>
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
                                            <div className="col-sm-12">
                                                <div className="form-group mx-sm-3 mb-2 text-center">
                                                    <label htmlFor="inputPassword2" className="sr-only">Number Order</label>
                                                    <input name="order_qty" onChange={(e) => props.postOrder(e)} type="number" className="form-control" id="inputPassword2"
                                                           placeholder="Number of Order"/>
                                                </div>
                                            </div>
                                        </div>

                                        <hr/>
                                        <div className="d-flex justify-content-between">
                                            <Link to="/cart" className="btn btn-lg btn-primary text-uppercase"> Buy now </Link>
                                            <button onClick={e => handleClick(e)} value={props.book_id} type="submit" className="btn btn-outline-primary">Add to cart</button>
                                        </div>
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