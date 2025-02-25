const Testimonials = () => {
  const testimonials = [
    {
      quote: "The digital invitation you created for our wedding was absolutely perfect! Our guests couldn't stop talking about how beautiful and unique it was.",
      author: "Sarah & Michael",
      role: "Newlyweds"
    },
    {
      quote: "I was worried about managing RSVPs, but your system made it incredibly easy. The design exceeded our expectations!",
      author: "Jennifer & David",
      role: "Married June 2024"
    },
    {
      quote: "The anniversary invitation you designed brought tears to my eyes. Thank you for capturing our journey so beautifully.",
      author: "Robert & Emma",
      role: "25th Anniversary"
    }
  ];

  return (
    <div id="testimonials" className="bg-purple-50 py-24 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-rose-900 mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="bg-rose-500 w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">"</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6 pt-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-medium text-rose-800">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimonials;