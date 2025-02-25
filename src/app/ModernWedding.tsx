import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar'
import BackgroundMusic from '@/InviteComponents/AudioComponent/Audio';


const setFavicon = () => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "./images/ring.svg";
    }
  };

const ModernWedding = () => {

    useEffect(() => {
        document.title = "Emma & James";
        setFavicon();
      }, []);    
  // State for parallax effect
  const [offset, setOffset] = useState(0);
  
  // State for fade-in elements
  const [visible, setVisible] = useState(false);
  
  // Wedding details - you can customize these
  const weddingDetails = {
    brideFirstName: "Emma",
    groomFirstName: "James",
    brideLastName: "Johnson",
    groomLastName: "Wilson",
    date: "June 12, 2025",
    time: "4:00 PM",
    venueName: "Crystal Garden Resort",
    venueAddress: "123 Blossom Lane, Paradise City",
    receptionTime: "6:00 PM",
    rsvpDeadline: "April 30, 2025",
    rsvpContact: "rsvp@emmaandjames.com",
    hashtag: "#EmmaAndJames2025",
    weddingWebsite: "www.emmaandjames.com",
    story: "We met during a summer hiking trip in 2020, and have been inseparable ever since. After three wonderful years together, James proposed during our vacation in Italy. We are thrilled to celebrate our special day with you!"
  };
  
  // For parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <BackgroundMusic Song="./music/MarryYou.mp3"/>
      <div className="font-sans text-gray-800 bg-gray-50 overflow-x-hidden w-screen font-serif">
        {/* Hero Section with Parallax */}
        <section 
          className="h-screen bg-cover bg-center flex items-center justify-center relative bg-fixed"
          style={{ 
            backgroundImage: `url('./images/couple2.jpg')`,
            backgroundPositionY: `${offset * 0.01}px` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div 
            className={`text-center text-white z-10 p-8 transition-all duration-700 ease-out ${
              visible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            <h1 className="font-serif font-normal text-5xl md:text-6xl mb-2">Nos Casamos!</h1>
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-6">{weddingDetails.brideFirstName} & {weddingDetails.groomFirstName}</h2>
            <p className="text-xl md:text-2xl tracking-wider">{weddingDetails.date}</p>
          </div>
        </section>
        
        {/* Photo Gallery with Hover Effects */}
        <section className="py-20 px-6 text-center bg-white">
          <h2 className="font-serif text-4xl mb-6">Nuestro Camino</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {/* Add your actual image paths */}
            <div className="relative overflow-hidden rounded-lg shadow-lg w-full md:w-64 lg:w-80 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <img 
                src="./images/couple4.jpg" 
                alt="Couple first meeting" 
                className="w-full h-96 object-cover block transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-lg m-0">Donde empezó todo</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg w-full md:w-64 lg:w-80 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <img 
                src="./images/couple5.jpg" 
                alt="Engagement" 
                className="w-full h-96 object-cover block transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-lg m-0">La propuesta</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg w-full md:w-64 lg:w-80 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <img 
                src="./images/couple3.jpg" 
                alt="Together" 
                className="w-full h-96 object-cover block transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-lg m-0">Aventuras juntos</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 px-6 text-center bg-gray-50">
          <h2 className="font-serif text-4xl mb-6">Nuestra historia</h2>
          <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg relative">
            <p className="relative z-10">{weddingDetails.story}</p>
            <span className="absolute top-0 left-4 text-8xl text-pink-200 opacity-20 font-serif">"</span>
          </div>
        </section>
        
        {/* Wedding Details */}
        <section className="py-20 px-6 bg-white text-center">
          <h2 className="font-serif text-4xl mb-6">Detalles del casamiento</h2>
          <div className="flex flex-wrap justify-center gap-12 mt-12">
            <div className="p-12 rounded-lg shadow-lg w-full max-w-md transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-pink-300"></div>
              <h3 className="font-serif text-2xl mb-4">Ceremonia</h3>
              <p className="text-xl font-medium mb-2">{weddingDetails.time}</p>
              <p className="text-lg mb-1">{weddingDetails.venueName}</p>
              <p className="text-sm text-gray-500">{weddingDetails.venueAddress}</p>
            </div>
            
            <div className="p-12 rounded-lg shadow-lg w-full max-w-md transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-300"></div>
              <h3 className="font-serif text-2xl mb-4">Recepcion</h3>
              <p className="text-xl font-medium mb-2">{weddingDetails.receptionTime}</p>
              <p className="text-lg mb-1">{weddingDetails.venueName}</p>
              <p className="text-sm text-gray-500">Seguido de Cena y Baile</p>
            </div>
          </div>
        </section>
        
        {/* RSVP Section */}
        <section className="py-20 px-6 bg-gray-50 text-center">
          <h2 className="font-serif text-4xl mb-6">RSVP</h2>
          <p>Please respond by {weddingDetails.rsvpDeadline}</p>
          <form className="max-w-2xl mx-auto mt-12 p-12 bg-white rounded-lg shadow-lg">
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                required
                className="w-full p-4 border border-gray-300 rounded text-base transition-all duration-300 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
            <div className="mb-6">
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                className="w-full p-4 border border-gray-300 rounded text-base transition-all duration-300 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
            <div className="mb-6">
              <select 
                defaultValue=""
                className="w-full p-4 border border-gray-300 rounded text-base transition-all duration-300 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
              >
                <option value="" disabled>Number of Guests</option>
                <option value="1">Solo yo (1)</option>
                <option value="2">Yo + invitadx (2)</option>
              </select>
            </div>
            <div className="mb-6">
              <select 
                defaultValue=""
                className="w-full p-4 border border-gray-300 rounded text-base transition-all duration-300 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
              >
                <option value="" disabled>Venis?</option>
                <option value="yes">Ahi estaré</option>
                <option value="no">Desafortunadamente no</option>
              </select>
            </div>
            <div className="mb-6">
              <textarea 
                placeholder="Any dietary restrictions or special notes?"
                className="w-full p-4 min-h-32 border border-gray-300 rounded text-base transition-all duration-300 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 resize-y"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-orange-300 text-white border-0 py-4 px-8 text-base rounded cursor-pointer transition-all duration-300 hover:bg-pink-500 hover:transform hover:-translate-y-1 tracking-wide"
            >
              Confirmar
            </button>
          </form>
        </section>
        
        {/* Countdown Timer */}
        <section className="py-20 px-6 bg-orange-200 text-center text-white">
          <h2 className="font-serif text-4xl mb-6 text-white">Cuenta atras hacia nuestro gran día</h2>
          <CountdownTimer weddingDate="2025-06-12" />
        </section>
        
        {/* Footer */}
        <footer className="py-12 px-6 text-center bg-gray-800 text-white">
          <p className="mb-2">Esperamos celebrarlo con vos!</p>
          <p className="text-orange-300 mb-2">{weddingDetails.hashtag}</p>
          <p>
          </p>
        </footer>
      </div>
    </main>
  );
};

// Countdown Timer Component
const CountdownTimer: React.FC<{ weddingDate: string }> = ({ weddingDate }) => {
  // Initialize state for countdown values
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Function to calculate time difference
    const calculateTimeLeft = () => {
        const TARGET_DATE = new Date();
        TARGET_DATE.setDate(TARGET_DATE.getDate() + 87);
        TARGET_DATE.setHours(12, 0, 0, 0);
    //   const difference = +new Date(weddingDate) - +new Date(); // reactivate in production
    const difference = +new Date(TARGET_DATE) - +new Date(); // deactivate in production

        
      
      
      // If the date has passed, return all zeros
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      // Calculate time units
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Set initial values
    setTimeLeft(calculateTimeLeft());
    
    // Set up interval to update countdown
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className="flex justify-center flex-wrap gap-8 mt-12">
      <div className="flex flex-col items-center">
        <span className="text-5xl font-serif leading-none">{timeLeft.days}</span>
        <span className="text-sm uppercase tracking-widest mt-2">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-serif leading-none">{timeLeft.hours}</span>
        <span className="text-sm uppercase tracking-widest mt-2">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-serif leading-none">{timeLeft.minutes}</span>
        <span className="text-sm uppercase tracking-widest mt-2">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-serif leading-none">{timeLeft.seconds}</span>
        <span className="text-sm uppercase tracking-widest mt-2">Seconds</span>
      </div>
    </div>
  );
};

export default ModernWedding;