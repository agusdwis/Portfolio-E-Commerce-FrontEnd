import React, {Fragment} from "react";

//import static files
import '../../assets/styles/HiglightBookComp.css';

export const HighlightBook = () => {
    return(
        <Fragment>
            {/*<div className="col-sm-3 col-md-3 card-cascade mb-3">*/}
                <div className="product-inner">
                    <figure className="product-image-box">
                        <span className="onsale">Sale!</span>
                        <img width="250" height="333"
                             src={require('../../assets/images/product/book-23-250x333.jpg')}
                             className="img-fluid attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                             alt=""
                             sizes="(max-width: 250px) 100vw, 250px"/></figure>

                    <div className="product-price-box clearfix"><h2
                        className="product__title">Judul Buku Bacaan</h2>
                        <span className="person-name vcard">Kobars</span>
                        <span className="price"><del><span
                            className="Price-amount amount"><span
                            className="Price-currencySymbol">Rp. </span>100000</span></del> <ins><span
                            className="Price-amount amount"><span
                            className="Price-currencySymbol">Rp. </span>90000</span></ins></span>
                    </div>

                    <div className="woo-button-wrapper pb-4 px-4">
                        <div className="woo-button-border">
                            <div className="row">
                            <div className="col-6">

                            <a href="#"
                            className="button product-button"><i className="fa fa-send"> Detail</i></a>
                            </div>
                            <div className="col-6">

                            <a href="#" data-quantity="#"
                               className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                               data-product_id="#"
                               data-product_sku=""
                               aria-label="Add “#” to your cart"
                               rel="nofollow"><i className="fa fa-shopping-cart"> Buy</i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </Fragment>
    )
};