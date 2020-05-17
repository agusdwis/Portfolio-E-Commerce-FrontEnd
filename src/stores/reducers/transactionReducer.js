const initialState = {
    transaction: [],
    total_qty: 0,
    total_price:0,
    transaction_detail:[],
    order_book_id:'',
    order_qty:'',
};

export default function transactionReducer(tranState = initialState, action) {
    switch (action.type) {
        case "SUCCESS_GET_TRANSACTION":
            return {
                ...tranState,
                transaction: action.payload,
                total_qty: action.payload.transaksi.total_qty,
                total_price: action.payload.transaksi.total_price,
                transaction_detail: action.payload.transaction_detail
            };
            
        case "CHANGE_INPUT_CART":
            return { ...tranState, order_qty: action.payload }

        default:
            return tranState;
    }
}
