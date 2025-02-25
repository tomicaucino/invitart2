interface ConfirmacionProps {
    fechaLimite: string;
    form: string
  }
  
  export const ConfirmacionSection = ({fechaLimite, form}: ConfirmacionProps) => {
  
      return (
          <section id="asistencia" className="flex justify-center px-2 py-12 bg-gray-100 font-serif">
  
  
            <div className="grid text-center justify-items-center w-full mx-4 md:max-w-lg">
  
                  <div className="grid text-center pb-12 justify-items-center w-[100%]">
                    <h2 className="font-medium text-3xl mb-6">¡Confirmanos tu asistencia antes del <strong>{fechaLimite}!</strong></h2>
                    <a href={form} className="w-full"><button className="bg-gray-800 rounded-[30] mt-6 text-white p-2 hover:opacity-50 text-2xl px-6">RSVP</button></a>
                  </div>
  
                  <div className="grid text-center pb-12 justify-items-center w-[100%]">
                    <img src="./images/icono-calendario.svg"  width="180" className="mx-auto -mt-12 img-fluid"/>
                    <p className="-mt-6">¡Agendá la fecha en tu calendario!</p>
                    <button className="bg-gray-800 rounded-[30] mt-6 text-white p-2 hover:opacity-50 text-2xl px-6">AGENDAR FECHA</button>
                  </div>
              
            </div>
        </section>
          
      )
  }