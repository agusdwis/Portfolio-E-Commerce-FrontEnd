import axios from "axios"

const url = process.env.REACT_APP_PUBLIC_URL;
export const getAllProduct = () => {
    return async (dispatch) => {

        await axios
            .get(url + "/public/books", {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8"
                }
            })
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch({
                        type: "SUCCESS_GET_ALL_BOOKS",
                        payload: response.data});
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const getPopularProduct = () => {
    return async (dispatch) => {

        await axios
            .get(url + "/public/books/popular", {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8"
                }
            })
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch({
                        type: "SUCCESS_GET_POPULAR_BOOKS",
                        payload: response.data});
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const getNewProduct = () => {
    return async (dispatch) => {

        await axios
            .get(url + "/public/books/new", {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8"
                }
            })
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch({
                        type: "SUCCESS_GET_NEW_BOOKS",
                        payload: response.data});
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const getPromoProduct = () => {
    return async (dispatch) => {

        await axios
            .get(url + "/public/books/promo", {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8"
                }
            })
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch({
                        type: "SUCCESS_GET_PROMO_BOOKS",
                        payload: response.data});
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const getLimitedProduct = () => {
    return async (dispatch) => {

        await axios
            .get(url + "/public/books/limited", {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8"
                }
            })
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch({
                        type: "SUCCESS_GET_LIMITED_BOOKS",
                        payload: response.data});
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const getBookByID = (bookID) => {
    return async (dispatch) => {

        await axios
            .get(url + "/public/books/"+bookID, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8"
                }
            })
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch({
                        type: "SUCCESS_GET_ONE_BOOK",
                        payload: response.data});
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};
