import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/products";

export const useProductList = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
