import React, { PureComponent } from "react";
import "./footer.css";

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer" >
        <div className="footer-wrapper">
            <h3 href="/" style={{color:"white"}}>
              Projeto Final - Tópicos em Comunicação 3
            </h3>    
        </div>
      </footer>
    );
  }
}

export default Footer;
