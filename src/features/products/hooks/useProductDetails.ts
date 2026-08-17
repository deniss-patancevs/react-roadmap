import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/api/products";

export const useProductDetails = (id?: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id!),
    enabled: Boolean(id),
  });
};
