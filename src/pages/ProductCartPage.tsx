import styled from "styled-components";

import ProductCartItem from "@/components/Cart/ProductCartItem";

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

function ProductCartPage() {
  const product = {
    id: 1,
    name: "Smartwatch",
    price: 199.99,
    currency: "€",
    year: 2022,
    ram: "1GB",
    warranty: 2,
    description_short:
      "Stay connected on the go with this sleek and versatile smartwatch.",
    description_full:
      "This smartwatch offers a range of features including fitness tracking, notifications, and voice commands. Its long-lasting battery and durable design make it perfect for everyday wear.",
    features: [
      "Fitness tracking",
      "Notifications",
      "Voice commands",
      "Long battery life",
      "Durable design",
    ],
    image: "smartwatch.png",
    stock: 10,
  };
  const quantity = 1;
  return (
    <Container>
      <Title>Shopping Cart</Title>

      <CartList>
        <ProductCartItem
          product={product}
          quantity={quantity}
          onDecrease={() => console.log("decrease")}
          onIncrease={() => console.log("increase")}
        />
      </CartList>
    </Container>
  );
}

export default ProductCartPage;
