const Gallery = () => {
  // Array of image paths
  const images = [
    {img:'./images/married1.jpg', src:"/invitart2/#/vintage", description:"Vintage"},
    {img:'./images/married3.jpg', src:"/invitart2/#/modern", description:"Moderna"},
    {img:'./images/married2.jpg', src:"/invitart2/#/premium", description:"Premium"},
    {img:'./images/married4.jpg', src:"/invitart2/#/sectionized", description:"Por secciones"},
    {img:'./images/genderreveal.jpg', src:"/invitart2/#/genderreveal", description:"Gender Reveal"},
  ];
  
  return (
    <div id="gallery" className="py-24 px-4 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-rose-900 mb-16">Modelos de Invitaciones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <a key={index} href={img.src}>
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${img.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-rose-100/30 to-pink-200/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-medium mb-2">{img.description}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Elegí este diseño y personalizalo.
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;