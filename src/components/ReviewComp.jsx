import React, {Fragment} from "react";

const ReviewBook = () => {
    return(
        <Fragment>
            <div className="container mt-3">
                <div className="media border p-3">
                    <img src={require('../assets/images/social-icon/facebook.png')} alt="John Doe" className="mr-3 mt-3 rounded-circle"
                         style={{width:'60px'}}/>
                    <div className="media-body">
                        <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default ReviewBook;