import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-ivory pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">Get in Touch</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-gold mt-1" />
              <div>
                <h3 className="font-serif text-xl mb-1">Location</h3>
                <p className="text-gray-600">MM Alam Road, Gulberg III<br />Lahore, Pakistan</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-gold mt-1" />
              <div>
                <h3 className="font-serif text-xl mb-1">Phone</h3>
                <p className="text-gray-600">+92 300 1234567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-gold mt-1" />
              <div>
                <h3 className="font-serif text-xl mb-1">Email</h3>
                <p className="text-gray-600">hello@lumiere.com.pk</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-gold mt-1" />
              <div>
                <h3 className="font-serif text-xl mb-1">Hours</h3>
                <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80" alt="Contact" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}