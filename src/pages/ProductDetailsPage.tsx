import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import { getProduct } from "@/api/products";
import ProductCardDetails from "@/components/Product/ProductCardDetails";
import type { Product } from "@/types/product";

const Container = styled.main`
  max-width: 1296px;
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

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function loadProduct() {
      if (!id) return;
      const data = await getProduct(id);

      setProduct(data);
    }

    loadProduct();
  }, [id]);

  if (!product) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <ProductCardDetails product={product} onProductUpdated={setProduct} />
    </Container>
  );
}

export default ProductDetailsPage;
