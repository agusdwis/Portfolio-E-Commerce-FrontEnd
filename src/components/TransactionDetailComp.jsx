import React, {Fragment} from 'react';
import '../assets/styles/TransactionPage.css';
import {Link} from "react-router-dom";

const TransDetailcomp = (props, handleClick) => {
    handleClick=(e)=>{
        e.preventDefault();
        props.deleteCart(e.target.value);
    };
    return (
        <Fragment>
            <tr>
                <th scope="row" className="border-0">
                    <div className="p-2">
                        <img
                            src="#"
                            alt="" width="70"
                            className="img-fluid rounded shadow-sm"/>
                        <div className="ml-3 d-inline-block align-middle">
                            <h5 className="mb-0">
                                <a href="." className="text-dark d-inline-block align-middle">{props.title}</a></h5><span
                            className="text-muted font-weight-normal font-italic d-block">Category: {props.category}</span>
                        </div>
                    </div>
                </th>
                <td className="border-0 align-middle"><strong>Rp. {props.price}</strong>
                </td>
                <td className="border-0 align-middle"><strong>{props.qty}</strong></td>
                <td className="border-0 align-middle">
                    <Link to="/cart"><button type="submit" onClick={e => handleClick(e)} value={props.book_id} className="btn btn-success"><i className="fa fa-trash"/></button></Link>
                </td>
            </tr>
        </Fragment>
    )
};

export default TransDetailcomp;