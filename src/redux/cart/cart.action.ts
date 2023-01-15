import { getCartAPI, addItemToCartAPI } from "./cart.api";
import { AppDispatch } from "../store";
import { CART_LOADING, CART_ERROR, GET_CART, ADD_TO_CART } from "./cart.type";

export const getCart = ():any => async (dispatch: AppDispatch) => {
  dispatch({ type: CART_LOADING });
  try {
    let data = await getCartAPI();
    dispatch({ type: GET_CART, payload: data });
  } catch (e) {
    dispatch({ type: CART_ERROR });
  }
};

export const addITemToCart = (ProductId:number,quantity:number):any => async (dispatch: AppDispatch) => {
  dispatch({ type: CART_LOADING });
  try {
    let data = await addItemToCartAPI(ProductId,quantity);
    dispatch({ type: ADD_TO_CART, payload: data});
  } catch (e) {
    dispatch({ type: CART_ERROR });
  }
};
