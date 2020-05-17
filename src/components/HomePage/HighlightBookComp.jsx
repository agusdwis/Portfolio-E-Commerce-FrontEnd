import React, {Fragment} from "react";
import {Link} from 'react-router-dom';

//import static files
import '../../assets/styles/HiglightBookComp.css';

export const HighlightBook = (props) => {
    return(

        <Fragment>
                <div className="product-inner h-100 card pt-2 pb-5 mb-1">
                    <Link to="#" ><figure className="product-image-box">
                        <span className="onsale">Sale!</span>
                        <img width="250"
                            src={props.url_image}
                             className="img-fluid attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                             alt="Not Found"
                             sizes="(max-width: 250px) 100vw, 250px"/></figure></Link>

                    <div className="product-price-box clearfix" style={{height: "15vmin"}}>
                        <h2 className="product__title">{props.title}</h2>
                        <br/>
                        <span className="person-name vcard"><b>{props.penulis}</b></span>
                        <span className="person-name vcard">{props.penerbit}</span>
                        <span className="price"><del><span
                            className="Price-amount amount"><span
                            className="Price-currencySymbol">Rp. </span>0</span></del> <ins><span
                            className="Price-amount amount"><span
                            className="Price-currencySymbol">Rp. </span>{props.price}</span></ins></span>
                    </div>

                    {/*<div className="woo-button-wrapper px-4">*/}
                    {/*    <div className="woo-button-border">*/}
                    {/*        <div className="row">*/}
                    {/*        <div className="col-6">*/}
                    {/*        <a href="."*/}
                    {/*        className="button product-button"><i className="fa fa-send">Check</i></a>*/}
                    {/*        </div>*/}

                    {/*        <div className="col-6">*/}
                    {/*        <a href="." data-quantity="#"*/}
                    {/*           className="button product_type_simple add_to_cart_button ajax_add_to_cart"*/}
                    {/*           data-product_id="#"*/}
                    {/*           data-product_sku=""*/}
                    {/*           aria-label="Add “#” to your cart"*/}
                    {/*           rel="nofollow"><i className="fa fa-shopping-cart">Buy</i></a>*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            {/*</div>*/}
        </Fragment>
    )
};