import { Layout, Menu, Input } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import "./Sidebar.scss"
import { useState } from 'react';

const { Sider } = Layout;
const { Search } = Input;

const menuItems = [
  { key: '1', label: 'Home', icon: <HomeOutlined />, path: '/' },
  { key: '2', label: 'Profile', icon: <UserOutlined />, path: '/profile' },
  { key: '3', label: 'Settings', icon: <SettingOutlined />, path: '/settings' },
  { key: '4', label: 'About', icon: <InfoCircleOutlined />, path: '/about' },
];

const Sidebar = () => {
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [collapsed, setCollapsed] = useState(false);

  const handleSearch = (value) => {
    const filtered = menuItems.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} width={250}>
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
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;