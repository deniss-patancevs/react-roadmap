import { Route, Routes } from "react-router";
import MainLayout from "../../layouts/MainLayout";
import HomePage from "../../pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import ProductsPage from "@/pages/ProductsPage";

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
