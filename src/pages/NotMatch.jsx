import React from "react";
import NavBar from "../components/NavBarComp";
import {Link} from "react-router-dom";

import '../assets/styles/NotMatch.css';

const NotMatch = () => {

    return (
        <React.Fragment>
            {/*<NavBar />*/}
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                        <h2>Page not found!</h2>
                    </div>
                    <Link to="/">Homepage</Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NotMatch;