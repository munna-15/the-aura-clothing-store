import { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";

const useProduct = () => {
  return useContext(ProductContext);
};

export default useProduct;