import ImageStack from "@/PremiumInvites/ImagesStack";
import { useEffect } from "react";
import { Portada } from "@/PremiumInvites/Portada";
import Ceremonia from "@/PremiumInvites/Ceremonia";
import NiceSeparator from "@/components/ui/niceSeparator";
import { Regalos } from "@/PremiumInvites/Regalo";
import { ConfirmacionSection } from "@/PremiumInvites/Confirmacion";
import Navbar from '@/components/Navbar'


const setFavicon = () => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "./images/ring.svg";
    }
  };

const PremiumInvite = () => {

    useEffect(() => {
        document.title = "Juan & Agus";
        setFavicon();
      }, []);

    return (
        <main>
            <Navbar />
            <Portada novio="Agus" novia="Juan"/>
            <NiceSeparator />
            <Ceremonia />
            <NiceSeparator />
            <ConfirmacionSection fechaLimite="4 de Octubre" form=""/>
            <NiceSeparator />
            <ImageStack />
            <NiceSeparator />
            <Regalos />
        </main>
    )
}

export default PremiumInvite;