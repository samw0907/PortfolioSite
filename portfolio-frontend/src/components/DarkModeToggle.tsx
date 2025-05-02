import { useEffect, useState } from 'react'

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-2 py-1 border rounded text-sm"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
