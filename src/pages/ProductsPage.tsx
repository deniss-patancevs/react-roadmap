import { getProducts } from "@/api/products";
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";

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
    <main>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>
            {product.price} {product.currency}
          </p>
        </div>
      ))}
    </main>
  );
}

export default ProductsPage;
