import React, {Component, Fragment} from "react";
import NavBar from "../components/NavBarComp";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {BookSearch} from "../components/Search";

import '../assets/styles/ProductPage.css';
import BookDetail from "../components/BookDetailComp";
import {HighlightBook} from "../components/HomePage/HighlightBookComp";
import FooterComp from "../components/FooterComp";
import {changeInputUser, closeAlert, doSignOut} from "../stores/actions/userAction";
import {getBookByID} from "../stores/actions/bookAction";
import {connect} from "react-redux";
import Separator from "../components/Separator";

class ProductDetail extends Component {
    componentDidMount = async() => {
        const paramId = await this.props.match.params.id;
        console.log(paramId);
        this.props.getBookByID(paramId);
    };
    render() {
        const el = this.props.one_book;
        return (
            <Fragment>
                <div className="navbar-page">
                    <NavBar{...this.props}/>
                </div>

                <div className="product-page wrapper">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Book Overview</h1>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" to="/">
                                    Home
                                </Link>
                                <Link color="inherit" to="/book">
                                    Produk
                                </Link>
                                <Typography color="textPrimary">{el.title}</Typography>

                            </Breadcrumbs>
                        </div>
                    </div>
                </div>

                <BookSearch/>

                <div className="detail-produk bg-light">
                    <BookDetail title={el.title} penulis={el.penulis}
                                   penerbit={el.penerbit} price={el.price} category={el.category}
                                   url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                   promo={el.promo} baru={el.baru} pilihan={el.pilihan} popular={el.popular}
                                   best_seller={el.best_seller} special_price={el.special_price} book_id={el.id}
                    />
                </div>

                <Separator/>

                <div className="suggested-product bg-dark">
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 pt-5">
                                <h1 className="text-center mb-5 text-light">Produk Rekomendasi</h1>
                                <div className="row">
                                    <div className="col-md-3 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-3 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-3 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-3 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator/>

                <div className="related-product bg-light">
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 pt-5">
                                <h1 className="text-center mb-5 text-dark">Produk Terkait</h1>
                                <div className="row">
                                    <div className="col-md-3 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-3 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-3 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                    <div className="col-md-3 col-sm-12 mb-4">
                                        <HighlightBook/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterComp/>
            </Fragment>
        )
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
        one_book: state.book.oneBook,
        info: state.user.infos,
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    closeAlert, doSignOut,

    getBookByID
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);