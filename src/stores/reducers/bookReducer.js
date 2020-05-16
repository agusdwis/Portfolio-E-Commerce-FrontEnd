const initialState = {
    listBooks: [],
    listPopular: [],
    listNew: [],
    listPromo: [],
    listLimited:[],
    oneBook:[]
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
        case "SUCCESS_GET_LIMITED_BOOKS":
            return {
                ...bookState,
                listLimited: action.payload
            };
        case "SUCCESS_GET_ONE_BOOK":
            return { ...bookState,  oneBook: action.payload};

        default:
            return bookState;
    }
}
