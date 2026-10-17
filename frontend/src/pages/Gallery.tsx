import { motion } from 'motion/react';

const images = [
  // Bridal & Makeup
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80", // South Asian Bridal
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80", // Luxury Makeup
  "https://images.unsplash.com/photo-1512496015851-a1dc8a5c97ce?auto=format&fit=crop&q=80", // Elegant Updo
  "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80", // Bridal Jewellery
  // Hair & Styling
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80", // Salon Interior
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80", // Hair Styling
  "https://images.unsplash.com/photo-1516975080661-aa2a12c8bc20?auto=format&fit=crop&q=80", // Wavy Hair
  // Spa & Skincare
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80", // Spa
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80", // Skincare
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-ivory pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Portfolio</h1>
          <p className="text-gray-600">A glimpse into the artistry and transformations at LUMIÈRE.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden cursor-pointer"
            >
              <img src={src} alt="Gallery" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white uppercase tracking-widest text-sm border-b border-white pb-1">View Look</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}