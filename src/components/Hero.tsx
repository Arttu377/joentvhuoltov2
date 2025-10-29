import React, { useState, useEffect } from 'react';
const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | string>(false);

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIsMobile(true);
      } else if (width >= 768 && width < 1110) {
        setIsMobile('big');
      } else {
        setIsMobile(false);
      }
    };
    
    checkSize();
    window.addEventListener('resize', checkSize);
    
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offsetPosition = absoluteElementTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return <>
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {!imageLoaded && (
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2B4565]"></div>
          </div>
        )}
        <img 
          src={
            isMobile === true ? `/lovable-uploads/herophone.png` :
            isMobile === 'big' ? `/lovable-uploads/herobig.png` :
            `/lovable-uploads/tere.png`
          }
          alt="Hero background"
          className="w-full h-full object-cover brightness-110"
          loading="eager"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          style={{
            objectPosition: isMobile === true ? '50% 50%' : '55% 45%',
            filter: 'brightness(1.1) saturate(1.05)'
          }}
        />
        {/* Light overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      </div>
      
      {/* Overlay for better text readability */}
      
      
      <section className="relative min-h-screen pb-32 z-20">
        <div className="container-section relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-5xl mx-auto text-center pt-0">
            <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-4xl mx-auto mb-8 leading-[1.1]" style={{
            color: '#2B4565'
          }}>Joen Laitehuolto</h1>
            
            {/* Service sections with background bar */}
            <div className="relative mb-12 max-w-3xl mx-auto">
              {/* Background bar */}
              <div className="absolute inset-0 bg-[#2B4565]/40 rounded-lg -mx-2 md:-mx-6"></div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 py-2 px-2 md:px-6">
                <div 
                  className="text-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleScroll('heat-pump-details')}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Ilmalämpöpumpun asennukset ja huolto</h3>
                </div>
                <div 
                  className="text-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleScroll('electronics-details')}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Elektroniikkahuolto</h3>
                </div>
                <div 
                  className="text-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleScroll('electronics-details')}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Antenniasennukset ja korjaukset</h3>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    </>;
};
export default Hero;