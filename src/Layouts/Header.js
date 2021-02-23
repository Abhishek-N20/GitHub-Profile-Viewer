import React,{useState,useContext} from 'react'

import {Navbar,NavbarBrand,NavItem,Nav,Collapse,NavLink,NavbarText,NavbarToggler} from 'reactstrap'
import { UserContext } from '../Context/UserContext'
import {Link} from 'react-router-dom'

const Header =()=>{
    const context = useContext(UserContext);

    const [isOpen,setIsOpen]= useState(false)

    const toggle=()=>setIsOpen(!isOpen)

    return(
        <Navbar color="info" light expand="md">
        <NavbarBrand ><Link to="/" className="text-white">Github-Firebase</Link></NavbarBrand>
        <NavbarText className="text-grey">{
            context.user?.email ? context.user.email : ""
        }</NavbarText>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
        {
            context.user ? (<NavItem>
                <NavLink onClick={()=>{context.setUser(null)}} className="text-white">Logout</NavLink>
                </NavItem>
                ): (
                    <>
                    <NavItem>
                    <NavLink tag={Link} to="/signup" className="text-white">SignUp</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} to="/signin"className="text-white">SignIn</NavLink>
                    </NavItem>
                    </>
                    )
        }
        
        </Nav>
        </Collapse>
        </Navbar>
    )
}

export default Header;