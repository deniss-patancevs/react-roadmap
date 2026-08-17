import { useParams } from "react-router";
import styled from "styled-components";

import ProductCardDetails from "@/components/Product/ProductCardDetails";
import { useProductDetails } from "@/features/products/hooks/useProductDetails";
import { useDeleteProduct } from "@/features/products/hooks/useDeleteProduct";

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

  // Get product by ID
  const { data: product, isLoading, isError, error } = useProductDetails(id);

  // Delete product
  const deleteProductMutation = useDeleteProduct();

  const handleDelete = (id: Product["id"]) => {
    deleteProductMutation.mutate(id);
  };

  // State

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
