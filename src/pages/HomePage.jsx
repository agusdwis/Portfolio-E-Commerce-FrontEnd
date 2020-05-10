import React, {Component, Fragment} from "react";
import NavBarComp from "../components/NavBarComp";
import FooterComp from "../components/FooterComp";
import HomeBanner from "../components/HomePage/HomeBannerComp";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBarComp/>
                <div className="container">
                    <HomeBanner/>
                </div>
                <FooterComp/>
            </Fragment>
        );
    }
}

export default HomePage;