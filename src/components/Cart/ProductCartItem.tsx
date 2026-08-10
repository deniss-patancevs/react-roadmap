import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
// import Button from "@/components/Button";
import type { Product } from "@/types/product";

interface ProductCartProps {
  product: Product;
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const Container = styled.article`
  width: 1296px;
  height: 299px;
  display: grid;
  grid-template-columns: 220px auto auto auto;
  align-items: center;
  gap: 40px;
  padding: 32px;

  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const ProductImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.subheading.fontSize};
  font-weight: ${({ theme }) => theme.typography.subheading.fontWeight};
  line-height: ${({ theme }) => theme.typography.subheading.lineHeight};
`;

const Text = styled.p`
  margin: 16px 0 0;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
  font-weight: 600;
  line-height: ${({ theme }) => theme.typography.bodySmall.lineHeight};
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
`;

const CounterButton = styled.button<{
  $variant?: "increase";
}>`
  width: 45px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  cursor: pointer;
  background: ${({ $variant, theme }) =>
    $variant === "increase" ? theme.colors.primary : "transparent"};
  color: ${({ $variant, theme }) =>
    $variant === "increase" ? theme.colors.background : theme.colors.primary};
  font-size: 24px;
`;

const Quantity = styled.span`
  width: 45px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 27px;
  font-size: ${({ theme }) => theme.typography.heading.fontSize};
  font-weight: ${({ theme }) => theme.typography.heading.fontWeight};
`;

const TotalPrice = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};
`;

function ProductCart({
  product,
  quantity,
  onDecrease,
  onIncrease,
}: ProductCartProps) {
  const total = product.price * quantity;

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
      <Counter>
        <CounterButton onClick={onDecrease}>
          {quantity === 1 ? <DeleteIcon /> : <RemoveIcon />}
        </CounterButton>

        <Quantity>{quantity}</Quantity>

        <CounterButton $variant="increase" onClick={onIncrease}>
          <AddIcon />
        </CounterButton>
      </Counter>
      <TotalPrice>
        Total: {total.toFixed(2)}
        {product.currency}
      </TotalPrice>
    </Container>
  );
}

export default ProductCart;
