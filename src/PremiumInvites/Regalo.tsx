
import { useState } from "react"
import { motion } from "framer-motion"
// import { Popup } from "@/components/popup"

export const Regalos = () => {
    const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

    // const openPopup = () => setIsPopupOpen(true)
    // const closePopup = () => setIsPopupOpen(false)

    return (
        <section id="regalos" className="bg-stone-400 px-2 py-12 flex justify-center items-center font-serif">

        <motion.div 
          className="grid text-center text-white justify-items-center w-full mx-4 md:max-w-[500px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
          >
          
            <img src="./images/icono-regalo.svg" width="180"  className="mx-auto -mt-12"/>
            <p>Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...</p>
            <button onClick={() => setIsGiftModalOpen(true)} className="bg-gray-100 rounded-[30] mt-6 text-gray-700 p-2 hover:opacity-50 text-xl w-full">VER DATOS BANCARIOS</button>
            
        </motion.div>

        {/* Gift Registry Modal */}
        {isGiftModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div 
                    className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-auto transform transition-all duration-300 animate-modal-appear" 
                >
                    <div className="border-2 border-stone-300 m-1 rounded-lg overflow-hidden">
                    <div className="bg-stone-100 p-6 md:p-8">
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

      </section>
        
    )
}