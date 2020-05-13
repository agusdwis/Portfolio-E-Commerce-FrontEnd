import axios from "axios";

export const doRegister = () => {
    return async (dispatch, getState) => {
        const bodyRequest= {
            username: getState().user.namaUser,
            password: getState().user.passwordUser,
            email: getState().user.emailUser
        };

        if(!getState().user.namaUser || !getState().user.passwordUser || !getState().user.emailUser){
            dispatch({
                type: "ERROR_REGISTER",
            })
        }

        const myJSON = JSON.stringify(bodyRequest);

        await axios
            .post("http://localhost:5000/users/register", myJSON, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8"
                }
            })
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch({
                        type: "SUCCESS_REGISTER",
                        payload: response.data});
                }
            })
            .catch(function (error) {
                dispatch({
                    type: "ERROR_REGISTER",
                })
            });
    };
};

export const doEditProfile = () => {
    return async (dispatch, getState) => {
        const bodyRequest= {
            username: getState().user.namaUser,
            name: getState().user.fullnameUser,
            password: getState().user.passwordUser,
            address: getState().user.addressUser,
            contact: getState().user.contactUser,
        };

        const myJSON = JSON.stringify(bodyRequest);

        await axios
            .put("http://localhost:5000/users/info", myJSON, {
                headers: {
                    'Authorization':'Bearer ' + getState().user.token,
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",

                }
            })
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch({
                        type: "SUCCESS_EDIT_PROFILE",
                        payload: response.data});
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const doLogin = () => {
    return async (dispatch, getState) => {

        await axios({method:"post",
                url:"http://0.0.0.0:5000/users/login",
                params: {
                    username: getState().user.namaUser,
                    password: getState().user.passwordUser,
                }
            })
            .then(async (response) => {
                if (response.data.hasOwnProperty('token')) {
                    dispatch({
                        type: "SUCCESS_LOGIN",
                        payload: response.data});

                    localStorage.setItem("is_login", true);
                    localStorage.setItem("token", response.data.token)
                }

            })
            .catch(function (error) {
                console.log(error);
            });

    };
};

export const getProfile = (token) => {
    return async (dispatch) => {
        await axios({
            method: 'get',
            url: "http://0.0.0.0:5000/users/info",
            headers: {'Authorization':'Bearer ' + token}
        })
            .then(async (response) => {
                dispatch({
                    type: "SUCCESS_GET_PROFILE",
                    payload: response.data});

            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export const changeInputUser = (e) => {
    return {
        type: "CHANGE_INPUT_USER",
        payload: e,
    };
};

export const doSignOut = () => {
    return {
        type: "SUCCESS_LOGOUT",
    };
};

export const closeAlert = () => {
    return {
        type: "CLOSE_ALERT"
    }
};


