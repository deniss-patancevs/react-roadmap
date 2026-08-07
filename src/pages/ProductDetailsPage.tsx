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

  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 6px;
`;

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    async function loadProduct() {
      const data = await getProduct(Number(id));

      setProduct(data);
    }

    loadProduct();
  }, [id]);

  if (!product) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <ProductCardDetails product={product} />
    </Container>
  );
}

export default ProductDetailsPage;
