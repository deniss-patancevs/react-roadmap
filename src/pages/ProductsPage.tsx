import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/api/products";
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
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

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
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>

      {/* Modal */}
      <ProductModal
        open={isAddProductModalOpen}
        mode="add"
        onClose={() => setIsAddProductModalOpen(false)}
      />
    </Container>
  );
}

export default ProductsPage;
