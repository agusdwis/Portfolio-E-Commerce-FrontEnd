import axios from "axios";

export const doGetTransaction = () => {
    return async (dispatch, getState) => {

        const myJSON = JSON.stringify(bodyRequest);

        await axios
            .post("http://localhost:5000/transaction", myJSON, {
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