  import {
  GithubOutlined,
  LinkedinOutlined,
  ExportOutlined,
  TwitterOutlined,
  ReadOutlined
} from "@ant-design/icons";

  // Define the data array
  const SidebarData = [
    {
      id: 1,
      component: "",
      code: "",
      name: "Stopwatch",
      route: "stopwatch",
    },
    {
      id: 2,
      component: "",
      code: "",
      name: "MultiSelect",
      route: "multiselect",
    },
    {
      id: 3,
      component: "",
      code: "",
      name: "Todo List",
      route: "todolist",
    },
    {
      id: 4,
      component: "",
      code: "",
      name: "Analogue Clock",
      route: "analogueclock",
    },
  ];
  
  // Export the data array
  export default SidebarData;
  
  // Define the NavbarLink array
  export const NavbarLink = [
    { title: "Github", url: "https://github.com", icon: <GithubOutlined /> },
    { title: "LinkedIn", url: "https://linkedin.com", icon: <LinkedinOutlined /> },
    { title: "Portfolio", url: "https://yourportfolio.com", icon: <ExportOutlined /> },
    { title: "Hashnode", url: "mailto:youremail@example.com", icon: <ReadOutlined /> },
    { title: "Twitter", url: "mailto:youremail@example.com", icon: <TwitterOutlined />},
  ];
  