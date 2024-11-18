import { Layout, Menu, Input } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import "./Sidebar.scss"
import { useEffect, useState } from 'react';
import SidebarData from "../../Content/Content"

const { Sider } = Layout;
const { Search } = Input;

const menuItems = [
  { key: '1', label: 'Stopwatch', icon: <HomeOutlined />, path: '/stopwatch' },
  { key: '2', label: 'MultiSelect', icon: <UserOutlined />, path: '/multiselect' },
  { key: '3', label: 'Settings', icon: <SettingOutlined />, path: '/settings' },
  { key: '4', label: 'About', icon: <InfoCircleOutlined />, path: '/about' },
];

const Sidebar = () => {
  const [filteredItems, setFilteredItems] = useState(SidebarData);
  const [collapsed, setCollapsed] = useState(false);

  const handleSearch = (value) => {
    console.log("Value",value)
    const filtered = SidebarData.filter((item) =>
      item.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <Sider collapsed={collapsed} onCollapse={setCollapsed} width={250}>
      <div style={{ padding: '16px' }}>
        <Search
          placeholder="Search menu"
          allowClear
          onSearch={handleSearch}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ marginBottom: '16px' }}
        />
      </div>
      <Menu theme="dark" mode="inline">
        {filteredItems.map((item) => (
          <Menu.Item key={item.name}>
            <Link to={item.route}>{item.id}. {item.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
