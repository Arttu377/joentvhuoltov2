import React, { useState } from 'react';
import { X } from 'lucide-react';
const HeatPumpBenefits = () => {
  const [isHeatPumpModalOpen, setIsHeatPumpModalOpen] = useState(false);
  return (
    <>
      {/* Heat Pump Benefits Modal */}
      {isHeatPumpModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button 
              onClick={() => setIsHeatPumpModalOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-[#2B4565] mb-3">
                Miksi ilmalämpöpumppu?
              </h3>
              <p className="text-gray-600 text-lg">Mukavuutta, säästöä ja puhdasta sisäilmaa ympäri vuoden.</p>
            </div>
            
            <div className="space-y-6">
              {/* 1. Säästö */}
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#2B4565]">
                <h4 className="font-bold text-[#2B4565] text-xl mb-2">Ilmalämpöpumppu pienentää lämmityskuluja</h4>
                <p className="text-gray-700">Sähkö- ja öljylämmitteisissä rakennuksissa <span className="font-semibold text-[#2B4565]">lämmityskustannukset voivat vähentyä 20–35%</span>.</p>
                <p className="text-gray-700">Käyttöikä: <span className="font-semibold">15–20 vuotta</span></p>
                <p className="text-gray-800 font-semibold mt-2">Säästöpotentiaali: 5 000–9 000 €</p>
              </div>
              
              {/* 2. Viilennys */}
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#2B4565]">
                <h4 className="font-bold text-[#2B4565] text-xl mb-2">Viilennystä kesän lämpimiin päiviin</h4>
                <p className="text-gray-700">Ilmalämpöpumppua voi käyttää myös <span className="font-semibold text-[#2B4565]">kodin viilentämiseen</span>.</p>
                <p className="text-gray-800 font-semibold mt-2">Viilennyskustannus: 0,5–1,2 €/pvä</p>
                <p className="text-gray-800 font-semibold">Kesän kustannus: Alle 60 €</p>
              </div>
              
              {/* 3. Energiatehokkuus */}
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#2B4565]">
                <h4 className="font-bold text-[#2B4565] text-xl mb-2">Energiatehokas ratkaisu</h4>
                <p className="text-gray-700">Tuottaa <span className="font-bold text-[#2B4565]">viidenneksen</span> sähkönkäytöstä verrattuna suoraan sähkölämmitykseen.</p>
              </div>
              
              {/* 4. Helppokäyttöisyys */}
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#2B4565]">
                <h4 className="font-bold text-[#2B4565] text-xl mb-2">Helppokäyttöinen lämmönsäätely</h4>
                <p className="text-gray-700">Lämpötilaa on helppo säätää halutuksi, sisäilma pysyy tasaisena ympäri vuoden.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="heat-pump-details" className="py-20 bg-gradient-to-r from-white to-[#d1dae8] relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
        {/* Ilmalämpö asennukset ja huolto osio */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Teksti vasemmalla */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B4565] mb-8">
                Ilmalämpöpumpun asennukset ja huolto
              </h2>
              
              {/* Asennukset ja myynti osio */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#2B4565] mb-4 text-xl">
                  Asennukset ja myynti:
                </h3>
                <p className="text-gray-700 mb-4 border-l-4 border-[#2B4565] pl-4">Asennan ja myyn ilmalämpöpumppuja, kuten Mitsubishi heavy Industries ja Innova.</p>
                <p className="text-gray-700 border-l-4 border-[#2B4565] pl-4">Asennukset alusta loppuun, sisältäen sijoituspaikan arvioinnin, laitteiston asennuksen ja käyttöönoton.</p>
              </div>
              
              {/* Huollot ja korjaukset osio */}
              <div>
                <h3 className="font-semibold text-[#2B4565] mb-4 text-xl">
                  Huollot ja korjaukset:
                </h3>
                <p className="text-gray-700 border-l-4 border-[#2B4565] pl-4">Ilmalämpöpumpun perushuolto alkaen 180€. Vianselvitys ja tarvittaessa korjaukset.</p>
              </div>
            </div>
            
            {/* Kuvat oikealla */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-40">
              <div className="flex space-x-6">
                <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/heijo.png`} 
                alt="Mitsubishi Heavy Industries" 
                    className="h-24 object-contain"
              />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/inno.png`} 
                alt="Innova" 
                    className="h-24 object-contain"
              />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Miksi ilmalämpöpumppu osio */}
        <div className="text-center mb-12 mt-32">
          <h2 className="text-2xl md:text-3xl font-bold text-convrt-dark-blue mb-3 text-[#2b4565]">
            Miksi ilmalämpöpumppu?
          </h2>
          <p className="text-base text-gray-600 mb-6">
            Mukavuutta, säästöä ja puhdasta sisäilmaa ympäri vuoden.
          </p>
          <button 
            onClick={() => setIsHeatPumpModalOpen(true)}
            className="bg-[#2B4565] hover:bg-[#1e3147] text-white px-5 py-2.5 rounded-md font-medium text-base"
          >
            Lue lisää hyödyistä
                  </button>
        </div>

        {/* Elektroniikkahuolto osio */}
        <div 
          className="mt-48 mb-24 pb-4 lg:pb-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start min-h-[600px] lg:min-h-0">
            {/* Teksti vasemmalla */}
            <div className="col-span-1 lg:col-span-1">
              <h2 id="electronics-details" className="text-3xl md:text-4xl font-bold text-[#2B4565] mb-8">
                Antenniasennukset, korjaukset ja elektroniikkahuolto
              </h2>
              
              {/* Huollan ja korjaan osio */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#2B4565] mb-4 text-xl">
                  Huollot ja korjaukset:
                </h3>
                <p className="text-gray-700 mb-4 border-l-4 border-[#2B4565] pl-4">Kodin ja teollisuuden elektroniikkalaitteiden huolto ja korjaus</p>
                <p className="text-gray-700 border-l-4 border-[#2B4565] pl-4">Pientalojen antennien asennukset ja korjaus</p>
              </div>
              
            </div>
            
            {/* Kuvat oikealla */}
            <div className="col-span-1 lg:col-span-1 flex justify-center md:justify-start lg:justify-end items-start relative h-full mt-2 lg:mt-0 lg:mr-16 xl:mr-0">
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 lg:block lg:relative">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/ca29b7e3-3bf3-471d-8579-afc6dcae82ad.png`} 
                alt="Elektroniikkahuolto" 
                  className="w-60 h-44 md:w-56 md:h-44 lg:w-64 lg:h-48 object-cover rounded-xl shadow-lg lg:-translate-x-8"
                />
                <div className="w-60 h-44 md:w-56 md:h-44 lg:w-64 lg:h-48 rounded-xl shadow-lg lg:translate-x-8 lg:translate-y-8 lg:absolute lg:overflow-hidden bg-transparent">
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/kappale.png`} 
                    alt="Antenniasennukset" 
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(1.15)' }}
              />
            </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    
    {/* Yrityksestä osio - erillinen osio käänteisellä gradient-taustalla */}
    <section className="pt-32 pb-32 bg-gradient-to-r from-[#d1dae8] to-white relative z-30">
      <div className="container mx-auto px-6 max-w-4xl relative">
        <div className="absolute -top-4 -right-20 hidden lg:block xl:-right-20">
          <img 
            src={`${import.meta.env.BASE_URL}lovable-uploads/vuoodesta.png`} 
            alt="Vuodesta 1989" 
            className="h-32 object-contain"
          />
        </div>
        
        <div className="text-center">
          <h2 id="tietoa" className="text-3xl md:text-4xl font-bold text-[#2B4565] mb-6">
            Joen Laitehuolto J. Simanainen
          </h2>
          <h3 className="text-xl font-semibold text-[#2B4565] mb-6">
            Yrityksestä
          </h3>
          <div className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              Historia alkaa vuodesta 1989, TV-huollosta ja muusta viihde-elektroniikan huoltamisesta. Kodin elektroniikan kertakäyttöisyyden myötä on tullut mukaan teollisuus-ja ammattielektroniikka, sekä ilmalämpöpumppujen asennukset, ja niiden huollot ja korjaukset.
            </p>
          </div>
          
          {/* Kuva tekstin alapuolella mobiilissa */}
          <div className="flex justify-center lg:hidden mt-8">
            <img 
              src={`${import.meta.env.BASE_URL}lovable-uploads/vuoodesta.png`} 
              alt="Vuodesta 1989" 
              className="h-32 object-contain"
            />
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default HeatPumpBenefits;