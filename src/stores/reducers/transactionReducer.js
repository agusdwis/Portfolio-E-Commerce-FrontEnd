const initialState = {
    transaction: [],
    total_qty: 0,
    total_price:0,
    transaction_detail:[],
    order_book_id:'',
    order_qty:'',
    payment_method:1,
    courier:1,
    history:[],
    trans_id:'',
    allHistory:[]
};

export default function transactionReducer(tranState = initialState, action) {
    switch (action.type) {
        case "SUCCESS_GET_TRANSACTION":
            return {
                ...tranState,
                transaction: action.payload,
                total_qty: action.payload.transaksi.total_qty,
                total_price: action.payload.transaksi.total_price,
                transaction_detail: action.payload.transaction_detail,
                trans_id: action.payload.transaksi.id
            };
        case "SUCCESS_POST_HISTORY":
            return {
              ...tranState,
                history: action.payload
            };
        case "SUCCESS_GET_HISTORY":
            return {
                ...tranState,
                allHistory: action.payload
            };
            
        case "CHANGE_INPUT_CART":
            return { ...tranState, order_qty: action.payload };
        case "CHANGE_INPUT_PAYMENT":
            return { ...tranState, payment_method: action.payload.target.value, };

        case "CHANGE_INPUT_SHIPPING":
            return { ...tranState, courier: action.payload.target.value, };

        default:
            return tranState;
    }
}
