import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 }
  const ringX = useSpring(cursorX, springConfig)
  const ringY = useSpring(cursorY, springConfig)

  const [hovering, setHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Detect touch device
    const hasTouch = window.matchMedia('(pointer: coarse)').matches
    setIsTouchDevice(hasTouch)

    if (hasTouch) return

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4)
      cursorY.set(e.clientY - 4)
    }

    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)

    window.addEventListener('mousemove', move)

    // Attach hover detection to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [cursorX, cursorY])

  if (isTouchDevice) return null

  return (
    <>
      {/* Sharp dot — follows cursor exactly */}
      <motion.div className="cursor-dot" style={{ x: cursorX, y: cursorY }} />
      {/* Ring — spring-lagged for trail effect */}
      <motion.div
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          left: 16,
          top: 16,
        }}
      />
    </>
  )
}

export default CustomCursor
