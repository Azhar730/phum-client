import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";

const Sidebar = () => {
  return (
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
          fontSize: "24px",
        }}
      >
        PH University
      </Link>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItemsGenerator(adminPaths, "admin")}
      />
    </Sider>
  );
};

export default Sidebar;
