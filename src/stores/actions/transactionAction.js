import axios from "axios";

export const doGetTransaction = () => {
    return async (dispatch, getState) => {
        let token;
        if (getState().user.token) {
            token = getState().user.token;
        } else {
            token = localStorage.getItem('token')
        }

        await axios({
            method: 'get',
            url: "http://0.0.0.0:5000/users/transaction",
            headers: {'Authorization':'Bearer ' + token}
        })
            .then(async (response) => {
                dispatch({
                    type: "SUCCESS_GET_TRANSACTION",
                    payload: response.data[0]});

            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const doPostTransaction = (bookID) => {
    return async (dispatch, getState) => {
        let token;
        if (getState().user.token) {
            token = getState().user.token;
        } else {
            token = localStorage.getItem('token')
        }

        const bodyRequest={
            "book_id": bookID,
            "qty": getState().user.order_qty
        };

        const myJSON = JSON.stringify(bodyRequest);

        await axios
            .post("http://0.0.0.0:5000/users/transaction", myJSON, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",
                    'Authorization':'Bearer ' + token
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
                    type: "ERROR_POST",
                })
            });
    };
};


export const doDeleteTransaction = (bookID) => {
    return async (dispatch, getState) => {
        let token;
        if (getState().user.token) {
            token = getState().user.token;
        } else {
            token = localStorage.getItem('token')
        }

        await axios
            .delete("http://0.0.0.0:5000/users/transaction/" + bookID, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",
                    'Authorization':'Bearer ' + token
                }
            })
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch({
                        type: "SUCCESS_DELETE",
                        payload: response.data});
                }
            })
            .catch(function (error) {
                dispatch({
                    type: "ERROR_DELETE",
                })
            });
    };
};

