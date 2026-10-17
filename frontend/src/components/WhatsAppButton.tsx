import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "923001234567";
  const message = encodeURIComponent("Hello LUMIÈRE! I would like to inquire about your services.");
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}