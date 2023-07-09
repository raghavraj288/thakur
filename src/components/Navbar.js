import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserTie} from "react-icons/fa";
import { TbLayoutGrid } from "react-icons/tb";
import { BiFoodMenu } from "react-icons/bi";
import { GiKitchenKnives } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { BsCupFill } from "react-icons/bs";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink exact to="/" className="navbar__link" activeClassName="active">
            <TbLayoutGrid className="navbar__icon" />
            <span className="navbar__text">Layout</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/menu" className="navbar__link" activeClassName="active">
            <BiFoodMenu className="navbar__icon" />
            <span className="navbar__text">Food Menu</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/uniform" className="navbar__link" activeClassName="active">
            <FaUserTie className="navbar__icon" />
            <span className="navbar__text">Uniform</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/chef" className="navbar__link" activeClassName="active">
            <SiCodechef className="navbar__icon" />
            <span className="navbar__text">Chef</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/crockery" className="navbar__link" activeClassName="active">
            <GiKitchenKnives className="navbar__icon" />
            <span className="navbar__text">Crockery</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/smallware" className="navbar__link" activeClassName="active">
            <BsCupFill className="navbar__icon" />
            <span className="navbar__text">Smallware</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
