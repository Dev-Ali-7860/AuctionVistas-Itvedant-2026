import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("auction-vistas-theme") === "dark" ? "dark" : "light"
    })

    const dispatch = (action) => {
        if (action.type === "TOGGLE") {
            setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")
        }
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        document.body.className = theme
        localStorage.setItem("auction-vistas-theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}