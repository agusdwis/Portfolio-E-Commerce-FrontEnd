import React, { Component, Fragment } from 'react'
import NavBar from "../components/NavBarComp";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {changeInputUser, closeAlert, doSignOut} from "../stores/actions/userAction";
import {getPopularProduct} from "../stores/actions/bookAction";
import {connect} from "react-redux";
import '../assets/styles/TransactionPage.css';

class CartsPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>

                <div className="product-page wrapper">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Cart</h1>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" to="/">
                                    Home
                                </Link>
                                <Typography color="textPrimary">Cart</Typography>
                            </Breadcrumbs>
                        </div>
                    </div>
                </div>

                <div className="container-fluid p-page detail-produk">
                    <div className="container">
                        <div id="content" className="main-content-inner" role="main">
                            <article id="post-1707" className="post-1707 page type-page status-publish entry">
                                <div className="entry-content">
                                    <div className="woocommerce">
                                        <div className="woocommerce-notices-wrapper"></div>
                                        <form className="woocommerce-cart-form"
                                              action="." method="post">
                                            <table
                                                className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                                                cellSpacing="0">
                                                <thead>
                                                <tr>
                                                    <th className="product-remove">&nbsp;</th>
                                                    <th className="product-thumbnail">&nbsp;</th>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Subtotal</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                <tr className="woocommerce-cart-form__cart-item cart_item">

                                                    <td className="product-remove">
                                                        <a href="."
                                                           className="remove" aria-label="Remove this item" data-product_id="96"
                                                           data-product_sku="">×</a></td>

                                                    <td className="product-thumbnail">
                                                        <a href="https://demo.tokopress.com/bookie/product/furiously-happy-a-funny-book-about-horrible-things/"><img
                                                            width="100" height="200"
                                                            src="https://demo.tokopress.com/bookie/wp-content/uploads/sites/7/2016/06/book-22-250x333.jpg"
                                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                            alt=""
                                                            srcSet="https://demo.tokopress.com/bookie/wp-content/uploads/sites/7/2016/06/book-22-250x333.jpg 250w, https://demo.tokopress.com/bookie/wp-content/uploads/sites/7/2016/06/book-22-225x300.jpg 225w, https://demo.tokopress.com/bookie/wp-content/uploads/sites/7/2016/06/book-22-600x800.jpg 600w, https://demo.tokopress.com/bookie/wp-content/uploads/sites/7/2016/06/book-22.jpg 750w"
                                                            sizes="(max-width: 250px) 100vw, 250px"/></a></td>

                                                    <td className="product-name" data-title="Product">
                                                        <a href="https://demo.tokopress.com/bookie/product/furiously-happy-a-funny-book-about-horrible-things/">See
                                                            Me</a></td>

                                                    <td className="product-price" data-title="Price">
                                                <span className="woocommerce-Price-amount amount"><span
                                                    className="woocommerce-Price-currencySymbol">$</span>9.00</span>
                                                    </td>

                                                    <td className="product-quantity" data-title="Quantity">
                                                        <div className="quantity">
                                                            <label className="screen-reader-text"
                                                                   htmlFor="quantity_5ebe7ac4bd383">See Me quantity</label>
                                                            <input type="number" id="quantity_5ebe7ac4bd383" width="10vmin"
                                                                   className="input-text qty text" step="1" min="0" max=""
                                                                   name="cart[26657d5ff9020d2abefe558796b99584][qty]" value="1"
                                                                   title="Qty" size="2" placeholder="" inputMode="numeric"/>
                                                        </div>
                                                    </td>

                                                    <td className="product-subtotal" data-title="Subtotal">
                                                <span className="woocommerce-Price-amount amount"><span
                                                    className="woocommerce-Price-currencySymbol">$</span>9.00</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </form>

                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>



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

    getPopularProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(CartsPage);