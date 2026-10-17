import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`w-full p-6 flex justify-between items-center z-50 ${isHome ? 'absolute top-0 text-white' : 'bg-charcoal text-white'}`}>
      <Link to="/" className="text-2xl font-serif tracking-widest">LUMIÈRE</Link>
      
      <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
        <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
        <Link to="/about" className="hover:text-gold transition-colors">About</Link>
        <Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
        <Link to="/booking" className="hover:text-gold transition-colors">Booking</Link>
        <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
      </div>
      
      <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-charcoal">
        <Link to="/booking">Book Now</Link>
      </Button>
    </nav>
  );
}