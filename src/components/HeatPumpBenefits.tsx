import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
const HeatPumpBenefits = () => {
  const [openBenefit, setOpenBenefit] = useState<number | null>(null);
  const [openSuitability, setOpenSuitability] = useState<number | null>(null);
  const benefits = [{
    title: "Energiatehokkuus",
    description: "Tuottaa jopa 3–5 kertaa enemmän lämpöä kuin kuluttaa sähköä – säästöä erityisesti sähkölämmitteisissä kodeissa."
  }, {
    title: "Viilennys kesällä",
    description: "Viilentää tehokkaasti kuumina kesäpäivinä – yksi laite, kaksi toimintoa."
  }, {
    title: "Puhdistaa sisäilmaa",
    description: "Suodattaa pölyä, siitepölyä ja epäpuhtauksia – parantaa sisäilman laatua."
  }, {
    title: "Ympäristöystävällinen",
    description: "Vähentää energiankulutusta ja pienentää hiilijalanjälkeä."
  }, {
    title: "Nopea ja siisti asennus",
    description: "Asennus hoituu yleensä päivässä – ilman isoa remonttia."
  }];
  const suitability = [{
    title: "Omakotitalojen ja rivitalojen asukkaille",
    description: "Säästä lämmityskuluissa ja lisää asumismukavuutta ympäri vuoden – ilman suuria remontteja."
  }, {
    title: "Mökkikäyttöön tai vapaa-ajan asuntoihin",
    description: "Pidä mökki lämpimänä talvella ja viileänä kesällä – etänä ohjattava lämpöratkaisu."
  }, {
    title: "Pienyrityksille ja toimitiloihin",
    description: "Energiatehokas ja hiljainen ratkaisu asiakas- tai työtilojen lämmitykseen ja viilennykseen."
  }, {
    title: "Talouksiin, joissa on sähkö- tai suoravastuslämmitys",
    description: "Ilmalämpöpumppu voi jopa puolittaa lämmityskulut – sijoitus, joka maksaa itsensä takaisin."
  }, {
    title: "Ympäristötietoisille, jotka haluavat vähentää energiankulutusta",
    description: "Vihreämpi valinta: pienempi hiilijalanjälki ja energiansäästö ilman asumismukavuudesta tinkimistä."
  }];
  const toggleBenefit = (index: number) => {
    setOpenBenefit(openBenefit === index ? null : index);
  };
  const toggleSuitability = (index: number) => {
    setOpenSuitability(openSuitability === index ? null : index);
  };
  return (
    <>
      <section id="heat-pump-details" className="py-20 bg-gradient-to-r from-white to-[#d1dae8] relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
        {/* Ilmalämpö asennukset ja huolto osio */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Teksti vasemmalla */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B4565] mb-6">
                Ilmalämpö asennukset ja huolto
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <h3 className="font-semibold text-[#2B4565] mb-3 text-lg">Asennukset ja myynti:</h3>
                <p className="mb-3">Toimitan ja asennan ilmalämpöpumppuja, kuten Mitsubishi Heavy Industries ja Innova.</p>
                <p className="mb-6">Asennukset alusta loppuun, sisältäen sijoituspaikan arvioinnin, laitteiston asennuksen ja käyttöönoton.</p>
                
                <h3 className="font-semibold text-[#2B4565] mb-3 text-lg">Huollot ja korjaukset:</h3>
                <p>Teen korjaukset, vianselvitykset, puhdistushuollot ja toiminnan tarkistukset (180 €).</p>
              </div>
            </div>
            
            {/* Kuvat oikealla */}
            <div className="flex justify-center space-x-8">
              <img 
                src="./lovable-uploads/heijo.png" 
                alt="Mitsubishi Heavy Industries" 
                className="h-20 object-contain"
              />
              <img 
                src="./lovable-uploads/inno.png" 
                alt="Innova" 
                className="h-20 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Miksi ilmalämpöpumppu osio */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-convrt-dark-blue mb-4 text-[#2b4565]">
            Miksi ilmalämpöpumppu?
          </h2>
          <p className="text-lg text-gray-600">
            Mukavuutta, säästöä ja puhdasta sisäilmaa ympäri vuoden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hyödyt */}
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <h3 className="text-xl font-bold text-convrt-dark-blue mb-6">
              Ilmalämpöpumpun hyödyt
            </h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button onClick={() => toggleBenefit(index)} className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-100 rounded px-2 transition-colors">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-3 text-sm">✓</span>
                      <span className="font-medium text-gray-900">{benefit.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openBenefit === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openBenefit === index && (
                      <motion.div 
                        initial={{
                          height: 0,
                          opacity: 0
                        }} 
                        animate={{
                          height: 'auto',
                          opacity: 1
                        }} 
                        exit={{
                          height: 0,
                          opacity: 0
                        }} 
                        transition={{
                          duration: 0.2
                        }} 
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-8 pr-2">
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Kenelle sopii */}
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <h3 className="text-xl font-bold text-convrt-dark-blue mb-6">
              Kenelle ilmalämpöpumppu sopii?
            </h3>
            <div className="space-y-3">
              {suitability.map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button onClick={() => toggleSuitability(index)} className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-100 rounded px-2 transition-colors">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-3 text-sm">✓</span>
                      <span className="font-medium text-gray-900">{item.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openSuitability === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openSuitability === index && (
                      <motion.div 
                        initial={{
                          height: 0,
                          opacity: 0
                        }} 
                        animate={{
                          height: 'auto',
                          opacity: 1
                        }} 
                        exit={{
                          height: 0,
                          opacity: 0
                        }} 
                        transition={{
                          duration: 0.2
                        }} 
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-8 pr-2">
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Elektroniikkahuolto osio */}
        <div 
          className="mt-32 mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Teksti vasemmalla */}
            <div>
              <h2 id="electronics-details" className="text-3xl md:text-4xl font-bold text-[#2B4565] mb-6">
                Elektroniikkahuolto
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <h3 className="font-semibold text-[#2B4565] mb-3 text-lg">Huollan ja korjaan muun muassa:</h3>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>virtalähteitä</li>
                  <li>ohjaus- ja säätökortteja</li>
                  <li>vahvistimia ja kaiuttimia</li>
                  <li>mittalaitteita</li>
                  <li>kodin ja teollisuuden elektroniikkalaitteita</li>
                </ul>
                
                <h3 className="font-semibold text-[#2B4565] mb-3 text-lg">Huoltotöihin sisältyy:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>vianmääritykset ja testaukset</li>
                  <li>komponenttien vaihdot</li>
                  <li>juotostyöt</li>
                  <li>liittimien ja johtojen korjaukset</li>
                  <li>laitteiden puhdistukset ja toimintatarkistukset</li>
                </ul>
              </div>
            </div>
            
            {/* Kuva oikealla */}
            <div className="flex justify-center">
              <img 
                src="./lovable-uploads/ca29b7e3-3bf3-471d-8579-afc6dcae82ad.png" 
                alt="Elektroniikkahuolto" 
                className="w-3/4 h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Antenniasennukset ja korjaukset osio */}
        <div 
          className="mt-32 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Teksti vasemmalla */}
            <div>
              <h2 id="antenna-details" className="text-3xl md:text-4xl font-bold text-[#2B4565] mb-6">
                Antenniasennukset ja korjaukset
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  Teen pientalojen antennien asennuksia ja korjauksia. Asennan niin televisio- kuin radiovastaanottimet, säädän signaalin optimaalisen laadun saavuttamiseksi ja varmistan, että antennijohto toimii moitteettomasti. Lisäksi korjaan rikkoutuneet antennit, vaihdan liittimiä ja vahvistimia sekä huollan järjestelmiä, jotta televisio- ja radiovastaanotto toimii luotettavasti koko talossa.
                </p>
              </div>
            </div>
            
            {/* Kuva oikealla */}
            <div className="flex justify-center">
              <img 
                src="./lovable-uploads/kappale.png" 
                alt="Antenniasennukset ja korjaukset" 
                className="w-3/4 h-48 object-cover rounded-lg"
                style={{
                  backgroundSize: '130%',
                  backgroundPosition: 'center 30%',
                  backgroundRepeat: 'no-repeat'
                }}
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