import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white p-3 text-center">
        Copyright &copy; {new Date().getFullYear()}
      </footer>
    );
  }
}

export default Footer;
