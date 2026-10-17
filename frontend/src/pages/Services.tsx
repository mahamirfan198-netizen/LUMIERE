import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type { ServiceCategory } from '@/lib/api';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await api.get<ServiceCategory[]>('/services');
      return res.data;
    },
  });

  return (
    <div className="min-h-screen bg-ivory pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Indulge in our curated menu of premium hair, makeup, and skincare treatments.</p>
        </div>

        {isLoading && <p className="text-center text-gold animate-pulse">Loading services...</p>}

        <div className="grid gap-16">
          {categories?.map((category) => (
            <div key={category.id}>
              <h2 className="text-3xl font-serif mb-8 border-b border-champagne pb-4">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service) => (
                  <div key={service.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={service.imageUrl || 'https://images.unsplash.com/photo-1560066984-138dadb4c035'} 
                        alt={service.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-serif text-xl mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-500 mb-4 flex-1">{service.description}</p>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 text-sm font-medium">
                        <span className="flex items-center gap-1 text-gray-500"><Clock className="h-4 w-4" /> {service.duration} min</span>
                        <span className="text-gold font-semibold">PKR {service.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link to="/booking" className="inline-block bg-charcoal text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-charcoal/90 transition-colors">
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}