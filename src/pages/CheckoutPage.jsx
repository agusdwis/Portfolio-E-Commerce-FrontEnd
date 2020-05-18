import React, { Component, Fragment } from 'react'
import NavBar from "../components/NavBarComp";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {changeInputUser, closeAlert, doSignOut} from "../stores/actions/userAction";
import {getPopularProduct} from "../stores/actions/bookAction";
import { changeInputPayment, doPostHistory, changeInputShipping } from "../stores/actions/transactionAction";
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
                                                        <form>

                                                            <div className="mb-3">
                                                                <label htmlFor="fullname">Full Name</label>
                                                                <input type="text" className="form-control" id="name"
                                                                       placeholder="Fullname"/>
                                                                <div className="invalid-feedback">
                                                                    Please enter a valid name.
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

                                                                        <div className="col-md-5 mb-3">
                                                                            <label htmlFor="payment_method">Choose Payment Method</label>
                                                                            <select className="custom-select d-block w-100"
                                                                                    id="payment_method" name="payment_method" required>
                                                                                {/*<option value="">Choose...</option>*/}
                                                                                <option onClick={(e) =>this.props.changePayment(e)} value='1'>Transfer Bank Mandiri</option>
                                                                                <option onClick={(e) =>this.props.changePayment(e)} value="2">Transfer Bank BCA</option>
                                                                                <option onClick={(e) =>this.props.changePayment(e)} value="3">Transfer Bank BRI</option>
                                                                                <option onClick={(e) =>this.props.changePayment(e)} value="4">Transfer Bank BNI</option>
                                                                                <option onClick={(e) =>this.props.changePayment(e)} value="5">Transfer Bank DANA</option>
                                                                                <option onClick={(e) =>this.props.changePayment(e)} value="6">Transfer Bank GoPay</option>
                                                                            </select>

                                                                            <div className="invalid-feedback">
                                                                                Please select a valid country.
                                                                            </div>
                                                                        </div>
                                                                    <hr className="mb-4"/>
                                                                        <h4 className="mb- p-2 px-3 bg-light">Shipping</h4>

                                                                        <div className="col-md-5 mb-3">
                                                                            <label htmlFor="courier">Choose Shipping</label>
                                                                            <select className="custom-select d-block w-100"
                                                                                    id="courier" name="courier" required>
                                                                                {/*<option value="">Choose...</option>*/}
                                                                                <option onClick={(e)=>this.props.changeShipping(e)} value="1">TIKI</option>
                                                                                <option onClick={(e)=>this.props.changeShipping(e)} value="2">JNE</option>
                                                                                <option onClick={(e)=>this.props.changeShipping(e)} value="3">SiCepat</option>
                                                                                <option onClick={(e)=>this.props.changeShipping(e)} value="4">POS Indonesia</option>
                                                                                <option onClick={(e)=>this.props.changeShipping(e)} value="5">J&T</option>
                                                                                <option onClick={(e)=>this.props.changeShipping(e)} value="6">Wahana</option>
                                                                            </select>
                                                                            <div className="invalid-feedback">
                                                                                Please select a valid country.
                                                                            </div>
                                                                        </div>
                                                                        <hr className="mb-4"/>
                                                                        <button onClick={()=> this.props.doPostHistory()}
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
        trans: state.transaction,
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    closeAlert, doSignOut,

    getPopularProduct, changePayment: (e) => changeInputPayment(e), doPostHistory, changeShipping:(e) => changeInputShipping(e)
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);