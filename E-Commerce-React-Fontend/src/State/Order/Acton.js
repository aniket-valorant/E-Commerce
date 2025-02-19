import { api } from "../../Config/api"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"

export const createOrder = ({address, navigate}) => async (dispatch) => {
    dispatch({type: CREATE_ORDER_REQUEST});
    try {
        const {data} = await api.post( `/api/orders/`, address);

        if(data._id){
            navigate(`/checkout?step=3&order_id=${data._id}`);
        }
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data,
        })
        return data;
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.message,
        })
    }
}

export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({type: GET_ORDER_BY_ID_REQUEST});
    try {
        const {data} = await api.get( `/api/orders/${orderId}`);
        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.message,
        })
    }
}