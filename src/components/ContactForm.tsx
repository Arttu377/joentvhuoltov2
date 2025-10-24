import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    nimi: '',
    puhelinnumero: '',
    sahkoposti: '',
    viesti: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would handle the form submission
  };
  return <section id="yhteydenotto" className="relative py-12 bg-gradient-to-r from-white to-[#d1dae8] z-30">
      <div className="container-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Description */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.7
          }} viewport={{
            once: true
          }} className="lg:pr-8">
              <div className="mb-6">
                <span className="text-[#2B4565] text-sm font-medium uppercase tracking-wide py-0">
                  OTA YHTEYTTÄ
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2b4565]">
                Ota yhteyttä tämän lomakkeen kautta ja palaan sinulle mahdollisimman pian
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Kerro meille projektistasi ja autamme sinua löytämään parhaan ratkaisun.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-[#2B4565]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Asiantunteva palvelu</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-[#2B4565]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Nopea toteutus</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-[#2B4565]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Yli 30 vuoden kokemus</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  
                  
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-[#2b4565]">Yhteydenottolomake</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nimi" className="block text-sm font-medium text-gray-700 mb-2">
                      Nimi *
                    </label>
                    <input type="text" id="nimi" name="nimi" value={formData.nimi} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2B4565] focus:border-transparent transition-colors" placeholder="Nimesi" />
                  </div>
                  
                  <div>
                    <label htmlFor="puhelinnumero" className="block text-sm font-medium text-gray-700 mb-2">
                      Puhelinnumero *
                    </label>
                    <input type="tel" id="puhelinnumero" name="puhelinnumero" value={formData.puhelinnumero} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2B4565] focus:border-transparent transition-colors" placeholder="+358 XX XXX XXXX" />
                  </div>
                </div>

                <div>
                  <label htmlFor="sahkoposti" className="block text-sm font-medium text-gray-700 mb-2">
                    Sähköposti *
                  </label>
                  <input type="email" id="sahkoposti" name="sahkoposti" value={formData.sahkoposti} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2B4565] focus:border-transparent transition-colors" placeholder="email@esimerkki.fi" />
                </div>

                <div>
                  <label htmlFor="viesti" className="block text-sm font-medium text-gray-700 mb-2">
                    Viesti
                  </label>
                  <textarea id="viesti" name="viesti" value={formData.viesti} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2B4565] focus:border-transparent transition-colors resize-none" placeholder="Kerro tähän tarpeistasi..." />
                </div>

                <button type="submit" className="w-full bg-[#2B4565] hover:bg-[#1e3147] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg">
                  <Send size={20} />
                  Lähetä
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;