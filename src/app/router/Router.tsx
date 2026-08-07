import { Route, Routes } from "react-router";
import MainLayout from "../../layouts/MainLayout";
import HomePage from "../../pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import ProductsPage from "@/pages/ProductsPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import ProductCartPage from "@/pages/ProductCartPage";

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<ProductCartPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
