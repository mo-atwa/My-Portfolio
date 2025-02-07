import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>All rights reserved © {currentYear} <span>ATWA</span></p>
    </footer>
  );
};

export default Footer;
