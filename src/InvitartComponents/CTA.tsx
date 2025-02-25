const CTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-24 overflow-hidden bg-purple-50">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-12 md:p-16 text-center backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-6">Listo Para Crear Tu Invitación?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Permitinos ayudarte a crear un dieseño personalizado que se ajuste a tus preferencias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get Started Now
            </button>
            <button 
              className="bg-transparent border-2 border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl text-lg"
              onClick={() => scrollToSection('gallery')}
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

  export default CTA;