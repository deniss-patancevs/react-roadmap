import styled from "styled-components";
import Button, { ButtonLink } from "@/components/UI/Button";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

// Styles
const Card = styled.article`
  width: 310px;
  height: 405px;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const Header = styled.header`
  padding: 14px 16px;
`;

const Name = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

const Price = styled.p`
  margin: 4px 0 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 194px;
  object-fit: contain;
`;

const Description = styled.p`
  margin: 0;
  padding: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 23px;

  padding: 16px;
`;

function ProductCard({ product }: ProductCardProps) {
  const imgUrl = `/images/products/${product.image}`;
  return (
    <Card>
      <Header>
        <Name>{product.name}</Name>

        <Price>
          {product.price}
          {product.currency}
        </Price>
      </Header>

      <ProductImage src={imgUrl} alt={product.name} />

      <Description>{product.description_short}</Description>

      <Actions>
        <ButtonLink
          to={`/products/${product.id}`}
          variant="outline"
          size="small"
        >
          Details
        </ButtonLink>

        <Button variant="outline" size="small">
          Menu
        </Button>
      </Actions>
    </Card>
  );
}

export default ProductCard;
