import {
  KeyOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Flex, Layout, MenuProps, Typography } from "antd";

import { useEffect, useState } from "react";
import { COLORS } from "../../constants/style/colors";

const { Title, Text } = Typography;

interface IHeaderProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const { Header: AntHeader } = Layout;

const Header = ({ collapsed, setCollapsed }: IHeaderProps) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 756);
    };

    window.addEventListener("resize", handleResize);

    setIsMobileView(window.innerWidth < 756);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Flex>
          <KeyOutlined style={{ marginRight: "8px" }} />
          <Text>Change Password</Text>
        </Flex>
      ),
    },
    {
      key: "2",
      label: (
        <Flex
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LogoutOutlined style={{ marginRight: "8px" }} />
          <Text>Logout</Text>
        </Flex>
      ),
    },
  ];

  return (
    <AntHeader
      style={{
        background: COLORS.White,
        paddingInline: "0 20px ",
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Flex justify="space-between" align="center" wrap="nowrap">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Flex justify="flex-end" align="center" gap={10}>
          {!isMobileView && (
            <Title level={5} style={{ margin: 0 }}>
              Welcome, Sushil
            </Title>
          )}

          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
          >
            <UserSwitchOutlined
              style={{
                cursor: "pointer",
                fontSize: 18,
                marginRight: "1.5rem",
                marginLeft: "0.5rem",
              }}
            />
          </Dropdown>
        </Flex>
      </Flex>
    </AntHeader>
  );
};

export default Header;
