import styled from "styled-components";
// import ButtonLink from "@/components/Button/ButtonLink";
import ProductCartItem from "@/components/Cart/ProductCartItem";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { decreaseQuantity, increaseQuantity } from "@/features/cart/cartSlice";

// Styles
const Container = styled.main`
  max-width: 1296px;

  margin: 70px auto;
`;

const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.subheading.fontSize};
  font-weight: ${({ theme }) => theme.typography.subheading.fontWeight};
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
`;

const EmptyMessage = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.subheading.fontSize};
  font-weight: ${({ theme }) => theme.typography.subheading.fontWeight};
  line-height: ${({ theme }) => theme.typography.subheading.lineHeight};
`;

// const ProductsLink = styled(ButtonLink)`
//   margin-top: 32px;
// `;

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
