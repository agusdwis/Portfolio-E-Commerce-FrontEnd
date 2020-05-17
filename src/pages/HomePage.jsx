import React, {Component, Fragment} from "react";
import NavBar from "../components/NavBarComp";
import FooterComp from "../components/FooterComp";
import HomeBanner from "../components/HomePage/HomeBannerComp";
import {HighlightBook} from "../components/HomePage/HighlightBookComp";
import {changeInputUser, closeAlert, doSignOut} from "../stores/actions/userAction";
import {getAllProduct, getPopularProduct, getNewProduct, getPromoProduct, getLimitedProduct} from "../stores/actions/bookAction";
import {doGetTransaction} from "../stores/actions/transactionAction";

import {connect} from "react-redux";
import Separator from "../components/Separator";

class HomePage extends Component {
    componentDidMount= async () => {
        const token = localStorage.getItem("token");
        this.props.doGetTransaction(token);

        this.props.getAllProduct();
        this.props.getPopularProduct();
        this.props.getNewProduct();
        this.props.getPromoProduct();
        this.props.getLimitedProduct();

    };

    handleClick=(e)=>{
        e.preventDefault();
        this.props.history.push("/product/"+ e.target.value);
    };

    render() {
        const PopularBook = this.props.popular_book;
        const NewBook = this.props.new_book;
        const PromoBook = this.props.promo_book;
        const LimitedBook = this.props.limited_book;
        const AllBook = this.props.all_book;
        return (
            <Fragment>
                {/*Navbar*/}
                <NavBar {...this.props}/>

                {/*Home Banner*/}
                <HomeBanner/>
                <Separator/>

                {/*Popular Book*/}
                <div className="container col-sm-12 popular-container">
                    <div className="column-inner">
                        <div className="divider-inner pt-3">
                            <h3 className="toko-section-title text-center">Popular Books</h3>
                        </div>
                        <div className="container mt-3">
                            <div className="row">
                                {PopularBook.slice(0,4).map((el, index) => (
                                    <div key={index} className="col-sm-3 col-md-3 card-cascade mb-5 pb-5 card-product" >
                                        <HighlightBook title={el.title} penulis={el.penulis}
                                                penerbit={el.penerbit} price={el.price} category={el.category}
                                                url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                                promo={el.promo} discount={el.discount} limited={el.limited} status={el.status} book_id={el.id}
                                        />
                                        <div className="button d-flex justify-content-center">
                                            <button onClick={e => this.handleClick(e)} value={el.id} type="button" className="btn btn-primary">Detail</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Separator/>

                {/*New Book*/}
                <div className="container col-sm-12 new-container">
                    <div className="column-inner">
                        <div className="divider-inner pt-3">
                            <h3 className="toko-section-title text-center">New Books</h3>
                        </div>
                        <div className="container mt-3">
                            <div className="row">
                                {NewBook.slice(0,4).map((el, index) => (
                                    <div key={index} className="col-sm-3 col-md-3 card-cascade mb-5 pb-5 card-product">
                                        <HighlightBook title={el.title} penulis={el.penulis}
                                                       penerbit={el.penerbit} price={el.price} category={el.category}
                                                       url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                                       promo={el.promo} discount={el.discount} limited={el.limited} status={el.status} book_id={el.id}
                                        />
                                        <div className="button d-flex justify-content-center">
                                            <button onClick={e => this.handleClick(e)} value={el.id} type="button" className="btn btn-primary">Detail</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Separator/>

                {/*Best Seller Book*/}
                <div className="container col-sm-12 best_seller-container">
                    <div className="column-inner">
                        <div className="divider-inner pt-3">
                            <h3 className="toko-section-title text-center">Best Seller</h3>
                        </div>
                        <div className="container mt-3">
                            <div className="row">
                                {AllBook.slice(0,4).map((el, index) => (
                                    <div key={index} className="col-sm-3 col-md-3 card-cascade mb-5 pb-5 card-product">
                                        <HighlightBook title={el.title} penulis={el.penulis}
                                                       penerbit={el.penerbit} price={el.price} category={el.category}
                                                       url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                                       promo={el.promo} discount={el.discount} limited={el.limited} status={el.status} book_id={el.id}
                                        />
                                        <div className="button d-flex justify-content-center">
                                            <button onClick={e => this.handleClick(e)} value={el.id} type="button" className="btn btn-primary">Detail</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Separator/>

                {/*Promo Book*/}
                <div className="container col-sm-12 promo-container">
                    <div className="column-inner">
                        <div className="divider-inner pt-3">
                            <h3 className="toko-section-title text-center">Special Price</h3>
                        </div>
                        <div className="container mt-3">
                            <div className="row">
                                {PromoBook.slice(0,4).map((el, index) => (
                                    <div key={index} className="col-sm-3 col-md-3 card-cascade mb-5 pb-5 card-product">
                                        <HighlightBook {...this.props} title={el.title} penulis={el.penulis}
                                                       penerbit={el.penerbit} price={el.price} category={el.category}
                                                       url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                                       promo={el.promo} discount={el.discount} limited={el.limited} status={el.status} book_id={el.id}
                                        />
                                        <div className="button d-flex justify-content-center">
                                            <button onClick={e => this.handleClick(e)} value={el.id} type="button" className="btn btn-primary">Detail</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Separator/>

                {/*Promo Book*/}
                <div className="container col-sm-12 promo-container">
                    <div className="column-inner">
                        <div className="divider-inner pt-3">
                            <h3 className="toko-section-title text-center">Limited Book</h3>
                        </div>
                        <div className="container mt-3">
                            <div className="row">
                                {LimitedBook.slice(0,4).map((el, index) => (
                                    <div key={index} className="col-sm-3 col-md-3 card-cascade mb-5 pb-5 card-product">
                                        <HighlightBook {...this.props} title={el.title} penulis={el.penulis}
                                                       penerbit={el.penerbit} price={el.price} category={el.category}
                                                       url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                                       promo={el.promo} discount={el.discount} limited={el.limited} status={el.status} book_id={el.id}
                                        />
                                        <div className="button d-flex justify-content-center">
                                            <button onClick={e => this.handleClick(e)} value={el.id} type="button" className="btn btn-primary">Detail</button>
                                        </div>
                                    </div>
                                ))}
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

const mapStateToProps = (state) => {
    return {
        login: state.user.is_login,
        visible: state.user.visible,
        all_book: state.book.listBooks,
        popular_book: state.book.listPopular,
        new_book: state.book.listNew,
        promo_book: state.book.listPromo,
        limited_book: state.book.listLimited,
        info: state.user.infos,
        trans: state.transaction,
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    closeAlert, doSignOut,

    getAllProduct, getPopularProduct, getNewProduct, getPromoProduct, getLimitedProduct,

    doGetTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);