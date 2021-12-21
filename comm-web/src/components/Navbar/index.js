/* eslint-disable react/jsx-no-undef */
import React from 'react'

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            
       <Nav>
         <NavLink to='/'>
         <img className='logo' src={require('../../images/gdsc-logo.gif')} alt='logo' />
           <h1>GDSC-LBCE</h1>
         </NavLink>
         <Bars />
         <NavMenu className='Navitems'>
           <NavLink to='/about' activeStyle>
             About Us
           </NavLink>
           <NavLink to='/Events' activeStyle>
             Events
           </NavLink>
           <NavLink to='/OurTeam' activeStyle>
             Our Team
           </NavLink>
           <NavLink to='/FAQs' activeStyle>
             FAQs
           </NavLink>
           <NavLink to='/ContactUs' activeStyle>
             Contact Us
           </NavLink>
           
         </NavMenu>
        </Nav>
            
        </>
    )
}

export default Navbar
