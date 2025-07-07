"use client";

import Link from "next/link";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="copyright">© 2025 E-Commerce. Tutti i diritti riservati.</p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="/about" className="footer-link">Chi Siamo</Link>
            <Link href="/privacy" className="footer-link">Privacy</Link>
            <Link href="/terms" className="footer-link">Termini</Link>
            <Link href="/contact" className="footer-link">Contatti</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}