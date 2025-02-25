import { motion } from "framer-motion"

interface InstagramProps {
  instagramNovio: string
  instagramNovia: string
}

export const InstagramSection = ({instagramNovia, instagramNovio}: InstagramProps) => {

    return (
        <section className="mx-auto bg-stone-100 px-2 py-12 flex justify-center items-center">

      <motion.div 
          className="grid text-center justify-items-center w-full mx-4 md:max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
            <img 
                    src="./images/icono-instagram.svg" 
                    width="180" 
                    className="mx-auto -mt-12"
            />
            <p>¡Preparate para nuestro gran día!</p>
            <p>Ya podés seguirnos en nuestras cuentas para ver todas las novedades del casamiento y etiquetarnos en tus fotos y videos.</p>
            <button className="bg-gray-800 rounded-[30] mt-6 text-white p-2 hover:opacity-50 text-2xl w-full">{instagramNovia}</button>
            <button className="bg-gray-800 rounded-[30] mt-6 text-white p-2 hover:opacity-50 text-2xl w-full">{instagramNovio}</button>
        </motion.div>

      </section>
        
    )
}