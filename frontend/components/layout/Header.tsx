"use client";

import Link from "next/link";
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo a Sinistra */}
        <div className="logo-container">
          <Link href="/" className="logo">
            Sito Web
          </Link>
        </div>

        {/* Navigazione al Centro */}
        <nav className="nav-links">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/products" className="nav-link">Prodotti</Link>
          <Link href="/about" className="nav-link">Chi Siamo</Link>
          <Link href="/contact" className="nav-link">Contatti</Link>
        </nav>

        {/* Pulsante di login a Destra */}
        <div className="login-container">
          <Link href="/login" className="login-button">
            Accedi
          </Link>
        </div>
      </div>
    </header>
  );
}