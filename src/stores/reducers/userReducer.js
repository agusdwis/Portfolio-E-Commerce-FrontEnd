const initialState = {
    username: "",
    name: "",
    password: "",
    email: "",
    contact: "",
    address: "",
    accountNumber:"",
    avatarURL:"",
    token: "",
    status: false,
    status_edit: false,

    namaUser: "",
    passwordUser: "",
    emailUser: "",
    fullnameUser:"",
    addressUser: "",
    contactUser: "",
    accountNumberUser:"",
    avatarUser:"",

    is_login: false,
    visible: false,
    reg_error: false,
    reg_success: false,
    infos: [],

    order_qty: "",
    courier:"",
    payment_method:"",
};

export default function userReducer(userState = initialState, action) {
    switch (action.type) {
        case "CHANGE_INPUT_USER":
            return {
                ...userState,
                [action.payload.target.name]: action.payload.target.value,
            };
        case "SUCCESS_LOGIN":
            return {
                ...userState,
                token: action.payload.token,
                is_login: true,
            };
        case "SUCCESS_GET_PROFILE":
            return {
                ...userState,
                infos: action.payload
            };
        case "SUCCESS_REGISTER":
            return {
                ...userState,
                infos: action.payload,
                username: action.payload.username,
                password: action.payload.password,
                email: action.payload.email,
                status: action.payload.status,
                reg_success: true,
                visible: true,
                reg_error: false
            };
        case "SUCCESS_EDIT_PROFILE":
            return {
                ...userState,
                username: action.payload.username,
                name: action.payload.name,
                password: action.payload.password,
                email: action.payload.email,
                contact: action.payload.contact,
                address: action.payload.address,
                avatarURL: action.payload.avatar,
                accountNumber: action.payload.account_number,
                status_edit: true
            };
        case "ERROR_REGISTER":
            return {
                ...userState,
                reg_error: true,
                visible: true
            };
        case "SUCCESS_LOGOUT":
            return {
                ...userState,
                is_login: false,
            };
        case "CLOSE_ALERT":
            return {
                ...userState,
                visible: false,
                reg_error: false,
                reg_success: false
            };
        default:
            return userState;
    }
}
