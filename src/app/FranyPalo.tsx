import { useEffect } from 'react'
import { CancionesSection } from '@/InviteComponents/Canciones/page'
import { CeremoniayFiesta } from '@/InviteComponents/Ceremonia/page'
import { ConfirmacionSection } from '@/InviteComponents/Confirmacion/page'
import { CountdownSection } from '@/InviteComponents/CountdownSection/page'
import { DressCodeSection } from '@/InviteComponents/DressCode/page'
import { FotosSection } from '@/InviteComponents/Fotos/page'
import { InstagramSection } from '@/InviteComponents/Instagram/page'
import { Portada } from '@/InviteComponents/Portada/page'
import { Separator } from '@/components/ui/separator'
import BackgroundMusic from '@/InviteComponents/AudioComponent/Audio'
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

export default function FranyPalo() {
    useEffect(() => {
      document.title = "Agus & Mery";
      setFavicon();
    }, []);

    return (
    <main>
            <Navbar />
            <BackgroundMusic Song="./music/MarryYou.mp3"/>
            <Portada novio="Agus" novia="Mery" />
            <Separator className='my-4'/>
            <CountdownSection onCountdownEnd={handleCountdownEnd} date="2025-09-28T15:50:59"/>
            <Separator className='my-4'/>
            <CeremoniayFiesta />
            <Separator className='my-4'/>
            <ConfirmacionSection fechaLimite='28 de Octubre' form="https://docs.google.com/forms/d/e/1FAIpQLSdaesat24Wb9PDOkQKcYiZhLAwAWAN08l3NphTJiJV4jzgHgQ/viewform?usp=sharing"/>
            <Separator className='my-4'/>
            <FotosSection />
            <Separator className='my-4'/>
            <InstagramSection instagramNovia="@agus" instagramNovio="@mery" />
            <Separator className='my-4'/>
            <DressCodeSection dressCode="Formal Elegante" />
            <Separator className='my-4'/>
            <CancionesSection />
    
    </main>
    
)}