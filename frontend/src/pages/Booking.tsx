import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type { ServiceCategory, Service } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Clock, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Booking() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({ customerName: '', phone: '', email: '', date: '', timeSlot: '10:00', notes: '' });
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await api.get<ServiceCategory[]>('/services');
      return res.data;
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;
    setErrorMsg('');

    try {
      await api.post('/bookings', {
        ...formData,
        serviceId: selectedService.id,
      });
      setIsSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle2 className="h-20 w-20 text-gold mb-6" />
        <h1 className="text-4xl font-serif mb-4">Booking Confirmed</h1>
        <p className="text-gray-600 mb-8 max-w-md">Thank you, {formData.customerName}. Your appointment for {selectedService?.name} has been received. We will contact you shortly to confirm.</p>
        <Link to="/" className="bg-charcoal text-white px-8 py-3 uppercase tracking-widest text-xs hover:bg-charcoal/90">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory text-charcoal py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center text-sm uppercase tracking-widest text-gray-500 hover:text-gold mb-8">
          <ChevronLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>

        <h1 className="text-4xl font-serif mb-2">Book Your Experience</h1>
        <p className="text-gray-500 mb-12">Select a service and fill in your details.</p>

        {isLoading && <p className="text-gold animate-pulse">Loading services...</p>}
        {error && <div className="bg-red-50 text-red-600 p-4 mb-8">Failed to load services. Ensure backend is running.</div>}

        {!isLoading && !error && categories && !selectedService && (
          <div className="grid gap-12">
            {categories.map((category) => (
              <div key={category.id}>
                <h2 className="text-3xl font-serif mb-6 border-b border-champagne pb-2">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <div 
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gold/50 cursor-pointer transition-all overflow-hidden flex flex-col group"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={service.imageUrl || 'https://images.unsplash.com/photo-1560066984-138dadb4c035'} 
                          alt={service.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-serif text-xl mb-2">{service.name}</h3>
                        <p className="text-sm text-gray-500 mb-4 flex-1">{service.description}</p>
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 text-sm font-medium">
                          <span className="flex items-center gap-1 text-gray-500"><Clock className="h-4 w-4" /> {service.duration} min</span>
                          <span className="text-gold">PKR {service.price.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedService && (
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="bg-white border border-gray-100 shadow-sm overflow-hidden sticky top-8">
                <img 
                  src={selectedService.imageUrl || 'https://images.unsplash.com/photo-1560066984-138dadb4c035'} 
                  alt={selectedService.name} 
                  className="w-full h-56 object-cover" 
                />
                <div className="p-6 bg-charcoal text-white">
                  <p className="text-gold uppercase tracking-widest text-xs mb-2">Selected Service</p>
                  <h3 className="font-serif text-2xl mb-2">{selectedService.name}</h3>
                  <p className="text-gray-400">PKR {selectedService.price.toLocaleString()} • {selectedService.duration} mins</p>
                </div>
              </div>
              <Button variant="outline" onClick={() => setSelectedService(null)} className="w-full mt-4 rounded-none border-charcoal text-charcoal">
                Change Service
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4 bg-white p-8 border border-gray-100 shadow-sm">
              <h3 className="font-serif text-2xl mb-6">Your Details</h3>
              
              {errorMsg && <div className="bg-red-50 text-red-600 p-3 text-sm">{errorMsg}</div>}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input required type="text" className="w-full p-3 border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                  value={formData.customerName} onChange={e => setFormData({...formData, customerName: e.target.value})} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input required type="tel" className="w-full p-3 border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                <input type="email" className="w-full p-3 border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input required type="date" className="w-full p-3 border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                    value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time Slot</label>
                  <select className="w-full p-3 border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white" 
                    value={formData.timeSlot} onChange={e => setFormData({...formData, timeSlot: e.target.value})}>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>

              <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-white rounded-none py-6 uppercase tracking-widest text-xs mt-6">
                Confirm Booking
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}