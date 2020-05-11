import React, {Component, Fragment} from "react";
import Navbar from "../components/NavBarComp";
import {Link} from 'react-router-dom';

import '../assets/styles/FormInput.css'
import {changeInputUser, doRegister} from "../stores/actions/userAction";
import {connect} from "react-redux";

class SignUp extends Component {
    postRegister = async () => {
        await this.props.doRegister();
    };
    render() {
        return (
            <Fragment>
                <div className="my-navbar">
                    <Navbar/>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin mt-5 my-4">
                                <div className="card-body">
                                    <h5 className="card-title text-center"><b>Sign Up</b></h5>
                                    <div className="md-form">
                                        <i className="fas fa-envelope prefix white-text"> </i>
                                        <input onChange={(e) => this.props.changeInput(e)} type="text" name="emailUser" id="orangeForm-email" placeholder="email"
                                               className="form-control" />
                                    </div>
                                    <br/>
                                    <div className="md-form">
                                        <i className="fas fa-user prefix white-text"> </i>
                                        <input onChange={(e) => this.props.changeInput(e)} type="text" name="namaUser" id="orangeForm-name" placeholder="username"
                                               className="form-control" />
                                    </div>
                                    <br/>
                                    <div className="md-form">
                                        <i className="fas fa-lock prefix white-text"> </i>
                                        <input onChange={(e) => this.props.changeInput(e)} type="password" name="passwordUser" id="orangeForm-pass" placeholder="password"
                                               className="form-control" />
                                    </div>
                                    <br/>
                                    <div className="text-center">
                                        <button onClick={() => this.postRegister()} className="btn btn-primary btn-lg btn-block my-button">SignUp
                                        </button>
                                    </div>
                                    <br/>
                                    <div className="d-flex justify-content-center">
                                        <Link to="/login" className="rotate-btn text-primary" tabIndex="-1"
                                              data-card="my-card">Sudah punya akun? Login di sini!</Link>
                                    </div>
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
        namaUser: state.user.namaUser,
        passwordUser: state.user.passwordUser,
        login: state.user.is_login,
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    doRegister: doRegister,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);