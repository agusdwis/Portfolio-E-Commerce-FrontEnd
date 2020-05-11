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

export const doRegister = () => {
    return async (dispatch, getState) => {
        const bodyRequest= {
            username: getState().user.namaUser,
            password: getState().user.passwordUser,
            email: getState().user.emailUser
        };

        const headers = {'content-type': 'application/json', 'Access-Control-Allow-Origin':'*'};

        let res = await axios.post('http://0.0.0.0:5000/users/login', headers, bodyRequest);

        console.log("===================", res.data);



        // let register = {
        //     method:'post',
        //     url:'https://cors-anywhere.herokuapp.com/https://localhost:5000/users/register',
        //     headers: headers,
        //     params : bodyRequest
        // };

        // await axios.post('https://localhost:5000/users/register', bodyRequest)
        //     .then(async (response) => {
        //         if (response.data.hasOwnProperty('password')) {
        //             console.log(response);
        //             dispatch({
        //                 type: "SUCCESS_REGISTER",
        //                 payload: response.data});
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });


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


