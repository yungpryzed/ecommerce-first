"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/layout/Footer";
import './Home.css';

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "Prodotto 1", price: "€29.99", image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Prodotto+1" },
    { id: 2, name: "Prodotto 2", price: "€39.99", image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Prodotto+2" },
    { id: 3, name: "Prodotto 3", price: "€49.99", image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Prodotto+3" },
  ];

  return (
    <main className="flex-grow">
      {/* Sezione Prodotti in Evidenza */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Prodotti in Evidenza</h2>
          
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    width={250}
                    height={250}
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <button className="add-to-cart-button">
                    Aggiungi al Carrello
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}