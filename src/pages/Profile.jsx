import React, {Component, Fragment} from "react";

import '../assets/styles/Profile.css';
import NavBar from "../components/NavBarComp";
import {changeInputUser, doRegister, doSignOut, getProfile} from "../stores/actions/userAction";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";

class Profile extends Component{
    componentDidMount = async () => {
        if (this.props.login){
            localStorage.setItem("is_login", true);
        }
        this.props.getProfile(localStorage.getItem("token"));

};
    render() {
        const is_login = localStorage.getItem("is_login");
        if (!this.props.login && !is_login) {
            return (
                <Redirect to={{ pathname: "/",  state: {message: "Login untuk melihat profil"}}} />
            );
        } else {
            return (
                <Fragment>
                    <NavBar {...this.props}/>

                    <div className="container emp-profile">
                        <div className="card profile-card">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-img">
                                        <img
                                            src={this.props.info.avatar}
                                            alt="My Profile"/>
                                    </div>

                                    <div className="profile-work">
                                        <p>Status</p>
                                        <a href=".">User</a><br/>

                                        <p>Address</p>
                                        <a href=".">{this.props.info.address}</a><br/>

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="profile-head">
                                        <h5>
                                            <b>{this.props.info.name}</b>
                                        </h5>
                                        <h6>
                                            User
                                        </h6>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="."
                                                   role="tab" aria-controls="home" aria-selected="true">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="."
                                                   role="tab" aria-controls="profile" aria-selected="false">History</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="container">
                                            <div className="tab-content profile-tab" id="myTabContent">
                                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                                     aria-labelledby="home-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Username</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{this.props.info.username}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Name</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{this.props.info.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Email</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{this.props.info.email}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Phone</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{this.props.info.phone}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="profile" role="tabpanel"
                                                     aria-labelledby="profile-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Transaction</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>20</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Total Book</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>10$/hr</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Total Projects</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>230</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>English Level</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Expert</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Availability</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>6 months</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <label>Your Bio</label><br/>
                                                            <p>Your detail description</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <Link to={'/profile/edit'}>
                                        <button type="button" className="btn btn-info">Edit Profile</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        }
    }

}

const mapStateToProps = (state) => {
    return {
        login: state.user.is_login,
        visible: state.user.visible,
        info: state.user.infos,
        data: state.user
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    doRegister, doSignOut, getProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);