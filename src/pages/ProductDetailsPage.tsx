import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import styled from "styled-components";

import { getProduct, deleteProduct } from "@/api/products";
import ProductCardDetails from "@/components/Product/ProductCardDetails";

import type { Product } from "@/types/product";

/*
      STYLES
*/

const Container = styled.main`
  max-width: ${({ theme }) => theme.layout.container.maxWidth};
  margin: 70px auto;
  padding: 45px 106px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.card};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    margin: 70px 32px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    margin: 70px 32px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    margin: 0;
    padding: 10px 32px;
  }
`;

/*
      COMPONENT 
*/

function ProductDetailsPage() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  // Get product by ID
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id!),
    enabled: Boolean(id),
  });

  // Delete product
  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  const handleDelete = (id: Product["id"]) => {
    deleteProductMutation.mutate(id);
  };

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (isError) {
    return <Container>{error.message}</Container>;
  }

  if (!product) {
    return <Container>Product not found.</Container>;
  }

  return (
    <Container>
      <ProductCardDetails product={product} onDelete={handleDelete} />
    </Container>
  );
}

export default ProductDetailsPage;
