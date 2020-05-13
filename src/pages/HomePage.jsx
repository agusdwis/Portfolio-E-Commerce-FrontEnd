import React, {Component, Fragment} from "react";
import NavBar from "../components/NavBarComp";
import FooterComp from "../components/FooterComp";
import HomeBanner from "../components/HomePage/HomeBannerComp";
import {HighlightBook} from "../components/HomePage/HighlightBookComp";
import {changeInputUser, closeAlert, doSignOut} from "../stores/actions/userAction";
import {getAllProduct, getPopularProduct, getNewProduct, getPromoProduct} from "../stores/actions/bookAction";
import {connect} from "react-redux";

class HomePage extends Component {
    componentDidMount= async () => {
        this.props.getAllProduct();
        this.props.getPopularProduct();
        this.props.getNewProduct();
        this.props.getPromoProduct();

    };

    handleUserBook = async (bookID) => {
        await this.props.history.replace("/produk/" + bookID);
    };

    render() {
        const PopularBook = this.props.popular_book;
        const NewBook = this.props.new_book;
        const PromoBook = this.props.promo_book;
        const AllBook = this.props.all_book;
        return (
            <Fragment>
                {/*Navbar*/}
                <NavBar {...this.props}/>

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
                                {PopularBook.slice(0,4).map((el, index) => (
                                    <div key={index} className="col-sm-3 col-md-3 card-cascade mb-5 card-product d-flex align-items-stretch">
                                        <HighlightBook title={el.title} penulis={el.penulis}
                                                penerbit={el.penerbit} price={el.price} category={el.category}
                                                url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                                promo={el.promo} baru={el.baru} pilihan={el.pilihan} popular={el.popular}
                                                best_seller={el.best_seller} special_price={el.special_price} book_id={el.id}
                                        />
                                    </div>
                                ))}
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
                                {NewBook.slice(0,4).map((el, index) => (
                                    <div key={index} className="col-sm-3 col-md-3 card-cascade mb-5 card-product d-flex align-items-stretch">
                                        <HighlightBook title={el.title} penulis={el.penulis}
                                                       penerbit={el.penerbit} price={el.price} category={el.category}
                                                       url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                                       promo={el.promo} baru={el.baru} pilihan={el.pilihan} popular={el.popular}
                                                       best_seller={el.best_seller} special_price={el.special_price} book_id={el.id}
                                        />
                                    </div>
                                ))}
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
                                {AllBook.slice(0,4).map((el, index) => (
                                    <div key={index} className="col-sm-3 col-md-3 card-cascade mb-5 card-product d-flex align-items-stretch">
                                        <HighlightBook title={el.title} penulis={el.penulis}
                                                       penerbit={el.penerbit} price={el.price} category={el.category}
                                                       url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                                       promo={el.promo} baru={el.baru} pilihan={el.pilihan} popular={el.popular}
                                                       best_seller={el.best_seller} special_price={el.special_price} book_id={el.id}
                                        />
                                    </div>
                                ))}
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
                                {PromoBook.slice(0,4).map((el, index) => (
                                    <div key={index} className="col-sm-3 col-md-3 card-cascade mb-5 card-product d-flex align-items-stretch">
                                        <HighlightBook {...this.props} title={el.title} penulis={el.penulis}
                                                       penerbit={el.penerbit} price={el.price} category={el.category}
                                                       url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                                       promo={el.promo} baru={el.baru} pilihan={el.pilihan} popular={el.popular}
                                                       best_seller={el.best_seller} special_price={el.special_price} book_id={el.id}
                                        />
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
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    closeAlert, doSignOut,

    getAllProduct, getPopularProduct, getNewProduct, getPromoProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);