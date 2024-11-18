import React from "react";
import { Menu } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { AiOutlineFileText, AiOutlineGlobal } from "react-icons/ai";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <a href="/" className="navbar-link">
          MyLogo
        </a>
      </div>

      {/* Social Icons Section */}
      <Menu mode="horizontal" className="navbar-menu">
        <Menu.Item key="github" icon={<GithubOutlined />}>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Menu.Item>
        <Menu.Item key="linkedin" icon={<LinkedinOutlined />}>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Menu.Item>
        <Menu.Item key="resume" icon={<AiOutlineFileText />}>
          <a
            href="https://yourwebsite.com/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </Menu.Item>
        <Menu.Item key="portfolio" icon={<AiOutlineGlobal />}>
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </Menu.Item>
        <Menu.Item key="contact" icon={<MailOutlined />}>
          <a href="mailto:youremail@example.com">Contact</a>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
