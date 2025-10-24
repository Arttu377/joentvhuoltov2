import React, { useState } from 'react';
import { X, Check, PhoneCall, Mail, MessageSquare, Users, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
const ProblemStatement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isElectronicsModalOpen, setIsElectronicsModalOpen] = useState(false);
  const [isAntennaModalOpen, setIsAntennaModalOpen] = useState(false);

  return (
    <>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-[#2B4565] mb-4">
              Ilmalämpö asennukset ja huolto
            </h3>
            <div className="text-gray-700 leading-relaxed mb-6">
              <h4 className="font-semibold text-[#2B4565] mb-3">Asennukset ja myynti:</h4>
              <p className="mb-3">Toimitan ja asennan ilmalämpöpumppuja, kuten Mitsubishi Heavy Industries ja Innova.</p>
              <p className="mb-4">Asennukset alusta loppuun, sisältäen sijoituspaikan arvioinnin, laitteiston asennuksen ja käyttöönoton.</p>
              
              <h4 className="font-semibold text-[#2B4565] mb-3">Huollot ja korjaukset:</h4>
              <p>Teen korjaukset, vianselvitykset, puhdistushuollot ja toiminnan tarkistukset (180 €).</p>
            </div>
            <div className="flex justify-center space-x-8">
              <img 
                src="./lovable-uploads/heijo.png" 
                alt="Mitsubishi Heavy Industries" 
                className="h-16 object-contain"
              />
              <img 
                src="./lovable-uploads/inno.png" 
                alt="Innova" 
                className="h-16 object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Electronics Modal */}
      {isElectronicsModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button 
              onClick={() => setIsElectronicsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="flex justify-center mb-4">
              <img 
                src="./lovable-uploads/ca29b7e3-3bf3-471d-8579-afc6dcae82ad.png" 
                alt="Elektroniikkahuolto" 
                className="w-3/4 h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#2B4565] mb-4">
              Elektroniikkahuolto
            </h3>
            <div className="text-gray-700 leading-relaxed mb-6">
              <h4 className="font-semibold text-[#2B4565] mb-3">Huollan ja korjaan muun muassa:</h4>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>virtalähteitä</li>
                <li>ohjaus- ja säätökortteja</li>
                <li>vahvistimia ja kaiuttimia</li>
                <li>mittalaitteita</li>
                <li>kodin ja teollisuuden elektroniikkalaitteita</li>
              </ul>
              
              <h4 className="font-semibold text-[#2B4565] mb-3">Huoltotöihin sisältyy:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>vianmääritykset ja testaukset</li>
                <li>komponenttien vaihdot</li>
                <li>juotostyöt</li>
                <li>liittimien ja johtojen korjaukset</li>
                <li>laitteiden puhdistukset ja toimintatarkistukset</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Antenna Modal */}
      {isAntennaModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button 
              onClick={() => setIsAntennaModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="flex justify-start pl-0 mb-4">
              <img 
                src="./lovable-uploads/kappale.png" 
                alt="Antenniasennukset ja korjaukset" 
                className="w-11/12 h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#2B4565] mb-4">
              Antenniasennukset ja korjaukset
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Teen pientalojen antennien asennuksia ja korjauksia. Asennan niin televisio- kuin radiovastaanottimet, säädän signaalin optimaalisen laadun saavuttamiseksi ja varmistan, että antennijohto toimii moitteettomasti. Lisäksi korjaan rikkoutuneet antennit, vaihdan liittimiä ja vahvistimia sekä huollan järjestelmiä, jotta televisio- ja radiovastaanotto toimii luotettavasti koko talossa.
            </p>
          </div>
        </div>
      )}

      <section id="problem" className="relative py-8 overflow-hidden z-30 min-h-screen bg-slate-50 mx-0">
      <div className="container mx-auto px-4 relative z-10">
        {/* Pääotsikko osion alussa */}
        <div id="palvelut" className="text-center mb-16 pt-16">
          <h3 className="font-bold text-convrt-dark-blue mb-6 text-4xl text-[#2b4565]">
            Paikallista, kestävää ja asiantuntevaa palvelua
          </h3>
          <p className="text-convrt-dark-blue/80 text-lg max-w-2xl mx-auto text-[#2b4565] mb-8">
            Tarjoan ilmalämpöpumppujen ja antennien asennuksia sekä elektroniikkahuoltoa. Ota yhteyttä, jos tarvitset apua näissä asioissa.
          </p>
        </div>
        
        {/* Palvelukortit heti otsikon alle */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Ilmalämpö asennukset ja huolto */}
          <div className="bg-white rounded-[20px] border border-gray-100 relative overflow-hidden group shadow-lg hover:-translate-y-1 transition-transform duration-300">
            {/* Header section with background image */}
            <div className="relative h-48 flex items-end" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./lovable-uploads/bd97c7a8-7d81-46b8-a59a-8a94b0053ca2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white p-6 pb-4 relative z-10">
                Ilmalämpö asennukset ja huolto
              </h3>
            </div>
            
            {/* Content section */}
            <div className="p-6">
              <div className="mb-6">
                <div className="text-convrt-dark-blue/70 text-sm">
                  <p className="mb-2">Ilmalämpöpumppujen asennukset ja myynti. Lisäksi huollot, kuten korjaukset, puhdistushuollot ja toiminnan tarkistukset.</p>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('heat-pump-details');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[#2B4565] hover:bg-[#1e3147] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Lue lisää
              </button>
            </div>
          </div>
          
          {/* Elektroniikkahuolto */}
          <div className="bg-white rounded-[20px] border border-gray-100 relative overflow-hidden group shadow-lg hover:-translate-y-1 transition-transform duration-300">
            {/* Header section with background image */}
            <div className="relative h-48 flex items-end" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./lovable-uploads/ca29b7e3-3bf3-471d-8579-afc6dcae82ad.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white p-6 pb-4 relative z-10">
                Elektroniikkahuolto
              </h3>
            </div>
            
            {/* Content section */}
            <div className="p-6">
              <div className="mb-6">
                <div className="text-convrt-dark-blue/70 text-sm">
                  <p>Elektroniikkahuolto sisältää laitteiden vianmäärityksen, korjauksen ja komponenttien vaihdon.</p>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('electronics-details');
                  if (element) {
                    const elementRect = element.getBoundingClientRect();
                    const absoluteElementTop = elementRect.top + window.pageYOffset;
                    const offsetPosition = absoluteElementTop - 80; // 80px offset ylöspäin
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-[#2B4565] hover:bg-[#1e3147] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Lue lisää
              </button>
            </div>
          </div>

          {/* Antenniasennukset ja korjaukset */}
          <div className="bg-white rounded-[20px] border border-gray-100 relative overflow-hidden group shadow-lg hover:-translate-y-1 transition-transform duration-300">
            {/* Header section with background image */}
            <div className="relative h-48 flex items-end" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./lovable-uploads/kappale.png')`,
            backgroundSize: '130%',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat'
          }}>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white p-6 pb-4 relative z-10">
                Antenniasennukset ja korjaukset
              </h3>
            </div>
            
            {/* Content section */}
            <div className="p-6">
              <div className="mb-6">
                <div className="text-convrt-dark-blue/70 text-sm">
                  <p>Pientalojen antenniasennukset ja -korjaukset.</p>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('antenna-details');
                  if (element) {
                    const elementRect = element.getBoundingClientRect();
                    const absoluteElementTop = elementRect.top + window.pageYOffset;
                    const offsetPosition = absoluteElementTop - 80; // 80px offset ylöspäin
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-[#2B4565] hover:bg-[#1e3147] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Lue lisää
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    </>
  );
};
export default ProblemStatement;