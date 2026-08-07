import styled from "styled-components";

import Button from "@/components/Button";
import ButtonLink from "@/components/Button/ButtonLink";
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
  const imageUrl = `/images/products/${product.image}`;

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
            <ButtonLink to="/products" variant="outline" size="medium">
              Menu
            </ButtonLink>

            <Button size="medium">Add to Cart</Button>
          </Actions>
        </Info>

        {product.image && <ProductImage src={imageUrl} alt={product.name} />}
      </Content>
    </Container>
  );
}

export default ProductCardDetails;
