import styled from "styled-components";
import { getProducts } from "@/api/products";
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";
import ProductCard from "@/components/Product/ProductCard";
import Button from "@/components/UI/Button";
import AddIcon from "@mui/icons-material/Add";
import ProductModal from "@/components/Modal/ProductModal";

// Styles
const Container = styled.main`
  max-width: ${({ theme }) => theme.layout.container.maxWidth};
  padding: 85px 70px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1199px) {
    padding: 60px 40px;
  }

  @media (max-width: 440px) {
    padding: 20px 20px;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Grid = styled.section`
  margin-top: 108px;
  display: grid;
  grid-template: auto / repeat(auto-fit, minmax(280px, 310px));
  gap: 41px;
  justify-content: center;

  @media (max-width: 1199px) {
    margin-top: 70px;
    gap: 21px;
  }

  @media (max-width: 440px) {
    margin-top: 30px;
  }
`;

// Component
function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

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

  const handleProductUpdated = (updatedProduct: Product) => {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product,
      ),
    );
  };

  const handleProductDeleted = (productId: number | string) => {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId),
    );
  };

  return (
    <Container>
      <Actions>
        <Button onClick={() => setIsAddProductModalOpen(true)}>
          <AddIcon sx={{ fontSize: 32 }} />
          <span>ADD NEW PRODUCT</span>
        </Button>
      </Actions>

      <Grid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductUpdated={handleProductUpdated}
            onProductDeleted={handleProductDeleted}
          />
        ))}
      </Grid>

      {/* Modal */}
      <ProductModal
        open={isAddProductModalOpen}
        mode="add"
        onClose={() => setIsAddProductModalOpen(false)}
        onSubmit={(product) => {
          setProducts((currentProducts) => [...currentProducts, product]);
          setIsAddProductModalOpen(false);
        }}
      />
    </Container>
  );
}

export default ProductsPage;
