import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class HealthSideMenu extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256, color: "black" }}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          <Link to="/body-wt">
            <Menu.Item
              icon={<AppstoreOutlined />}
              style={{ color: "black" }}
              key="3"
            >
              Body Weight
            </Menu.Item>
          </Link>
          <SubMenu
            key="sub1"
            icon={<ContainerOutlined />}
            title="General Health Info"
          >
            <Link to="/blood-sugar">
              <Menu.Item key="5" style={{ color: "black" }}>
                Blood Sugar
              </Menu.Item>
            </Link>
            <Link to="/blood-pressure">
              <Menu.Item key="6" style={{ color: "black" }}>
                Blood Pressure
              </Menu.Item>
            </Link>
            <Link to="/thyroid">
              <Menu.Item key="7" style={{ color: "black" }}>
                Thyroid
              </Menu.Item>
            </Link>
            <Link to="/oxygen-level">
              <Menu.Item key="8" style={{ color: "black" }}>
                Oxygen Level
              </Menu.Item>
            </Link>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default HealthSideMenu;
