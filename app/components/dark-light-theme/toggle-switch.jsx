"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-8 w-14 rounded-full bg-gray-20 bg-gray-700 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label="Toggle theme"
    >
      {/* Sliding circle */}
      <div
        className={`absolute top-1 h-6 w-6 rounded-full bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 ${
          theme === "dark" ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {/* Icon inside circle */}
        <div className="flex h-full w-full items-center justify-center">
          <Sun className="absolute h-3.5 w-3.5 text-amber-500 scale-100 opacity-100 dark:scale-0 dark:opacity-0 transition-all duration-300" />
          <Moon className="absolute h-3.5 w-3.5 text-violet-500 scale-0 opacity-0 dark:scale-100 dark:opacity-100 transition-all duration-300" />
        </div>
      </div>
    </button>
  )
}