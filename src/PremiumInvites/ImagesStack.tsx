import { useState } from "react";

const images = [
    "./images/couple2.jpg",
    "./images/couple.jpg",
    "./images/couple3.jpg",
    "./images/couple4.jpg",
    "./images/couple5.jpg",
  ];

  const ImageStack = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    return (

        <section className="bg-gray-200 py-8 w-screen font-serif">
        <div className="mx-auto px-4 w-full md:max-w-6xl">
          <h2 className="text-2xl mb-8 text-center tracking-wider">NOSOTROS..</h2>
            <div className="relative flex h-full w-full flex-col items-center justify-center">
                <div className="relative w-80 h-80 cursor-pointer" onClick={handleClick}>
                {images.map((src, index) => {
                    const rotation = index % 2 === 0 ? "-rotate-6" : "rotate-6"; // Alternating tilt
                        return (
                            <img
                            key={index}
                            src={src}
                            alt={`Layer ${index}`}
                            className={`absolute inset-0 w-full h-full object-cover border-4 border-white shadow-lg transition-all duration-700 ${
                                index === currentIndex
                                ? `opacity-100 scale-100 ${rotation}`
                                : "opacity-0 scale-125"
                            }`}
                            />
                        );
                    })}
                </div>

            </div>
        </div>
      </section>

      
    );
  };

export default ImageStack;

