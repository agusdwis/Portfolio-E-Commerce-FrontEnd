import React, {Fragment} from 'react';
import NavBar from "../components/NavBarComp";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {changeInputUser, closeAlert, doSignOut} from "../stores/actions/userAction";
import {
    getAllProduct,
    getLimitedProduct,
    getNewProduct,
    getPopularProduct,
    getPromoProduct,
} from "../stores/actions/bookAction";
import {doGetTransaction, doGetHistory} from "../stores/actions/transactionAction";
import {connect} from "react-redux";
import TransDetailcomp from "../components/TransactionDetailComp";

class HistoryPage extends React.Component {
    componentDidMount= async () => {
      this.props.doGetHistory();
    };

    render() {
        return (
            <Fragment>
                <NavBar {...this.props}/>

                <div className="product-page wrapper">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">History</h1>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" to="/">
                                    Home
                                </Link>
                                <Typography color="textPrimary">History</Typography>
                            </Breadcrumbs>
                        </div>
                    </div>
                </div>

                <div className="container-fluid p-page">
                    <div className="py-5">
                        <div className="container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 text-uppercase">No</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 text-uppercase">Trans. ID</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Books</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Prices (IDR)</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Dates</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Status</div>
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                {this.props.allHistory.map((el, index) => {
                                                    return (
                                                        <>
                                                        <tr>
                                                            <td key={index} className="border-0 align-middle"><strong>{index + 1}</strong>
                                                            </td>

                                                            <td className="border-0 align-middle"><strong>
                                                                {el.transaction[0].id}
                                                            </strong>
                                                            </td>

                                                            <td className="border-0 align-middle"><strong>
                                                                {el.transaction[0].total_qty} Books
                                                            </strong>
                                                            </td>

                                                            <td className="border-0 align-middle"><strong>
                                                                {el.transaction[0].total_price}
                                                            </strong>
                                                            </td>

                                                            <td className="border-0 align-middle"><strong>
                                                                {el.transaction[0].created_at.substring(0, 22)} WIB
                                                            </strong>
                                                            </td>

                                                            <td className="border-0 align-middle"><strong>
                                                                Completed
                                                            </strong>
                                                            </td>
                                                        </tr>
                                                        </>
                                                    );
                                                })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
        limited_book: state.book.listLimited,
        info: state.user.infos,
        trans: state.transaction,
        allHistory: state.transaction.allHistory
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    closeAlert, doSignOut,

    getAllProduct, getPopularProduct, getNewProduct, getPromoProduct, getLimitedProduct,

    doGetTransaction, doGetHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);