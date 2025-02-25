import { motion } from "framer-motion"

interface CeremoniaProps {
  Iglesia?: React.ComponentType;
  Salon?: React.ComponentType;
}

export const CeremoniayFiesta = ({ Iglesia, Salon }: CeremoniaProps) => {

    return (
        <section id="ceremonia" className="px-2 bg-gray-100 py-12 grid grid-cols-1 justify-items-center">

      <motion.div 
          className="mt-6 w-full md:max-w-lg mx-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
          >
          <div className="grid text-center pb-12 justify-items-center w-full">
          <img 
              src="./images/icono-ceremonia.svg" 
              width="180" 
              className="mx-auto -mt-12"
              />
            <h2
                className="font-medium text-3xl mb-6" 
                >
                  CEREMONIA
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
            {Iglesia && <Iglesia />}
            <a className="w-full" href="https://www.google.com/maps/dir//Christ+the+King+Parish,+Brassey+8198,+S2007BBT+Rosario,+Santa+Fe/@-32.9070496,-60.8104456,13z/data=!4m18!1m8!3m7!1s0x95b652e958493553:0xd725aeba1fdeb4e1!2sChrist+the+King+Parish!8m2!3d-32.922925!4d-60.739146!15sCgpjcmlzdG8gcmV5kgEPY2F0aG9saWNfY2h1cmNo4AEA!16s%2Fg%2F1v470jkn!4m8!1m0!1m5!1m1!1s0x95b652e958493553:0xd725aeba1fdeb4e1!2m2!1d-60.739146!2d-32.9230218!3e3?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D">
              <button className="bg-gray-800 rounded-[30] mt-6 text-white p-2 hover:opacity-50 text-xl w-full">LLEGAR A LA CEREMONIA</button>
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="mt-6 w-full md:max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
          >
          <div className="grid text-center pb-12 justify-items-center w-full">
          <img 
              src="./images/icono-fiesta.svg" 
              width="180" 
              className="mx-auto -mt-12"
              />
            <h2
                className="font-medium text-3xl mb-6" 
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
            {Salon && <Salon />}
            <a className="w-full" href="https://www.google.com/maps/dir//Gral.+las+Heras+800,+S2132+Funes,+Santa+Fe/@-32.8978597,-60.8625785,17z/data=!4m18!1m8!3m7!1s0x95b64c001306d59b:0x75cf631d5b676db0!2sGral.+las+Heras+800,+S2132+Funes,+Santa+Fe!3b1!8m2!3d-32.8978642!4d-60.8600036!16s%2Fg%2F11l71zc4_l!4m8!1m0!1m5!1m1!1s0x95b64c001306d59b:0x75cf631d5b676db0!2m2!1d-60.8600036!2d-32.8978642!3e3?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D">
              <button className="bg-gray-800 rounded-[30] mt-6 text-white p-2 hover:opacity-50 text-xl w-full">LLEGAR A LA FIESTA</button>
            </a>
          </div>
        </motion.div>

      </section>
        
    )
}