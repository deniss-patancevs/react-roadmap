import { useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectCartItemById } from "@/features/cart/cartSelectors";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/features/cart/cartSlice";

import ProductModal from "@/components/Modal/ProductModal";
import AddToCartModal from "@/components/Modal/AddToCartModal";
import Button from "@/components/UI/Button";
import QuantityCounter from "@/components/QuantityCounter";
import ProductMenuButton from "@/components/Product/ProductMenuButton";

import type { Product } from "@/types/product";

interface ProductCardDetailsProps {
  product: Product;
}

const Container = styled.article`
  width: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 64px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;

  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.subheading.fontSize};
  font-weight: ${({ theme }) => theme.typography.subheading.fontWeight};
  line-height: ${({ theme }) => theme.typography.subheading.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.subheading.letterSpacing};
`;

const Description = styled.p`
  margin: 32px 0 0;

  font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.bodySmall.fontWeight};
  letter-spacing: ${({ theme }) => theme.typography.bodySmall.letterSpacing};
  line-height: 30px;

  color: ${({ theme }) => theme.colors.secondaryText};
`;

const Specifications = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
  margin-top: 24px;
`;

const Specification = styled.span`
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.title.letterSpacing};
`;

const FeaturesSection = styled.section`
  margin-top: 40px;
`;

const FeaturesTitle = styled.h2`
  margin: 0;

  font-size: ${({ theme }) => theme.typography.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.title.letterSpacing};
`;

const FeaturesList = styled.ul`
  margin: 16px 0 0;
  padding-left: 24px;
`;

const Feature = styled.li`
  font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.bodySmall.fontWeight};
  letter-spacing: ${({ theme }) => theme.typography.bodySmall.letterSpacing};
  line-height: 26px;
`;

const Price = styled.p`
  margin: 24px 0 0;

  font-size: ${({ theme }) => theme.typography.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};
  letter-spacing: ${({ theme }) => theme.typography.title.letterSpacing};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
`;

const Actions = styled.div`
  display: flex;
  gap: 35px;
  margin-top: 40px;
`;

const ProductImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
`;

function ProductCardDetails({ product }: ProductCardDetailsProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddToCartOpen, setIsAddToCartOpen] = useState(false);

  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) =>
    selectCartItemById(state, product.id),
  );

  const quantity = cartItem?.quantity ?? 0;
  const imageUrl = `/images/products/${product.image || "default.png"}`;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAddToCartOpen(true);
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrease = () => {
    if (quantity === 1) {
      dispatch(removeFromCart(product.id));
      return;
    }
    dispatch(decreaseQuantity(product.id));
  };

  return (
    <Container>
      <Content>
        <Info>
          <Title>{product.name}</Title>

          {product.description_full && (
            <Description>{product.description_full}</Description>
          )}

          {(product.year || product.ram || product.warranty) && (
            <Specifications>
              {product.year && (
                <Specification>Year: {product.year}</Specification>
              )}

              {product.ram && <Specification>RAM: {product.ram}</Specification>}

              {product.warranty && (
                <Specification>
                  Warranty: {product.warranty} years
                </Specification>
              )}
            </Specifications>
          )}

          {product.features?.length > 0 && (
            <FeaturesSection>
              <FeaturesTitle>Features</FeaturesTitle>

              <FeaturesList>
                {product.features.map((feature) => (
                  <Feature key={feature}>{feature}</Feature>
                ))}
              </FeaturesList>
            </FeaturesSection>
          )}

          {product.price !== undefined && (
            <Price>
              {product.price} {product.currency}
            </Price>
          )}

          <Actions>
            <ProductMenuButton
              onEdit={() => setIsEditModalOpen(true)}
              onDelete={() => console.log("delete")}
            />

            {quantity === 0 ? (
              <Button size="medium" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            ) : (
              <QuantityCounter
                quantity={quantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            )}
          </Actions>
        </Info>

        <ProductImage src={imageUrl} alt={product.name} />
      </Content>

      {/* Modal */}
      <ProductModal
        key={`${product.id}-${isEditModalOpen}`}
        open={isEditModalOpen}
        mode="edit"
        product={product}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={(updatedProduct) => {
          console.log("Updated product:", updatedProduct);
          setIsEditModalOpen(false);
        }}
      />
      <AddToCartModal
        open={isAddToCartOpen}
        onClose={() => setIsAddToCartOpen(false)}
      />
    </Container>
  );
}

export default ProductCardDetails;
