/// <reference path="home.js" />
import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { FaUser, FaPhone } from 'react-icons/fa';
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarHeader,
    SubMenu,
} from "react-pro-sidebar";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
        <header>
          
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white  box-shadow " >
          <Container>
                    <NavbarBrand href="https://www.ridecycle.ca">  <img className="site-header__logo-image" src="//cdn.shopify.com/s/files/1/0378/6981/3895/files/cycle_2_x60.png?v=1610941072" srcset="//cdn.shopify.com/s/files/1/0378/6981/3895/files/cycle_2_x60.png?v=1610941072 1x, //cdn.shopify.com/s/files/1/0378/6981/3895/files/cycle_2_x60@2x.png?v=1610941072 2x"
                        alt="Ridecycle Ebikes" itemprop="logo"></img></NavbarBrand>
                    <div className="logo">

                    </div>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/"><FaUser/></NavLink>
                </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/counter"><FaPhone/></NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
