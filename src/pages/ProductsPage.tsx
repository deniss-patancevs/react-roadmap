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
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
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
