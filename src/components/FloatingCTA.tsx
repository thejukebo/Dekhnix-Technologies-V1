import { MessageCircle, Calendar } from 'lucide-react';

interface FloatingCTAProps {
  onBookProgram: () => void;
}

export default function FloatingCTA({ onBookProgram }: FloatingCTAProps) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/91XXXXXXXXXX?text=Hi! I want to know more about Dekhnix programs for my college.', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-4">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 smooth-transition animate-pulse"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={onBookProgram}
        className="w-14 h-14 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-full flex items-center justify-center shadow-lg hover:scale-110 smooth-transition animate-glow"
        aria-label="Book Program"
      >
        <Calendar className="w-6 h-6 text-[#0B0C10]" />
      </button>
    </div>
  );
}
