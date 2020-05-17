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

class CheckoutPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBar {...this.props}/>

                <div className="product-page wrapper">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Checkout</h1>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" to="/">
                                    Home
                                </Link>
                                <Typography color="textPrimary">Checkout</Typography>
                            </Breadcrumbs>
                        </div>
                    </div>
                </div>

                <div className="container-fluid p-page">
                        <div className="pt-5">
                            <div className="pb-5">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-10 offset-1">
                                                        <h4 className="mb-3 p-2 px-3 bg-light">Billing address</h4>
                                                        <form className="needs-validation" noValidate>
                                                            <div className="row">
                                                                <div className="col-md-6 mb-3">
                                                                    <label htmlFor="firstName">First name</label>
                                                                    <input type="text" className="form-control"
                                                                           id="firstName" placeholder="" value=""
                                                                           required/>
                                                                        <div className="invalid-feedback">
                                                                            Valid first name is required.
                                                                        </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <label htmlFor="lastName">Last name</label>
                                                                    <input type="text" className="form-control"
                                                                           id="lastName" placeholder="" value=""
                                                                           required/>
                                                                        <div className="invalid-feedback">
                                                                            Valid last name is required.
                                                                        </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="username">Username</label>
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">@</span>
                                                                    </div>
                                                                    <input type="text" className="form-control"
                                                                           id="username" placeholder="Username"
                                                                           required/>
                                                                        <div className="invalid-feedback"
                                                                             style={{width: '100%'}}>
                                                                            Your username is required.
                                                                        </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="email">Email <span
                                                                    className="text-muted">(Optional)</span></label>
                                                                <input type="email" className="form-control" id="email"
                                                                       placeholder="you@example.com"/>
                                                                    <div className="invalid-feedback">
                                                                        Please enter a valid email address for shipping
                                                                        updates.
                                                                    </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="address">Address</label>
                                                                <input type="text" className="form-control" id="address"
                                                                       placeholder="Malang, Jawa Timur" required/>
                                                                    <div className="invalid-feedback">
                                                                        Please enter your shipping address.
                                                                    </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-md-5 mb-3">
                                                                    <label htmlFor="country">Country</label>
                                                                    <select className="custom-select d-block w-100"
                                                                            id="country" required>
                                                                        <option value="">Choose...</option>
                                                                        <option>Indonesia</option>
                                                                    </select>
                                                                    <div className="invalid-feedback">
                                                                        Please select a valid country.
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 mb-3">
                                                                    <label htmlFor="state">Province</label>
                                                                    <select className="custom-select d-block w-100"
                                                                            id="state" required>
                                                                        <option value="">Choose...</option>
                                                                        <option>DKI Jakarta</option>
                                                                        <option>Jawa Barat</option>
                                                                        <option>Jawa Tengah</option>
                                                                        <option>Jawa Timur</option>
                                                                    </select>
                                                                    <div className="invalid-feedback">
                                                                        Please provide a valid state.
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3 mb-3">
                                                                    <label htmlFor="zip">Zip</label>
                                                                    <input type="text" className="form-control" id="zip"
                                                                           placeholder="" required/>
                                                                        <div className="invalid-feedback">
                                                                            Zip code required.
                                                                        </div>
                                                                </div>
                                                            </div>
                                                                <hr className="mb-4"/>

                                                                    <h4 className="mb-3 p-2 px-3 bg-light">Payment</h4>

                                                                    <div className="row">
                                                                        <div className="col-md-6 mb-3">
                                                                            <label htmlFor="cc-name">Name on
                                                                                card</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="cc-name" placeholder="" required/>
                                                                                <small className="text-muted">Full name
                                                                                    as displayed on card</small>
                                                                                <div className="invalid-feedback">
                                                                                    Name on card is required
                                                                                </div>
                                                                        </div>
                                                                        <div className="col-md-6 mb-3">
                                                                            <label htmlFor="cc-number">Credit card
                                                                                number</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="cc-number" placeholder=""
                                                                                   required/>
                                                                                <div className="invalid-feedback">
                                                                                    Credit card number is required
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-3 mb-3">
                                                                            <label
                                                                                htmlFor="cc-expiration">Expiration</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="cc-expiration" placeholder=""
                                                                                   required/>
                                                                                <div className="invalid-feedback">
                                                                                    Expiration date required
                                                                                </div>
                                                                        </div>
                                                                        <div className="col-md-3 mb-3">
                                                                            <label htmlFor="cc-expiration">CVV</label>
                                                                            <input type="text" className="form-control"
                                                                                   id="cc-cvv" placeholder="" required/>
                                                                                <div className="invalid-feedback">
                                                                                    Security code required
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr className="mb-4"/>
                                                                        <button
                                                                            className="btn btn-primary btn-lg btn-block"
                                                                            type="submit">Proceed
                                                                        </button>
                                                        </form>
                                                    </div>
                                                </div>
                                        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);