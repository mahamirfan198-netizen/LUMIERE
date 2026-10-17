export default function About() {
  return (
    <div className="min-h-screen bg-ivory pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">The LUMIÈRE Story</h1>
          <p className="text-gray-500 uppercase tracking-widest text-sm">Redefining Beauty in Lahore</p>
        </div>
        
        <div className="relative h-[500px] mb-16">
          <img 
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">Where Art Meets Beauty</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in the heart of Lahore, LUMIÈRE was born from a simple vision: to create a sanctuary where beauty meets artistry. We believe that true luxury lies in the details—from the warmth of our welcome to the precision of our craft.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of master stylists and aestheticians are continuously trained in international techniques, ensuring that every visit leaves you feeling elevated and refreshed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80" alt="Makeup" className="w-full h-64 object-cover" />
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80" alt="Hair" className="w-full h-64 object-cover mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
}