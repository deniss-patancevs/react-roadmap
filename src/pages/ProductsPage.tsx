import styled from "styled-components";
import { getProducts } from "@/api/products";
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";
import ProductCard from "@/components/Product/ProductCard";
import Button from "@/components/Button";
import plusIcon from "@/assets/icons/plusIcon.svg";

// Styles
const Container = styled.main`
  max-width: ${({ theme }) => theme.layout.container.maxWidth};
  padding: 85px 70px;
  margin-left: auto;
  margin-right: auto;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

const Grid = styled.section`
  margin-top: 108px;
  display: grid;
  grid-template-columns: repeat(4, 310px);
  gap: 21px;
  justify-content: space-between;
`;

// Component
function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <Actions>
        <Button>
          <ButtonIcon src={plusIcon} alt="" />
          <span>ADD NEW PRODUCT</span>
        </Button>
      </Actions>

      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
}

export default ProductsPage;
