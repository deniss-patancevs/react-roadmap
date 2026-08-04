import { Route, Routes } from "react-router";
import MainLayout from "../../layouts/MainLayout";
import HomePage from "../../pages/HomePage";

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default Router;
