import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  return (
    <div>
      <footer data-bs-theme="dark" className="bg-dark d-flex flex-wrap justify-content-between align-items-center py-3 border-top px-4">
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Turletti lucas</span>
    </div>
    <a className="up" onClick={scrollToTop}>Ir Arriba</a>
  </footer>
    </div>
  )
}

export default Footer