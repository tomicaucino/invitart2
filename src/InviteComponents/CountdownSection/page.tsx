import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TimeLeft {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

interface CountdownProps {
  onCountdownEnd: () => void
  date: string
}

export function CountdownSection({ onCountdownEnd, date }: CountdownProps) {
  const calculateTimeLeft = useCallback((): Partial<TimeLeft> => {
    // const TARGET_DATE = new Date(date)
    const TARGET_DATE = new Date();
    TARGET_DATE.setDate(TARGET_DATE.getDate() + 87);
    TARGET_DATE.setHours(12, 0, 0, 0);


    const difference = +TARGET_DATE - +new Date()

    if (difference <= 0) return {}

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    }
  }, [])

  const [timeLeft, setTimeLeft] = useState<Partial<TimeLeft>>(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)

      if (Object.keys(newTimeLeft).length === 0) {
        onCountdownEnd()
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft, onCountdownEnd])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2">
      <div className="relative w-16 h-12 flex items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-4xl font-light tracking-widest absolute"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-sm uppercase tracking-wide">{label}</span>
    </div>
  )

  return (
    <section className="w-screen bg-orange-100 flex justify-center py-12">
      <div className="text-center py-8 bg-gray-100 rounded-lg shadow-md w-full max-w-lg mx-4">
        <AnimatePresence mode="wait">
          {Object.keys(timeLeft).length ? (
            <div className="text-3xl font-light text-center tracking-wider">
              <h2 className="font-bold">28 de Septiembre de 2025</h2>
              <div className="flex justify-center mt-6">
                {Object.entries(timeLeft).map(([key, value]) => (
                  <TimeUnit key={key} value={value} label={key} />
                ))}
              </div>
            </div>
          ) : (
            <span className="text-3xl font-light tracking-wider">
              Listo... Hoy es el gran día!
            </span>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}