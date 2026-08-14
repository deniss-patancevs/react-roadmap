import styled from "styled-components";
import ProductCartItem from "@/components/Cart/ProductCartItem";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { decreaseQuantity, increaseQuantity } from "@/features/cart/cartSlice";

// Styles
const Container = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.container.maxWidth};

  margin: 70px auto;
  padding: 0 32px;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 0 40px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 24px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 0 16px;
  }
`;

const Title = styled.h1`
  display: flex;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.subheading.fontSize};
  font-weight: ${({ theme }) => theme.typography.subheading.fontWeight};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    justify-content: center;
  }
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    gap: 24px;
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    gap: 20px;
    margin-top: 24px;
  }
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    min-height: 300px;
  }
`;

const EmptyMessage = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.subheading.fontSize};
  font-weight: ${({ theme }) => theme.typography.subheading.fontWeight};
  line-height: ${({ theme }) => theme.typography.subheading.lineHeight};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    font-size: 28px;
  }
`;

// Component
function ProductCartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <Container>
        <EmptyCart>
          <EmptyMessage> Your shopping cart is empty </EmptyMessage>
        </EmptyCart>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Shopping Cart</Title>
      <CartList>
        {cartItems.map(({ product, quantity }) => (
          <ProductCartItem
            key={product.id}
            product={product}
            quantity={quantity}
            onIncrease={() => dispatch(increaseQuantity(product.id))}
            onDecrease={() => dispatch(decreaseQuantity(product.id))}
          />
        ))}
      </CartList>
    </Container>
  );
}
export default ProductCartPage;
