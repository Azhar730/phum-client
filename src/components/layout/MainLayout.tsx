import { Layout, Menu, MenuProps } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Content, Footer, Sider,Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: 1,
    label: "Dashboard",
  },
  {
    key: 2,
    label: "Profile",
  },
  {
    key: 3,
    label: "User Management",
    children: [
      {
        key: 11,
        label: "Admin",
      },
      {
        key: 12,
        label: "Faculty",
      },
      {
        key: 13,
        label: "Student",
      },
    ],
  },
];
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Link
          to={"/"}
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px",
            fontSize:"24px",
          }}
        >
          PH University
        </Link>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 ,backgroundColor:"yellowgreen"}} />
        <Content style={{border:"2px solid red"}}>
          <Outlet/>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
