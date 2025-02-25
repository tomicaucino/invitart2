import { motion } from "framer-motion"

interface DressCodeProps {
    dressCode: string
}

export const DressCodeSection = ({dressCode}: DressCodeProps) => {
    return (
        <section className="mx-auto bg-orange-100 p-12 flex justify-center" id="dress-code">
            <motion.div 
                className="grid text-center w-full md:max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <img 
                    src="./images/icono-dresscode.svg" 
                    alt="Dress code icon"
                    width="180"
                    height="180" // Add height for better CLS
                    className="mx-auto -mt-12"
                />
                <h2 className="text-2xl mb-8 text-center font-medium">DRESS CODE</h2>
                <p className="text-lg">{dressCode}.</p>
            </motion.div>
        </section>
    )
}