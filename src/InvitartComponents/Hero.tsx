import { useEffect, useState } from 'react';
import { HeartIcon } from 'lucide-react';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 -top-[1110px] bg-cover bg-center" 
        style={{
          backgroundImage: "url('./images/married.jpg')",
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100/40 to-pink-200/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <div 
          className="animate-fade-in-down"
          style={{animationDelay: '0.3s'}}
        >
          <HeartIcon className="h-20 w-20 text-rose-600 mx-auto mb-8" />
        </div>
        <h1 className="text-5xl md:text-7xl font-serif tracking-wide text-rose-900 mb-6 animate-fade-in-down">
          InvitArt
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl text-rose-800 mb-8 animate-fade-in-down" style={{animationDelay: '0.5s'}}>
          Invitaciones Digitales Para Tus Celebraciones
        </p>
        <button 
          className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl animate-fade-in-up" 
          style={{animationDelay: '0.8s'}}
          onClick={() => scrollToSection('gallery')}
        >
          Ver Modelos de Invitaciones
        </button>
      </div>
    </div>
  );
};

export default Hero;