'use client'

import { useState, useEffect } from 'react'

interface UseCountUpOptions {
  end: number
  duration?: number
  start?: number
  suffix?: string
  prefix?: string
}

export function useCountUp({ 
  end, 
  duration = 2000, 
  start = 0, 
  suffix = '', 
  prefix = '' 
}: UseCountUpOptions) {
  const [count, setCount] = useState(start)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!isActive) return

    const increment = end / (duration / 16) // 60fps
    let current = start
    
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isActive, end, duration, start])

  const startAnimation = () => setIsActive(true)
  
  const formatNumber = (num: number) => {
    return `${prefix}${num.toLocaleString()}${suffix}`
  }

  return {
    count: formatNumber(count),
    startAnimation,
    isActive
  }
}