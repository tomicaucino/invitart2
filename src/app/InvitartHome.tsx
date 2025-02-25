import { useEffect } from 'react';
import Features from '@/InvitartComponents/Features';
import Hero from '@/InvitartComponents/Hero';
import CTA from '@/InvitartComponents/CTA';
import Gallery from '@/InvitartComponents/Gallery';
// import Testimonials from '@/InvitartComponents/Testimonials';
import Footer from '@/InvitartComponents/Footer';
import Navbar from '@/InvitartComponents/Navbar';
import Contact from '@/InvitartComponents/Contact';



// Add global styles for animations
const globalStyles = `
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.7s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.7s ease-out forwards;
}
`;

// Main App Component
const Home = () => {
  useEffect(() => {
    // Add global styles when component mounts
    const styleElement = document.createElement('style');
    styleElement.innerHTML = globalStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      // Clean up when component unmounts
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="font-sans w-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Gallery />
        {/* <Testimonials /> */}
        <CTA />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;