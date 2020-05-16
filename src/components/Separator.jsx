import React, {Fragment} from "react";
import '../assets/styles/Style.css';

const Separator = () => {
    return (
        <Fragment>
            <div className="jumbotron jumbotron-fluid my-separator">
                <div className="container">
                    <h1 className="display-4">Book.me</h1>
                    <p className="lead"><i>“A room without books is like a body without a soul.”</i></p>
                </div>
            </div>
        </Fragment>
    )
};

export default Separator