import React, {Component, Fragment} from "react";
import NavBar from "./NavBarComp";
import {changeInputUser, closeAlert, doRegister, doEditProfile, doSignOut} from "../stores/actions/userAction";
import {connect} from "react-redux";

class ProfileEditPage extends Component {
    postEditProfile = async () => {
        const token = localStorage.getItem('token');
        await this.props.doEditProfile(token);

        if (this.props.data.status_edit){
            this.props.history.push('/profile');
        }
    };
    render() {
        return (
            <Fragment>
                <NavBar {...this.props}/>

                <div className="container mt-5">
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div className="card card-signin mt-5 my-4">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><b>Edit Profile</b></h5>
                                        <div className="md-form">
                                            <i className="fas fa-user prefix white-text"> </i>
                                            <input onChange={(e) => this.props.changeInput(e)} type="text"
                                                   name="fullnameUser" id="orangeForm-nama" placeholder="full name"
                                                   className="form-control" required/>
                                        </div>
                                        <br/>
                                        <div className="md-form">
                                            <i className="fas fa-address-book prefix white-text"> </i>
                                            <input onChange={(e) => this.props.changeInput(e)} type="text"
                                                   name="addressUser" id="orangeForm-address" placeholder="address"
                                                   className="form-control" required/>
                                        </div>
                                        <br/>
                                        <div className="md-form">
                                            <i className="fas fa-phone prefix white-text"> </i>
                                            <input onChange={(e) => this.props.changeInput(e)} type="text"
                                                   name="contactUser" id="orangeForm-contact" placeholder="contact"
                                                   className="form-control" required/>
                                        </div>
                                        <br/>
                                        <div className="md-form">
                                            <i className="fas fa-bank prefix white-text"> </i>
                                            <input onChange={(e) => this.props.changeInput(e)} type="text"
                                                   name="accountNumberUser" id="orangeForm-acccnumb" placeholder="account number"
                                                   className="form-control" required/>
                                        </div>
                                        <br/>
                                        <div className="md-form">
                                            <i className="fas fa-file-image-o prefix white-text"> </i>
                                            <input onChange={(e) => this.props.changeInput(e)} type="text"
                                                   name="avatarUser" id="orangeForm-avatar" placeholder="user avatar"
                                                   className="form-control" required/>
                                        </div>
                                        <br/>
                                        <div className="text-center">
                                            <button onClick={() => this.postEditProfile()}
                                                    className="btn btn-primary btn-lg btn-block my-button">Edit Profile
                                            </button>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.user,
        login: state.user.is_login,
        visible: state.user.visible,
        info: state.user.infos,
        trans: state.transaction,
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    doRegister, closeAlert, doEditProfile, doSignOut
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditPage);