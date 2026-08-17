import { useState } from "react";
import styled from "styled-components";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getProducts, deleteProduct } from "@/api/products";
import ProductCard from "@/components/Product/ProductCard";
import Button from "@/components/UI/Button";
import AddIcon from "@mui/icons-material/Add";
import ProductModal from "@/components/Modal/ProductModal";

import type { Product } from "@/types/product";

/*
      STYLES
*/

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

/*
      COMPONENT 
*/

function ProductsPage() {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const queryClient = useQueryClient();

  // Get all products
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  // Delete product
  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  const handleDelete = (id: Product["id"]) => {
    deleteProductMutation.mutate(id);
  };

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
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
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
