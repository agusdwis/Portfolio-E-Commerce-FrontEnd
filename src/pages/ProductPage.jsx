import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import NavBar from "../components/NavBarComp";
import FooterComp from "../components/FooterComp";

import {getPopularProduct} from "../stores/actions/bookAction";
import {connect} from "react-redux";

//import static files
import '../assets/styles/ProductPage.css';
import {BookSearch} from "../components/Search";
import {HighlightBook} from "../components/HomePage/HighlightBookComp";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import CardCategory from "../components/CardCategoryComp";
import {changeInputUser, closeAlert, doSignOut} from "../stores/actions/userAction";

class ProductPage extends Component {
    componentDidMount = async () => {
        this.props.getPopularProduct();
        console.log(this.props)

    };

    handleClick=(e)=>{
        e.preventDefault();
        this.props.history.push("/product/"+ e.target.value);
    };

    render() {
        const PopularBooks = this.props.popular_book;

        return (
            <Fragment>
                <div className="navbar-page">
                    <NavBar {...this.props}/>
                </div>

                <div className="product-page wrapper">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Bookstore</h1>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" to="/">
                                    Home
                                </Link>
                                <Typography color="textPrimary">Bookstore</Typography>
                            </Breadcrumbs>
                        </div>
                    </div>
                </div>

                <BookSearch/>

                <div className="container-fluid p-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-sm-12 pt-5">
                                <div className="row">
                                    {PopularBooks.slice(0,12).map((el, index) => (
                                        <div key={index} className="col-sm-3 col-md-3 card-cascade mb-5 card-product">
                                            <HighlightBook title={el.title} penulis={el.penulis}
                                                           penerbit={el.penerbit} price={el.price} category={el.category}
                                                           url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                                           promo={el.promo} discount={el.discount} limited={el.limited} status={el.status} book_id={el.id}
                                            />
                                            <div className="button d-flex justify-content-center">
                                                <button onClick={(e) => this.handleClick(e)} value={el.id} type="button" className="btn btn-primary">Detail</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-12 pt-5">
                                <div className="category-list">
                                    <div className="card card-detail mb-2">
                                        <div className="justify-content-center my-4">
                                            <h6 className="text-center mb-4" style={{color:'red', fontWeight: 'bold'}}>TOP RATED PRODUCT</h6>

                                            {PopularBooks.slice(0,5).map((el, index) => (
                                                <div key={index}>
                                                    <CardCategory title={el.title} penulis={el.penulis}
                                                                  penerbit={el.penerbit} price={el.price} category={el.category}
                                                                  url_image={el.image} desc={el.description} sold={el.sold} stock={el.stock}
                                                                  promo={el.promo} discount={el.discount} limited={el.limited} status={el.status} book_id={el.id}
                                                    />
                                                </div>
                                            ))}

                                        </div>
                                    </div>

                                    <div className="card card-detail mb-2">
                                        <div className="justify-content-center my-4">
                                            <h6 className="text-center mb-4">CATEGORIES</h6>
                                            <div className="card px-4 pt-1">
                                                <Link to="#">Fiction</Link>
                                                <Link to="#">Inspiration</Link>
                                                <Link to="#">Programming</Link>
                                                <Link to="#">Life Style</Link>
                                                <Link to="#">Business</Link>
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
        info: state.user.infos,
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    closeAlert, doSignOut,

    getPopularProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);