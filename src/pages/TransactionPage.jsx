import React, { Component, Fragment } from 'react'
import NavBar from "../components/NavBarComp";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {changeInputUser, closeAlert, doSignOut} from "../stores/actions/userAction";
import {getPopularProduct} from "../stores/actions/bookAction";
import {doGetTransaction, doDeleteTransaction} from "../stores/actions/transactionAction";
import {connect} from "react-redux";
import FooterComp from "../components/FooterComp";
import TransDetailcomp from "../components/TransactionDetailComp";

import '../assets/styles/TransactionPage.css';


class CartsPage extends Component {
    componentDidMount = async () => {
        this.props.doGetTransaction();
    };

    componentDidUpdate = () => {
        this.props.doGetTransaction();
    };

    render() {
        const transDetail = this.props.trans_detail;
        const is_login = localStorage.getItem('is_login');

        if (!this.props.login && !is_login){
            this.props.history.push('/')
        }

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

                                            {transDetail.map((el, index) => (
                                            <TransDetailcomp key={index} title={el.book_id.title}
                                                             category={el.book_id.category}
                                                             price={el.price}
                                                             qty={el.qty}
                                                             book_id={el.id}

                                                             deleteCart={(e) => this.props.doDeleteTransaction(e)}
                                            />
                                            ))}

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
                                                    Subtotal </strong><strong>Rp. {this.props.trans.total_price}</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom">
                                                <strong className="text-muted">Shipping and
                                                    handling</strong><strong>Rp. 20000</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom">
                                                <strong
                                                    className="text-muted">Tax</strong><strong>Rp. 0</strong>
                                            </li>
                                            <li className="d-flex justify-content-between py-3 border-bottom">
                                                <strong className="text-muted">Total</strong>
                                                <h5 className="font-weight-bold">Rp. {this.props.trans.total_price + 20000}</h5>
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
        trans: state.transaction,
        trans_detail: state.transaction.transaction_detail
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    closeAlert, doSignOut,

    getPopularProduct, doGetTransaction, doDeleteTransaction
};

export default connect(mapStateToProps, mapDispatchToProps)(CartsPage);