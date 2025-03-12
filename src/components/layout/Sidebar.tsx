import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const userRole = {
  Admin: "admin",
  Faculty: "faculty",
  Student: "student",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  const role = user?.role;
  let sidebarItems;
  switch (role) {
    case userRole.Admin:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.Admin);
      break;
    case userRole.Faculty:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.Faculty);
      break;
    case userRole.Student:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.Student);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
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
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
