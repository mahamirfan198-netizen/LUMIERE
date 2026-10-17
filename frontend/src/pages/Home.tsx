import { motion } from 'motion/react';
import { Calendar, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80" 
          alt="Luxury Salon" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-sm mb-6 text-gold"
          >
            Lahore's Premier Beauty Destination
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-8 leading-tight"
          >
            Elevate Your <br /> Signature Look
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs">
              <Link to="/booking" className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" /> Book Appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal rounded-none px-8 py-6 uppercase tracking-widest text-xs">
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">The Art of Refined Beauty</h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Experience the pinnacle of luxury at LUMIÃˆRE Salon. Our master stylists and makeup artists bring together international techniques and premium products to craft a look that is uniquely yours.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-8 border border-champagne bg-white/50 backdrop-blur-sm">
            <h3 className="font-serif text-xl mb-3">Expert Stylists</h3>
            <p className="text-sm text-gray-500">Award-winning professionals dedicated to your personal style.</p>
          </div>
          <div className="p-8 border border-champagne bg-white/50 backdrop-blur-sm">
            <h3 className="font-serif text-xl mb-3">Premium Products</h3>
            <p className="text-sm text-gray-500">We use only the finest luxury brands in hair and skincare.</p>
          </div>
          <div className="p-8 border border-champagne bg-white/50 backdrop-blur-sm">
            <h3 className="font-serif text-xl mb-3">Bridal Excellence</h3>
            <p className="text-sm text-gray-500">Bespoke bridal packages to make your special day unforgettable.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-champagne/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-16">Client Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-100 shadow-sm text-left">
              <div className="flex text-gold mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-6">"The absolute best salon experience in Lahore. The attention to detail for my bridal makeup was unmatched."</p>
              <p className="font-serif font-bold text-sm uppercase tracking-wider">— Ayesha K.</p>
            </div>
            <div className="bg-white p-8 border border-gray-100 shadow-sm text-left">
              <div className="flex text-gold mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-6">"I've been coming here for a year. The stylists truly listen and the ambiance is pure luxury."</p>
              <p className="font-serif font-bold text-sm uppercase tracking-wider">— Zainab M.</p>
            </div>
            <div className="bg-white p-8 border border-gray-100 shadow-sm text-left">
              <div className="flex text-gold mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-6">"Booked a keratin treatment and it exceeded my expectations. Highly recommend LUMIÈRE."</p>
              <p className="font-serif font-bold text-sm uppercase tracking-wider">— Sarah T.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Highlight Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">The Bridal Experience</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Your Dream Wedding Look, Perfected.</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              From intimate Nikah ceremonies to grand Barat receptions, our master artists specialize in creating flawless, long-lasting bridal looks tailored to your unique style. 
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center gap-3">✓ Comprehensive Bridal Trials</li>
              <li className="flex items-center gap-3">✓ HD & Airbrush Makeup</li>
              <li className="flex items-center gap-3">✓ Hair Styling & Draping</li>
              <li className="flex items-center gap-3">✓ Family & Bridesmaid Packages</li>
            </ul>
            <a href="/booking" className="inline-block bg-gold text-white px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-gold/90 transition-colors">
              Book Bridal Consultation
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80" 
              alt="Bridal Makeup" 
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="bg-charcoal text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl mb-4">LUMIÃˆRE</h3>
            <p className="text-gray-400 text-sm">Redefining beauty standards in Lahore.</p>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-sm mb-4 text-gold">Contact</h4>
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-2"><Phone className="h-4 w-4" /> +92 300 1234567</p>
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-2 mt-2"><MapPin className="h-4 w-4" /> Gulberg III, Lahore</p>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-sm mb-4 text-gold">Hours</h4>
            <p className="text-gray-400 text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
            <p className="text-gray-400 text-sm">Sunday: Closed</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

