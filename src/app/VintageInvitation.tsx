import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar'


const setFavicon = () => {
  const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
  if (link) {
    link.href = "./images/ring.svg";
  }
};

const VintageWedding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    document.title = "Juan & Sofi";
    setFavicon();
  }, []);

  const parallaxRef = useRef(null);
  
  // Wedding date - June 15, 2026
  // const weddingDate = new Date('June 15, 2026 16:00:00').getTime(); reactivate for production
  const weddingDate = new Date(); // deactivate for production
  weddingDate.setDate(weddingDate.getDate() + 87); // deactivate for production
  weddingDate.setHours(12, 0, 0, 0); // deactivate for production
  
  // Handle fade-in animation on load
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);
  
  // Handle parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        setScrollY(window.scrollY);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      // const now = new Date().getTime(); //reactivate for production
      // const difference = weddingDate - now; //reactivate for production
      const difference = +weddingDate - +new Date() // deactivate for production
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [weddingDate]);



  // Animation for elements
  const animationClasses = (delay: any) => `transform transition-all duration-1000 delay-${delay} ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`;

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-amber-50 overflow-x-hidden w-screen">
        {/* Parallax Header Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <div 
            ref={parallaxRef}
            className="absolute inset-0 bg-cover bg-center h-96 md:h-128"
            style={{
              backgroundImage: "url('./images/couple.jpg')",
              transform: `translateY(${scrollY * 0.4}px)`,
              backgroundPosition: 'center 50%',
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-serif italic text-center px-4">
              Juan & Sofia
            </h1>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto p-6 md:p-8 -mt-12 relative z-10">
          <div className="bg-white shadow-xl border border-amber-200">
            <div className="border border-amber-300 m-1 p-6 md:p-12 bg-amber-50">
              
              {/* Animated Heading */}
              <div className={animationClasses('100')}>
                <h3 className="font-serif text-amber-800 text-lg md:text-xl font-light tracking-wide text-center">
                  Together with their families
                </h3>
              </div>
              
              {/* Animated Names */}
              <div className={animationClasses('300')}>
                <h1 className="mt-6 mb-6 text-4xl md:text-6xl text-amber-700 font-serif italic text-center">
                  Juan Cuadrado<span className="text-3xl md:text-4xl text-amber-400 mx-2 inline-block animate-pulse">&</span> Sofia Estevez
                </h1>
              </div>
              
              {/* Animated Invitation Text */}
              <div className={animationClasses('500')}>
                <h2 className="font-serif text-gray-700 text-lg md:text-xl italic font-normal mb-8 text-center">
                  solicitan el honor de tu presencia en su boda
                </h2>
              </div>
              
              {/* Decorative Element - Animated */}
              <div className={`relative flex items-center justify-center my-8 ${animationClasses('700')}`}>
                <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <div className="text-amber-400 animate-spin-slow">✿</div>
                </div>
              </div>
              
              {/* Animated Details */}
              <div className={`my-10 font-serif leading-relaxed text-center ${animationClasses('900')}`}>
                <p className="text-xl md:text-2xl text-gray-700">Sabado, 10 de Junio</p>
                <p className="text-xl md:text-2xl text-gray-700 mb-4">de 2026</p>
                <p className="text-lg md:text-xl text-gray-600">a partir de las 4pm</p>
                <p className="text-xl md:text-2xl text-amber-700 font-semibold mt-6 mb-1">The Grand Victorian Garden</p>
                <p className="text-lg text-amber-800">123 Wildflower Lane, Rosewood</p>
              </div>
              
              {/* Working Animated Countdown */}
              <div className={`my-8 ${animationClasses('1100')}`}>
                <h3 className="text-center text-amber-800 font-serif mb-4">Cuenta regresiva para el gran dia</h3>
                <div className="flex justify-center gap-4">
                  {[
                    { value: timeLeft.days, label: 'Days' },
                    { value: timeLeft.hours, label: 'Hours' },
                    { value: timeLeft.minutes, label: 'Minutes' },
                    { value: timeLeft.seconds, label: 'Seconds' }
                  ].map((unit) => (
                    <div key={unit.label} className="text-center md:w-24 transition-all hover:scale-110 duration-300">
                      <div className="bg-white bg-opacity-70 rounded-lg shadow p-2 w-[75px] sm:w-full">
                        <div className="text-2xl font-bold text-amber-700">{unit.value}</div>
                        <div className="text-xs uppercase tracking-wider text-amber-800">{unit.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Animated RSVP Section */}
              <div className={`mt-12 text-center ${animationClasses('1300')}`}>
                <p className="font-serif text-gray-700 text-lg mb-4">Confirmar asistencia antes del 1ero de Mayo de 2026</p>
                <button className="font-serif border-2 border-amber-300 text-amber-700 px-8 py-3 text-lg tracking-widest hover:bg-amber-300 hover:text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 rounded">
                  RSVP
                </button>
              </div>
              
              {/* Floating Elements - Animated */}
              <div className="relative h-24 mt-12">
                <div className="absolute top-0 left-1/4 text-amber-200 text-2xl animate-float1">♡</div>
                <div className="absolute top-6 right-1/4 text-amber-300 text-xl animate-float2">♡</div>
                <div className="absolute bottom-0 left-1/3 text-amber-200 text-2xl animate-float3">♡</div>
              </div>

              {/* Regalos */}
              <div className={`mt-12 text-center ${animationClasses('1500')}`}>
                <button 
                  onClick={() => setIsGiftModalOpen(true)}
                  className="font-serif border-2 border-amber-300 text-amber-700 px-6 py-1 text-lg tracking-widest hover:bg-amber-300 hover:text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 rounded"
                >
                  Querés dejarnos un regalo?
                </button>
                <p className="text-orange-300 mt-8 font-serif">#Juan&Sofi</p>
              </div>

              {/* Gift Registry Modal */}
              {isGiftModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                  <div 
                      className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-auto transform transition-all duration-300 animate-modal-appear" 
                  >
                      <div className="border-2 border-amber-200 m-1 rounded-lg overflow-hidden">
                      <div className="bg-amber-50 p-6 md:p-8">
                          <div className="flex justify-between items-center mb-6">
                          <h2 className="text-2xl text-amber-800 font-serif">Registro de Regalos</h2>
                          <button 
                              onClick={() => setIsGiftModalOpen(false)}
                              className="text-gray-500 hover:text-gray-700 transition-colors"
                          >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                          </button>
                          </div>
                          
                          <div className="text-center mb-6">
                          <p className="text-gray-700 mb-4">Tu presencia es el mejor regalo, pero si deseas contribuir a nuestro futuro juntos, puedes hacerlo de las siguientes maneras:</p>
                          </div>
                          
                          <div className="space-y-6">
                          {/* Bank Transfer Option */}
                          <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow">
                              <h3 className="text-amber-700 font-serif text-lg mb-2">Transferencia Bancaria</h3>
                              <div className="space-y-2 text-gray-700">
                              <p><span className="font-medium">Banco:</span> Banco Nacional</p>
                              <p><span className="font-medium">Titular:</span> Jane & John Smith</p>
                              <p><span className="font-medium">CBU:</span> 0000000000000000000000</p>
                              <p><span className="font-medium">Alias:</span> BODA.JANE.JOHN</p>
                              </div>
                          </div>
                          
                          {/* Physical Gift Option */}
                          <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow">
                              <h3 className="text-amber-700 font-serif text-lg mb-2">Regalos Físicos</h3>
                              <p className="text-gray-700">
                              Hemos creado un registro en las siguientes tiendas:
                              </p>
                              <div className="flex flex-wrap gap-2 mt-3">
                              {/* <a href="#" className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded transition-colors">
                                  Casa Feliz
                              </a>
                              <a href="#" className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded transition-colors">
                                  Hogar & Diseño
                              </a> */}
                              </div>
                          </div>
                          </div>
                          
                          <div className="mt-8 text-center">
                          <p className="text-amber-800 italic font-serif">
                              ¡Gracias por ser parte de nuestra celebración!
                          </p>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VintageWedding;