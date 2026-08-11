import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router";

import { deleteProduct } from "@/api/products";
import { ButtonLink } from "@/components/UI/Button";
import ProductMenuButton from "@/components/Product/ProductMenuButton";
import ProductModal from "@/components/Modal/ProductModal";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onProductUpdated: (product: Product) => void;
  onProductDeleted: (productId: number | string) => void;
}

// Styles
const Card = styled.article`
  width: 310px;
  height: 405px;
  background: ${({ theme }) => theme.colors.background};
  overflow: visible;
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

const ProductLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 23px;

  padding: 16px;
`;

function ProductCard({
  product,
  onProductUpdated,
  onProductDeleted,
}: ProductCardProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const imageUrl = `/images/products/${product.image || "default.png"}`;
  const productUrl = `/products/${product.id}`;

  const handleDelete = async () => {
    try {
      await deleteProduct(product.id);
      onProductDeleted(product.id);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <Card>
      <ProductLink to={productUrl}>
        <Header>
          <Name>{product.name}</Name>

          <Price>
            {product.price}
            {product.currency}
          </Price>
        </Header>

        <ProductImage src={imageUrl} alt={product.name} />

        <Description>{product.description_short}</Description>
      </ProductLink>
      <Actions>
        <ButtonLink to={productUrl} variant="outline" size="small">
          Details
        </ButtonLink>

        <ProductMenuButton
          size="small"
          variant="outline"
          onEdit={() => setIsEditModalOpen(true)}
          onDelete={handleDelete}
        />
      </Actions>

      {/* Modal */}
      <ProductModal
        key={`${product.id}-${isEditModalOpen}`}
        open={isEditModalOpen}
        mode="edit"
        product={product}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={(updatedProduct) => {
          onProductUpdated(updatedProduct);
          setIsEditModalOpen(false);
        }}
      />
    </Card>
  );
}

export default ProductCard;
