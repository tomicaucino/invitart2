import { useRef, useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { Play, Pause } from "lucide-react";

interface AudioProps {
  Song: string
}


const BackgroundMusic = ({Song}: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set volume (optional)
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.warn("Autoplay blocked:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-20">
      <audio ref={audioRef} loop>
        <source src={Song} type="audio/mp3" />
      </audio>
      <motion.button
        onClick={toggleMusic}
        className="bg-stone-400 text-white rounded-full flex items-center justify-center shadow-lg border-none"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={isPlaying ? {} : { y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "easeInOut",
        }}
        >
          🎵
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </motion.button>
      
    </div>
  );
};

export default BackgroundMusic;
