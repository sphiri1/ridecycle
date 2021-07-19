import React, { Component} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaGem, FaHeart } from 'react-icons/fa';
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarHeader,
    SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";


export class SideNavigation extends Component {
    static displayName = SideNavigation.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
            <ProSidebar style={{ height: "100vh" }} collapsed={this.state.collapsed}>
                <SidebarHeader>
                    <div style={{float:"right", margin:"auto"}} onClick={this.toggleNavbar}>
                        <AiOutlineMenu />
                    </div>
                </SidebarHeader>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}> Dashboard</MenuItem>
                    <MenuItem icon={<FaGem />}>Users</MenuItem>
                    <SubMenu title="Reports" icon={<FaHeart />}>
                        <MenuItem>Track Report</MenuItem>
                        <MenuItem>Inventory Report</MenuItem>
                        <MenuItem>Customer Report</MenuItem>
                    </SubMenu>
                    <SubMenu title="Account" icon={<FaHeart />}>
                        <MenuItem>Permissions</MenuItem>
                        <MenuItem>Settings</MenuItem>
                    </SubMenu>
                    <SubMenu title="Email" icon={<FaHeart />}>
                        <MenuItem>Notification</MenuItem>
                    </SubMenu>
                </Menu>
                </ProSidebar>
                </div>
        );
    }
}

