import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import { getProduct } from "@/api/products";
import ProductCardDetails from "@/components/Product/ProductCardDetails";
import type { Product } from "@/types/product";
// import { useAppSelector } from "@/app/store/hooks";
// import { selectCartItemById } from "@/features/cart/cartSelectors";

const Container = styled.main`
  max-width: 1296px;
  margin: 70px auto;
  padding: 45px 106px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  // const cartItem = useAppSelector((state) =>
  //   selectCartItemById(state, product.id),
  // );
  // const quantity = cartItem?.quantity ?? 0;

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
