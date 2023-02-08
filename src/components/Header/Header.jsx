import React, { useRef } from 'react';
import "./header.css";
import { Container, Row } from 'reactstrap';
import {motion} from "framer-motion";
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const nav__link = [
  {
    path:'home',
    display: 'Home'
  },

  {
    path:'shop',
    display: 'Shop'
  },

  {
    path:'cart',
    display: 'Cart'
  }

]


const Header = () => {

  const menuRef = useRef(null); 
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const navigate = useNavigate();

  const menuToggle = () => menuRef.current.classList.toggle('mobile__menu');
  const navigateToCart = () => {
    navigate('/cart');
  }

  const navigateToHome = () => {
    navigate('/home');
  }


  return <header className="header">
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo" onClick={navigateToHome}>
            <img src={logo} alt="header logo" />
            <div>
              <h1>EKIA</h1>
            </div>
          </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {
                  nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass)=>navClass.isActive ? "nav__active" : ""}>{item.display}</NavLink>
                 </li> 
                ))
                }
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">0</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <Link to='/signup'><span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="userIcon" /></span></Link>
              <div className="mobile__menu">
              <span onClick={menuToggle}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
            </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header;
