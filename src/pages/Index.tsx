import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import HeatPumpBenefits from '@/components/HeatPumpBenefits';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-convrt-dark-blue overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <ProblemStatement />
        <HeatPumpBenefits />
      </main>
      
      <footer className="bg-gray-50 py-16 border-t border-gray-200 min-h-[200px] block w-full relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-convrt-dark-blue mb-2 text-[#2b4565]">Joen laitehuolto J. Simanainen</h3>
              <p className="text-sm text-gray-500 mb-4">(ent. Joen TV-huolto J. Simanainen)</p>
              <p className="text-gray-600 mb-6">
                Elektroniikka-asennukset ja huollot ammattitaidolla Joensuussa ja lähialueilla.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-convrt-dark-blue mb-4">Pikavalinnat</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-gray-600 hover:text-[#1e3147] transition-colors"
                  >
                    Etusivu
                  </a>
                </li>
                <li>
                  <a 
                    href="/palvelut" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('palvelut');
                      if (element) {
                        const elementRect = element.getBoundingClientRect();
                        const absoluteElementTop = elementRect.top + window.pageYOffset;
                        const offsetPosition = absoluteElementTop - 80;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="text-gray-600 hover:text-[#1e3147] transition-colors"
                  >
                    Palvelut
                  </a>
                </li>
                <li>
                  <a 
                    href="/tietoa-yrityksesta" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('tietoa');
                      if (element) {
                        const elementRect = element.getBoundingClientRect();
                        const absoluteElementTop = elementRect.top + window.pageYOffset;
                        const offsetPosition = absoluteElementTop - 80;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="text-gray-600 hover:text-[#1e3147] transition-colors"
                  >
                    Tietoa yrityksestä
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-convrt-dark-blue mb-4">Yhteystiedot</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-convrt-dark-blue mt-0.5 mr-3 flex-shrink-0 bg-slate-100">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-600">Kapteeninkatu 6</p>
                    <p className="text-gray-600">80700 Joensuu</p>
                    <p className="text-gray-600">Suomi</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-convrt-dark-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:0500724515" className="text-gray-600 hover:text-convrt-purple transition-colors">0500 724 515</a>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-convrt-dark-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:jari.simanainen@joenlaitehuolto.fi" className="text-gray-600 hover:text-convrt-purple transition-colors">jari.simanainen@joenlaitehuolto.fi</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2025 Joen Laitehuolto J. Simanainen. Kaikki oikeudet pidätetään.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;