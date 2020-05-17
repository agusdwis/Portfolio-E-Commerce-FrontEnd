import React, {Component, Fragment} from "react";
import Navbar from "../components/NavBarComp";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import  {doLogin, changeInputUser, closeAlert} from '../stores/actions/userAction'


import '../assets/styles/FormInput.css'
import StatusAlert from "../components/Alerts/StatusAlertComp";

class SignIn extends Component {
    postLogin = async () => {
        await this.props.doLogin();
        const is_login = this.props.login;
        if (is_login) {
            this.props.history.push("/profile");
        }
    };

    render() {
        return (
            <Fragment>
                <div className="my-navbar">
                    <Navbar{...this.props}/>
                </div>

                <div className="container mt-5">
                    {this.props.data.reg_success ?
                        <StatusAlert {...this.props}
                                         close={() => this.props.closeAlert()}
                                         severity={'success'}
                                         status={'Completed'}
                                         todo={'Login'}
                        />
                        :
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div className="card card-signin mt-5 my-4">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><b>Sign In</b></h5>
                                        <div className="md-form">
                                            <i className="fas fa-user prefix white-text"> </i>
                                            <input onChange={(e) => this.props.changeInput(e)} type="text"
                                                   name="namaUser" id="orangeForm-name" placeholder="username"
                                                   className="form-control"/>
                                        </div>
                                        <br/>
                                        <div className="md-form">
                                            <i className="fas fa-lock prefix white-text"> </i>
                                            <input onChange={(e) => this.props.changeInput(e)} type="password"
                                                   name="passwordUser" id="orangeForm-pass" placeholder="password"
                                                   className="form-control"/>
                                        </div>
                                        <br/>
                                        <div className="text-center">
                                            <button onClick={() => this.postLogin()}
                                                    className="btn btn-primary btn-lg btn-block my-button">Login
                                            </button>
                                        </div>
                                        <br/>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/register" className="rotate-btn text-primary" tabIndex="-1"
                                                  data-card="my-card">Belum punya akun? Daftar di sini!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.user,
        info: state.user.infos,
        login: state.user.is_login,
        visible: state.user.visible,
        trans: state.transaction,
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    doLogin, closeAlert

};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);