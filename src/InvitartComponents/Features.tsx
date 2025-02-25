import { CalendarIcon, MusicIcon } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faImage } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  const features = [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} className="h-12 w-12 text-rose-600"/>,
      title: "Diseños Elegantes",
      description: "Elegí entre nuestras opciones y personalizalo para tu propio gran día"
    },
    {
      icon: <CalendarIcon className="h-12 w-12 text-rose-600" />,
      title: "RSVP Management",
      description: "Integraciones con tu casilla de correo, y google forms."
    },
    {
      icon:<FontAwesomeIcon icon={faImage} className="h-12 w-12 text-rose-600"/>,
      title: "Galerías de Fotos",
      description: "Compartí tus momentos favoritos con distintas secciones de imagemes"
    },
    {
      icon: <MusicIcon className="h-12 w-12 text-rose-600" />,
      title: "Música",
      description: "Agregá sonido de fondo a tus invitaciones"
    }
  ];

  return (
    <div id="services" className="bg-stone-50 py-24 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-rose-900 mb-16">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-medium text-rose-800 text-center mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;