import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/api/products";
import type { Product } from "@/types/product";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: Product["id"]) => deleteProduct(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
};
