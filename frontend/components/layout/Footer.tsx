import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RistoTools</h3>
            <p className="text-gray-600 text-sm">
              La tua fonte di utensili professionali per pizzerie, ristoranti, gelaterie e panifici.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 text-sm hover:text-gray-900">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 text-sm hover:text-gray-900">
                  Contattaci
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 text-sm hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 text-sm hover:text-gray-900">
                  Termini e Condizioni
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Email: info@ristotools.com</li>
              <li className="text-gray-600 text-sm">Telefono: +39 123 456 7890</li>
              <li className="text-gray-600 text-sm">Indirizzo: Via Roma 123, Milano</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} RistoTools. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;