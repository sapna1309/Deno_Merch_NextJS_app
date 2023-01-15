import { Cart } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getCartAPI = async () => {
  let response: AxiosResponse<Cart[]> = await axios.get(
    "https://marmalade-canyon-doll.glitch.me/carts"
  );
  return response.data;
};

export const addItemToCartAPI = async (ProductId:number,quantity:number) => {
  let response: AxiosResponse<Cart> = await axios.post(
    "https://marmalade-canyon-doll.glitch.me/carts",{ProductId,quantity}
  );
  return response.data;
};
