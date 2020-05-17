import React, { Component, Fragment } from 'react'
import NavBar from "../components/NavBarComp";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {changeInputUser, closeAlert, doSignOut} from "../stores/actions/userAction";
import {getPopularProduct} from "../stores/actions/bookAction";
import {connect} from "react-redux";
import '../assets/styles/TransactionPage.css';
import FooterComp from "../components/FooterComp";

class CartsPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar {...this.props}/>

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

                <div className="container-fluid p-page">
                    <div className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">


                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="p-2 px-3 text-uppercase">Product</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Price</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Quantity</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Remove</div>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr>
                                                <th scope="row" className="border-0">
                                                    <div className="p-2">
                                                        <img
                                                            src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg"
                                                            alt="" width="70"
                                                            className="img-fluid rounded shadow-sm"/>
                                                            <div className="ml-3 d-inline-block align-middle">
                                                                <h5 className="mb-0"><a href="#"
                                                                                        className="text-dark d-inline-block align-middle">Timex
                                                                    Unisex Originals</a></h5><span
                                                                className="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                                                            </div>
                                                    </div>
                                                </th>
                                                <td className="border-0 align-middle"><strong>$79.00</strong>
                                                </td>
                                                <td className="border-0 align-middle"><strong>3</strong></td>
                                                <td className="border-0 align-middle">
                                                    <a href="#" className="text-dark"><i className="fa fa-trash"/></a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>

                            <div className="row py-5 p-4 bg-white rounded shadow-sm">
                                <div className="col-lg-6">
                                    <div
                                        className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon
                                        code
                                    </div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">If you have a coupon code, please enter
                                            it in the box below</p>
                                        <div className="input-group mb-4 border rounded-pill p-2">
                                            <input type="text" placeholder="Apply coupon"
                                                   aria-describedby="button-addon3"
                                                   className="form-control border-0"/>
                                                <div className="input-group-append border-0">
                                                    <button id="button-addon3" type="button"
                                                            className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"/>Apply coupon
                                                    </button>
                                                </div>
                                        </div>
                                    </div>
                                    <div
                                        className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions
                                        for seller
                                    </div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">If you have some information for the
                                            seller you can leave them in the box below</p>
                                        <textarea name="" cols="30" rows="2" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div
                                        className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order
                                        summary
                                    </div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">Shipping and additional costs are
                                            calculated based on values you have entered.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="d-flex justify-content-between py-3 border-bottom">
                                                <strong className="text-muted">Order
                                                    Subtotal </strong><strong>$390.00</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom">
                                                <strong className="text-muted">Shipping and
                                                    handling</strong><strong>$10.00</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom">
                                                <strong
                                                    className="text-muted">Tax</strong><strong>$0.00</strong>
                                            </li>
                                            <li className="d-flex justify-content-between py-3 border-bottom">
                                                <strong className="text-muted">Total</strong>
                                                <h5 className="font-weight-bold">$400.00</h5>
                                            </li>
                                        </ul>
                                        <Link to="/checkout" className="btn btn-dark rounded-pill py-2 btn-block">Checkout</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

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

    getPopularProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(CartsPage);