import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import "./Screen.scss";
import { Layout } from "antd";
import Navbar from "../Navbar/Navbar";

export default function Screen() {
  return (
    <div className="screen">
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar/>
        <Layout>
          <Sidebar />
          {/* <Dashboard /> */}
        </Layout>
      </Layout>
    </div>
  );
}
