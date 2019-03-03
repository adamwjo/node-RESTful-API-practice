/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container

} from 'reactstrap'

export default class NavBar extends Component {
    state = {
        isOpen: false
    }
    
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render(){
        return(
            <div>
                <Navbar color='dark' dark expand='sm' className='mb-5' >
                    <Container>
                        <NavbarBrand href='/'>
                            Restaurant App
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav>
                                <NavItem>
                                    <NavLink href='/'>
                                        github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>

                    </Container>

                </Navbar>
            </div>
        )
    }
}