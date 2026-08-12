import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import styled from "styled-components";

import { getProduct } from "@/api/products";
import ProductCardDetails from "@/components/Product/ProductCardDetails";

const Container = styled.main`
  max-width: 1296px;
  margin: 70px auto;
  padding: 45px 106px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

function ProductDetailsPage() {
  const { id } = useParams();

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
      <ProductCardDetails product={product} />
    </Container>
  );
}

export default ProductDetailsPage;
