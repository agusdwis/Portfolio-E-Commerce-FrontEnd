import React, {Fragment} from "react";
import '../assets/styles/ProductPage.css';
import {Link} from "react-router-dom";

const CardCategory = () => {
    return(
        <Fragment>
            <div className="category-list">
                <div className="card card-detail mb-2">
                    <div className="justify-content-center my-4">
                        <h6 className="text-center mb-4">TOP RATED PRODUCT</h6>
                        <div className="card px-4 pt-1">
                            <div className="row mb-2">
                                <div className="col-4">
                                    <img width="60" height="90"
                                        src={require('../assets/images/product/book01.jpeg')} alt="Book"/>
                                </div>
                                <div className="col-8">
                                    <p>Judul Buku 1</p>
                                    <span> Rp. 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className="card px-4 pt-1">
                            <div className="row mb-2">
                                <div className="col-4">
                                    <img width="60" height="90"
                                         src={require('../assets/images/product/book01.jpeg')} alt="Book"/>
                                </div>
                                <div className="col-8">
                                    <p>Judul Buku 1</p>
                                    <span> Rp. 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className="card px-4 pt-1">
                            <div className="row mb-2">
                                <div className="col-4">
                                    <img width="60" height="90"
                                         src={require('../assets/images/product/book01.jpeg')} alt="Book"/>
                                </div>
                                <div className="col-8">
                                    <p>Judul Buku 1</p>
                                    <span> Rp. 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className="card px-4 pt-1">
                            <div className="row mb-2">
                                <div className="col-4">
                                    <img width="60" height="90"
                                         src={require('../assets/images/product/book01.jpeg')} alt="Book"/>
                                </div>
                                <div className="col-8">
                                    <p>Judul Buku 1</p>
                                    <span> Rp. 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div className="card px-4 pt-1">
                            <div className="row mb-2">
                                <div className="col-4">
                                    <img width="60" height="90"
                                         src={require('../assets/images/product/book01.jpeg')} alt="Book"/>
                                </div>
                                <div className="col-8">
                                    <p>Judul Buku 1</p>
                                    <span> Rp. 100.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-detail mb-2">
                    <div className="justify-content-center my-4">
                        <h6 className="text-center mb-4">CATEGORIES</h6>
                        <div className="card px-4 pt-1">
                            <Link to="#">Kategori 1</Link>
                            <Link to="#">Kategori 2</Link>
                            <Link to="#">Kategori 3</Link>
                            <Link to="#">Kategori 4</Link>
                            <Link to="#">Kategori 5</Link>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
};


export default CardCategory;