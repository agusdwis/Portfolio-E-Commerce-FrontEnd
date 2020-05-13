const initialState = {
    listBooks: [],
    listPopular: [],
    listNew: [],
    listPromo: [],
};

export default function bookReducer(bookState = initialState, action) {
    switch (action.type) {
        case "SUCCESS_GET_ALL_BOOKS":
            return {
                ...bookState,
                listBooks: action.payload
            };
        case "SUCCESS_GET_POPULAR_BOOKS":
            return {
                ...bookState,
                listPopular: action.payload
            };
        case "SUCCESS_GET_NEW_BOOKS":
            return {
                ...bookState,
                listNew: action.payload
            };
        case "SUCCESS_GET_PROMO_BOOKS":
            return {
                ...bookState,
                listPromo: action.payload
            };

        default:
            return bookState;
    }
}
