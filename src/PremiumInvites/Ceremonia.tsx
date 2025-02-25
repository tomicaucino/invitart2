import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
 
const Ceremonia = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });

    const weddingDate = new Date('June 15, 2026 16:00:00').getTime();

    // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      // const now = new Date().getTime();
      // const difference = weddingDate - now;
      const TARGET_DATE = new Date();
      TARGET_DATE.setDate(TARGET_DATE.getDate() + 87);
      TARGET_DATE.setHours(12, 0, 0, 0);


      const difference = +TARGET_DATE - +new Date()
      
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

  return (
    <section id="ceremonia" className="bg-stone-50 py-10 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto max-w-5xl">

        {/* Working Animated Countdown */}
        <div className="">
              <h3 className="text-center text-stone-800 font-serif mb-4">Cuenta regresiva para el gran dia</h3>
              <div className="flex justify-center gap-4">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Minutes' },
                  { value: timeLeft.seconds, label: 'Seconds' }
                ].map((unit) => (
                  <div key={unit.label} className="text-center md:w-32 transition-all hover:scale-110 duration-300">
                    <div className="bg-white bg-opacity-70 rounded-lg shadow p-2 w-[75px] sm:w-full">
                      <div className="text-2xl font-bold text-stone-700">{unit.value}</div>
                      <div className="text-xs uppercase tracking-wider text-stone-800">{unit.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

        <h2 className="text-4xl font-serif text-center text-stone-900 my-8">Ceremonia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div 
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <motion.div 
                    className=""
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.2 }}
                    viewport={{ once: true }}
                    >
                    <div className="grid text-center pb-12 justify-items-center w-full font-serif ">
                    <img 
                        src="./images/icono-ceremonia.svg" 
                        width="180" 
                        className="mx-auto -mt-12"
                        />
                        <h2
                            className="text-3xl mb-6" 
                            >
                            IGLESIA
                        </h2>
                        <p>
                            19:00 hs
                        </p>
                        <p>    
                            Parroquia Cristo Rey, Rosario, Santa Fe.
                        </p>
                        <p>
                            Brassey 8198, Fisherton
                        </p>
                        <a className="w-full" href="https://www.google.com/maps/dir//Christ+the+King+Parish,+Brassey+8198,+S2007BBT+Rosario,+Santa+Fe/@-32.9070496,-60.8104456,13z/data=!4m18!1m8!3m7!1s0x95b652e958493553:0xd725aeba1fdeb4e1!2sChrist+the+King+Parish!8m2!3d-32.922925!4d-60.739146!15sCgpjcmlzdG8gcmV5kgEPY2F0aG9saWNfY2h1cmNo4AEA!16s%2Fg%2F1v470jkn!4m8!1m0!1m5!1m1!1s0x95b652e958493553:0xd725aeba1fdeb4e1!2m2!1d-60.739146!2d-32.9230218!3e3?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D">
                        <button className="bg-gray-800 rounded-[30] mt-6 text-white p-2 hover:opacity-50 text-xl w-full">LLEGAR A LA CEREMONIA</button>
                        </a>
                    </div>
                </motion.div>
            </div>
            

            <div 
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <motion.div 
                    className=""
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.2 }}
                    viewport={{ once: true }}
                    >
                    <div className="grid text-center pb-12 justify-items-center w-full font-serif ">
                    <img 
                        src="./images/icono-fiesta.svg" 
                        width="180" 
                        className="mx-auto -mt-12"
                        />
                        <h2
                            className="text-3xl mb-6" 
                            >
                            FIESTA
                        </h2>
                        <p>
                            20:30 hs 
                        </p>
                        <p>    
                            Parador 15 (ex TRA NOI)
                        </p>
                        <p>
                            El Mortero 2401, Funes
                        </p>
                        <a className="w-full" href="https://www.google.com/maps/dir//Christ+the+King+Parish,+Brassey+8198,+S2007BBT+Rosario,+Santa+Fe/@-32.9070496,-60.8104456,13z/data=!4m18!1m8!3m7!1s0x95b652e958493553:0xd725aeba1fdeb4e1!2sChrist+the+King+Parish!8m2!3d-32.922925!4d-60.739146!15sCgpjcmlzdG8gcmV5kgEPY2F0aG9saWNfY2h1cmNo4AEA!16s%2Fg%2F1v470jkn!4m8!1m0!1m5!1m1!1s0x95b652e958493553:0xd725aeba1fdeb4e1!2m2!1d-60.739146!2d-32.9230218!3e3?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D">
                        <button className="bg-gray-800 rounded-[30] mt-6 text-white p-2 hover:opacity-50 text-xl w-full">LLEGAR A LA FIESTA</button>
                        </a>
                    </div>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Ceremonia;