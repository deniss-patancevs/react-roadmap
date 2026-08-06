import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer/";

const Layout = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

function MainLayout() {
  return (
    <Layout>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </Layout>
  );
}

export default MainLayout;
