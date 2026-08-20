import styled from "styled-components";

import QuantityCounter from "@/components/QuantityCounter";
import { calculateTotalPrice } from "@/features/cart/calculateTotalPrice";

import type { Product } from "@/types/product";

interface ProductCartProps {
  product: Product;
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

/*
      STYLES
*/

const Container = styled.article`
  width: 100%;
  min-height: 299px;

  display: grid;
  grid-template-columns: 220px minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 40px;
  padding: 32px;

  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.card};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    grid-template-columns: 180px minmax(0, 1fr) auto auto;
    gap: 28px;
    padding: 28px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    grid-template-columns: 140px minmax(0, 1fr) auto auto;
    gap: 16px;
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    grid-template-columns: 1fr;
    gap: 20px;

    min-height: auto;
    padding: 20px;

    justify-items: center;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 220px;
  height: 220px;

  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    max-width: 180px;
    height: 180px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    max-width: 160px;
    height: 160px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    width: 70%;
    max-width: 220px;
    height: auto;
  }
`;

const Info = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.subheading.fontSize};
  font-weight: ${({ theme }) => theme.typography.subheading.fontWeight};
  line-height: ${({ theme }) => theme.typography.subheading.lineHeight};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    text-align: center;
    font-size: 26px;
  }
`;

const Text = styled.p`
  margin: 16px 0 0;

  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
  font-weight: 600;
  line-height: ${({ theme }) => theme.typography.bodySmall.lineHeight};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    margin-top: 10px;
    text-align: center;
  }
`;

const CartActions = styled.div`
  display: contents;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    width: 100%;
    align-items: center;
  }
`;

const TotalPrice = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};

  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    font-size: 18px;
  }
`;

/*
      COMPONENT 
*/

function ProductCart({
  product,
  quantity,
  onDecrease,
  onIncrease,
}: ProductCartProps) {
  const total = calculateTotalPrice(product.price, quantity);

  return (
    <Container>
      <ProductImage
        src={`/images/products/${product.image}`}
        alt={product.name}
      />

      <Info>
        <Name>{product.name}</Name>

        <Text>Year: {product.year}</Text>
        <Text>RAM Memory: {product.ram}</Text>
        <Text>Warranty: {product.warranty}</Text>
        <Text>
          Price: {product.price}
          {product.currency}
        </Text>
      </Info>
      <CartActions>
        <QuantityCounter
          quantity={quantity}
          onIncrease={() => onIncrease()}
          onDecrease={() => onDecrease()}
        />
      </CartActions>
      <TotalPrice>
        Total: {total.toFixed(2)}
        {product.currency}
      </TotalPrice>
    </Container>
  );
}

export default ProductCart;
