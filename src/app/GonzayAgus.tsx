import { CancionesSection } from '@/InviteComponents/Canciones/page'
import { CeremoniayFiesta } from '@/InviteComponents/Ceremonia/page'
import { ConfirmacionSection } from '@/InviteComponents/Confirmacion/page'
import { CountdownSection } from '@/InviteComponents/CountdownSection/page'
import { DressCodeSection } from '@/InviteComponents/DressCode/page'
import { FotosSection } from '@/InviteComponents/Fotos/page'
import { InstagramSection } from '@/InviteComponents/Instagram/page'
import { Portada } from '@/InviteComponents/Portada/page'
import { Separator } from '@radix-ui/react-select'
import { IglesiaGonzayAgus } from '@/InviteComponents/Ceremonia/Mapas/GonzayAgus/Iglesia'
import { SalonGonzayAgus } from '@/InviteComponents/Ceremonia/Mapas/GonzayAgus/Salon'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'


const handleCountdownEnd = () => {
  console.log("Countdown finished!");
  // You can perform any additional actions needed when the countdown finishes
}
const setFavicon = () => {
  const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
  if (link) {
    link.href = "./images/ring.svg";
  }
};

export default function GonzayAgus() {
    useEffect(() => {
      document.title = "Agus & Gonza";
      setFavicon();
    }, []);

    return (
    <main >
            <Navbar />
            <Portada novio="Gonza" novia="Agus" />
            <Separator className='my-4'/>
            <CountdownSection onCountdownEnd={handleCountdownEnd} date="2025-04-21T15:50:59"/>
            <Separator className='my-4'/>
            <CeremoniayFiesta Iglesia={IglesiaGonzayAgus} Salon={SalonGonzayAgus} />
            <Separator className='my-4'/>
            <ConfirmacionSection fechaLimite="19 de Septiembre" form=""/>
            <Separator className='my-4'/>
            <FotosSection />
            <Separator className='my-4'/>
            <InstagramSection instagramNovia="@agus" instagramNovio="@gonza"  />
            <Separator className='my-4'/>
            <DressCodeSection dressCode="Formal Elegante" />
            <Separator className='my-4'/>
            <CancionesSection />
    
    </main>
    
)}