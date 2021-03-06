import React, {Fragment} from "react";
import '../assets/styles/ProductPage.css';

const CardCategory = (props) => {
    return(
        <Fragment>
                <div className="card px-4 pt-1">
                    <div className="row mb-2">
                        <div className="col-4">
                            <img width="70" height="100"
                                src={props.url_image} alt="Book"/>
                        </div>
                        <div className="col-8">
                            <p>{props.title}</p>
                            <span> Rp. {props.price}</span>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
};


export default CardCategory;