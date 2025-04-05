import React, { useState } from "react";

import { Layout } from "antd";
import { COLORS } from "../constants/style/colors";
import Header from "./header";
import Sidebar from "./sidebar";
import TemplateFooter from "./footer";
import { ProtectedRouterWrapper } from "../constants/style/common.styled";
import RoutesContainer from "../routes/routesContainer";

const { Content } = Layout;

const Template: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout>
        <Sidebar collapsed={collapsed} />

        <Layout>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />

          <Content
            style={{
              padding: 24,
              minHeight: "calc(-130px + 100vh)",
              background: COLORS.backgroundColor,
            }}
          >
            <ProtectedRouterWrapper>
              <RoutesContainer />
            </ProtectedRouterWrapper>
          </Content>
          <TemplateFooter />
        </Layout>
      </Layout>
    </>
  );
};

export default Template;
