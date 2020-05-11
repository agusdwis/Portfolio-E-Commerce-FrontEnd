import axios from "axios";

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
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
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
