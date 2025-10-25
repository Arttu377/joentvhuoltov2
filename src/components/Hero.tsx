import React, { useState } from 'react';
const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return <>
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        {!imageLoaded && (
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2B4565]"></div>
          </div>
        )}
        <img 
          src="./lovable-uploads/tere.png" 
          alt="Hero background"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          style={{
            objectPosition: '55% 45%'
          }}
        />
      </div>
      
      {/* Overlay for better text readability */}
      
      
      <section className="relative min-h-screen pb-32 z-20">
        <div className="container-section relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-5xl mx-auto text-center pt-24">
            <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-4xl mx-auto mb-8 leading-[1.1]" style={{
            color: '#2B4565'
          }}>Joen Laitehuolto</h1>
            
            {/* Service sections with background bar */}
            <div className="relative mb-12 max-w-3xl mx-auto">
              {/* Background bar */}
              <div className="absolute inset-0 bg-[#2B4565]/40 rounded-lg -mx-2 md:-mx-6"></div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 py-2 px-2 md:px-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Ilmalämpö asennukset ja huolto</h3>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Elektroniikkahuolto</h3>
                </div>
                <div className="text-center">
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