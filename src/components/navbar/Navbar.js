import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


class MainNav extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return(
            <React.Fragment>
                <Navbar sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="" href="/"><img src="/assets/images/nxtStopLogo.png" height="100" width="100" alt="NXT Stop Travel " /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse className="navStyle mt-4" isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/flights">
                                    Flights
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/stay">
                                    Stay
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/todo">
                                    Todo
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <span className="navbar-text ml-auto ">
                            <Button outline color="danger" className="nav-link" to="/">
                                Login
                            </Button>
                        </span>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }

}

export default MainNav;