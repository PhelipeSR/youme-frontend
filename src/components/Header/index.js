import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavLink} from "reactstrap";
import "./header.css";
import img1 from '../../images/icone.png'

class Header extends PureComponent {
  render() {
    return (
      <Navbar className="header">
        <NavbarBrand href="/"><img src={img1}/></NavbarBrand>
      </Navbar>
    );
  }
}

export default Header;
