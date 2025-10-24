
import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Alice allowed us to scale outbound efforts without sacrificing personalization. It's been a crucial multiplier for our team.",
    name: "Matthew Lenhart",
    title: "Senior Manager, Sales Ops & Strategy at Otter.ai",
    company: "Otter.ai",
    logo: "otter",
    bgColor: "bg-[#efeaf5]",
  },
  {
    id: 2,
    quote: "Mike allows us to retarget hundreds of thousands of old leads. It's like unlocking a new opportunity we never thought was possible.",
    name: "Sales Team",
    title: "Connecteam",
    company: "Connecteam",
    logo: "connecteam",
    bgColor: "bg-[#fde7dc]",
  },
  {
    id: 3,
    quote: "With Mike, we could reach customers in languages we couldn't otherwise support.",
    name: "Growth Marketing",
    title: "Spectinga",
    company: "Spectinga",
    logo: "spectinga",
    bgColor: "bg-[#e9e9e9]",
  }
];

const stats = [
  {
    id: 1,
    value: "$500k",
    description: "on hiring costs saved",
    company: "Otter.ai",
    bgColor: "bg-[#efeaf5]",
  },
  {
    id: 2,
    value: "Handshake",
    description: "",
    company: "Handshake",
    bgColor: "bg-white",
  },
  {
    id: 3,
    value: "Sumup",
    description: "",
    company: "Sumup",
    bgColor: "bg-white",
  }
];

const Testimonials = () => {
  return (
    <section className="py-8 bg-white" id="testimonials">
      <div className="container-section max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Trusted by industry leaders</h2>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Stats box */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 rounded-xl overflow-hidden">
            <div className={`h-full ${stats[0].bgColor} p-8 flex flex-col`}>
              <div className="mt-auto">
                <div className="text-5xl font-bold mb-2">{stats[0].value}</div>
                <div className="text-gray-600">{stats[0].description}</div>
              </div>
              <div className="mt-auto pt-6">
                <div className="font-bold text-lg">
                  <span className="font-black">OI</span>•<span className="font-black">I</span> Otter.ai
                </div>
              </div>
            </div>
          </div>

          {/* Handshake box */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 rounded-xl overflow-hidden border border-gray-100">
            <div className="h-full flex items-center justify-center p-6">
              <div className="font-black text-2xl italic">Handshake</div>
            </div>
          </div>

          {/* First testimonial */}
          <div className="col-span-12 md:col-span-8 lg:col-span-6 rounded-xl overflow-hidden">
            <div className={`h-full ${testimonials[0].bgColor} p-8 flex flex-col`}>
              <div className="text-2xl font-medium mb-8">
                "{testimonials[0].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-medium">{testimonials[0].name}</div>
                <div className="text-gray-600 text-sm">{testimonials[0].title}</div>
              </div>
            </div>
          </div>

          {/* Second testimonial */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6 rounded-xl overflow-hidden">
            <div className={`h-full ${testimonials[1].bgColor} p-8 flex flex-col`}>
              <div className="text-2xl font-medium mb-8">
                "{testimonials[1].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-bold text-lg">connecteam</div>
              </div>
            </div>
          </div>

          {/* Sumup box */}
          <div className="col-span-12 md:col-span-5 lg:col-span-3 rounded-xl overflow-hidden border border-gray-100">
            <div className="h-full flex items-center justify-center p-6">
              <div className="font-black text-xl">
                <span className="inline-block bg-black text-white px-1 py-0.5 rounded">∫</span> sumup°
              </div>
            </div>
          </div>

          {/* Third testimonial */}
          <div className="col-span-12 md:col-span-12 lg:col-span-3 rounded-xl overflow-hidden">
            <div className={`h-full ${testimonials[2].bgColor} p-8 flex flex-col`}>
              <div className="text-2xl font-medium mb-8">
                "{testimonials[2].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-bold flex items-center">
                  <span className="inline-block mr-1">⊙</span> spectinga
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
