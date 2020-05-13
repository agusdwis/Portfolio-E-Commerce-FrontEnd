import React, {Component, Fragment} from "react";
import Navbar from "../components/NavBarComp";
import {Link} from 'react-router-dom';
import {changeInputUser, doRegister, closeAlert} from "../stores/actions/userAction";
import {connect} from "react-redux";

import '../assets/styles/FormInput.css';
import StatusAlert from "../components/Alerts/StatusAlertComp";

class SignUp extends Component {
    postRegister = async () => {
        await this.props.doRegister();

        console.log(this.props.data.reg_error);

        if(this.props.data.reg_error){
            this.props.history.push('/register');
        } else {
        this.props.history.push("/login")
        }
    };


    render() {
        console.log(this.props.data.reg_error);
        return (
            <Fragment>
                <div className="my-navbar">
                    <Navbar/>
                </div>

                <div className="container mt-5">
                    {this.props.data.reg_error ?
                        <StatusAlert {...this.props}
                                         close={() => this.props.closeAlert()}
                                         severity={'error'}
                                         status={'Failed'}
                                         todo={'Register'}
                        />
                        :
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div className="card card-signin mt-5 my-4">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><b>Sign Up</b></h5>
                                        <div className="md-form">
                                            <i className="fas fa-user prefix white-text"> </i>
                                            <input onChange={(e) => this.props.changeInput(e)} type="text"
                                                   name="namaUser" id="orangeForm-name" placeholder="username"
                                                   className="form-control" required/>
                                        </div>
                                        <br/>
                                        <div className="md-form">
                                            <i className="fas fa-lock prefix white-text"> </i>
                                            <input onChange={(e) => this.props.changeInput(e)} type="password"
                                                   name="passwordUser" id="orangeForm-pass" placeholder="password"
                                                   className="form-control" required/>
                                        </div>
                                        <br/>
                                        <div className="md-form">
                                            <i className="fas fa-envelope prefix white-text"> </i>
                                            <input onChange={(e) => this.props.changeInput(e)} type="text"
                                                   name="emailUser" id="orangeForm-email" placeholder="email"
                                                   className="form-control" required/>
                                        </div>
                                        <br/>
                                        <div className="text-center">
                                            <button onClick={() => this.postRegister()}
                                                    className="btn btn-primary btn-lg btn-block my-button">SignUp
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
                    }
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
    };
};

const mapDispatchToProps = {
    changeInput: (e) => changeInputUser(e),
    doRegister, closeAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);