import { useEffect, useState } from 'react'

export function useRotatingWord(words: string[], intervalMs = 2400) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setVisible(true)
      }, 250)
      return () => clearTimeout(timeout)
    }, intervalMs)
    return () => clearInterval(id)
  }, [words, intervalMs])

  return { word: words[index], visible }
}
