import { Button, Menu } from "antd";
import "./Navbar.scss";
import { NavbarLink } from "../../Content/Content";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <a href="/" className="navbar-link">
          DevPlayground
        </a>
      </div>

      {/* Social Icons Section */}
      <Menu mode="horizontal" className="navbar-menu">
        {NavbarLink.map((item) => (
          <Menu.Item key={item.title} icon={item.icon}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </Menu.Item>
        ))}
      </Menu>
      <Button type="primary">Submit Code</Button>
    </div>
  );
};

export default Navbar;
