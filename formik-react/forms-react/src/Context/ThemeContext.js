import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    // const [theme, setTheme] = useState("light"); //theme ye varsayılan olarak dark/light verdik
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); //LocaleStorage işlemleri. (|| 'light') ile default light atadık
    useEffect(() => {
        localStorage.setItem('theme', theme);
        console.log(theme);
    },[theme])

    const values = {
        theme,
        setTheme,
    };

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
};

export const useTheme = () => useContext(ThemeContext); //kendi hooke umuzu yazdık 
