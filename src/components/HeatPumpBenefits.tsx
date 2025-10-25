import React, { useState } from 'react';
import { X } from 'lucide-react';
const HeatPumpBenefits = () => {
  const [isHeatPumpModalOpen, setIsHeatPumpModalOpen] = useState(false);
  return (
    <>
      {/* Heat Pump Benefits Modal */}
      {isHeatPumpModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsHeatPumpModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-[#2B4565] mb-6">
              Miksi ilmalämpöpumppu?
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-6">
              <div>
                <h4 className="font-semibold text-[#2B4565] mb-3 text-lg">1. Ilmalämpöpumppu pienentää lämmityskuluja</h4>
                <p className="mb-3">Sähkö- ja öljylämmitteisissä rakennuksissa lämmityskustannukset voivat vähentyä noin 20–35 %. Ilmalämpöpumpun käyttöikä on keskimäärin 15–20 vuotta, ja sen aikana säästöä kertyy usein useita tuhansia euroja, yleensä 5 000–9 000 €.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#2B4565] mb-3 text-lg">2. Viilennystä kesän lämpimiin päiviin</h4>
                <p className="mb-3">Ilmalämpöpumppua voi käyttää myös kodin viilentämiseen. Jatkuva viilennys maksaa yleensä noin 0,5–1,2 € päivässä, ja koko kesän aikaiset lisäkustannukset jäävät useimmiten alle 60 euroon.</p>
                <p className="mb-3">Ilmalämpöpumppu on mahdollista asentaa joissakin tapauksissa myös vuokra-asuntoon. Lisätietoa aiheesta löytyy ilmalämpöpumpun hankintaohjeista.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#2B4565] mb-3 text-lg">3. Energiatehokas ja ympäristöystävällinen lämmitysratkaisu</h4>
                <p className="mb-3">Ilmalämpöpumppu hyödyntää ulkoilman lämpöenergiaa ja vähentää siten sähkönkulutusta. Se voi tuottaa saman määrän lämpöä jopa noin viidesosalla sähköstä, jota vastaava sähkölämmitys kuluttaisi.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#2B4565] mb-3 text-lg">4. Helppokäyttöinen lämmönsäätely</h4>
                <p>Lämpötilaa on helppo säätää halutuksi, ja sisäilma pysyy tasaisena ympäri vuoden. Kovilla, noin −15 °C tai sitä kylmemmillä pakkasilla, ilmalämpöpumppu tarvitsee rinnalleen toisen lämmönlähteen, kuten takan tai sähkölämmityksen.</p>
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
                Ilmalämpö asennukset ja huolto
              </h2>
              
              {/* Asennukset ja myynti osio */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#2B4565] mb-4 text-xl">
                  Asennukset ja myynti:
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#2B4565] hover:bg-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <p className="text-gray-700 font-medium">Toimitan ja asennan ilmalämpöpumppuja, kuten Mitsubishi Heavy Industries ja Innova.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#2B4565] hover:bg-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <p className="text-gray-700 font-medium">Asennukset alusta loppuun, sisältäen sijoituspaikan arvioinnin, laitteiston asennuksen ja käyttöönoton.</p>
                  </div>
                </div>
              </div>
              
              {/* Huollot ja korjaukset osio */}
              <div>
                <h3 className="font-semibold text-[#2B4565] mb-4 text-xl">
                  Huollot ja korjaukset:
                </h3>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[#2B4565] hover:bg-blue-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <p className="text-gray-700 font-medium">Teen korjaukset, vianselvitykset, puhdistushuollot ja toiminnan tarkistukset <span className="font-bold text-[#2B4565]">(180 €)</span>.</p>
                </div>
              </div>
            </div>
            
            {/* Kuvat oikealla */}
            <div className="flex justify-center lg:justify-end mt-40">
              <div className="flex space-x-6">
                <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="./lovable-uploads/heijo.png" 
                alt="Mitsubishi Heavy Industries" 
                    className="h-24 object-contain"
              />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="./lovable-uploads/inno.png" 
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
          <h2 className="text-3xl md:text-4xl font-bold text-convrt-dark-blue mb-4 text-[#2b4565]">
            Miksi ilmalämpöpumppu?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Mukavuutta, säästöä ja puhdasta sisäilmaa ympäri vuoden.
          </p>
          <button 
            onClick={() => setIsHeatPumpModalOpen(true)}
            className="bg-[#2B4565] hover:bg-[#1e3147] text-white px-8 py-4 rounded-lg font-medium text-lg"
          >
            Lue lisää hyödyistä
                  </button>
        </div>

        {/* Elektroniikkahuolto osio */}
        <div 
          className="mt-48 mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Teksti vasemmalla */}
            <div>
              <h2 id="electronics-details" className="text-3xl md:text-4xl font-bold text-[#2B4565] mb-8">
                Elektroniikkahuolto
              </h2>
              
              {/* Huollan ja korjaan osio */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#2B4565] mb-4 text-xl">
                  Huollan ja korjaan muun muassa:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#2B4565] hover:bg-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <span className="text-gray-700 font-medium">Virtalähteet</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#2B4565] hover:bg-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <span className="text-gray-700 font-medium">Ohjaus- ja säätökortit</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#2B4565] hover:bg-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <span className="text-gray-700 font-medium">Vahvistimet ja kaiuttimet</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#2B4565] hover:bg-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <span className="text-gray-700 font-medium">Mittalaitteet</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#2B4565] sm:col-span-2 hover:bg-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <span className="text-gray-700 font-medium">Kodin ja teollisuuden elektroniikkalaitteet</span>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Kuva oikealla */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
              <img 
                src="./lovable-uploads/ca29b7e3-3bf3-471d-8579-afc6dcae82ad.png" 
                alt="Elektroniikkahuolto" 
                  className="w-full max-w-md h-80 object-cover rounded-xl shadow-lg"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Antenniasennukset ja korjaukset osio */}
        <div 
          className="mt-48 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Teksti vasemmalla */}
            <div>
              <h2 id="antenna-details" className="text-3xl md:text-4xl font-bold text-[#2B4565] mb-8">
                Antenniasennukset ja korjaukset
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#2B4565] hover:bg-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <p className="text-gray-700 font-medium">Teen pientalojen antennien asennuksia ja korjauksia.</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#2B4565] hover:bg-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <p className="text-gray-700 font-medium">Asennan niin televisio- kuin radiovastaanottimet, säädän signaalin optimaalisen laadun saavuttamiseksi ja varmistan, että antennijohto toimii moitteettomasti.</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[#2B4565] hover:bg-blue-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  <p className="text-gray-700 font-medium">Lisäksi korjaan rikkoutuneet antennit, vaihdan liittimiä ja vahvistimia sekä huollan järjestelmiä, jotta televisio- ja radiovastaanotto toimii luotettavasti koko talossa.</p>
                </div>
              </div>
            </div>
            
            {/* Kuva oikealla */}
            <div className="flex justify-center lg:justify-end mt-16">
              <img 
                src="./lovable-uploads/kappale.png" 
                alt="Antenniasennukset ja korjaukset" 
                className="w-full max-w-md h-72 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Yrityksestä osio - erillinen osio käänteisellä gradient-taustalla */}
    <section className="py-20 bg-gradient-to-r from-[#d1dae8] to-white relative z-30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div 
          className="text-center"
        >
          <h2 id="tietoa" className="text-3xl md:text-4xl font-bold text-[#2B4565] mb-6">
            Joen Laitehuolto J. Simanainen
          </h2>
          <h3 className="text-xl font-semibold text-[#2B4565] mb-6">
            Yrityksestä
          </h3>
          <div className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p className="mb-4">
              Joensuulainen huolto- ja asennuspalvelu, jolla on yli 30 vuoden kokemus erilaisista huolto- ja asennustöistä. Teen niin koti- kuin yritysasiakkaiden toimeksiantoja sekä sähkö- ja elektroniikkahuolloista antenni- ja lämpöpumpuasennuksiin sekä niihin liittyviin huoltoihin.
            </p>
            <p>
              Tarvittavat sertifikaatit ja koulutukset ilmalämpöpumppujen asennuksiin löytyy, ja työskentelysuoritetaan turvallisesti sekä säädösten mukaisesti.
            </p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default HeatPumpBenefits;