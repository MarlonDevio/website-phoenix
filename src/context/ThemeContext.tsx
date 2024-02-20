import {createContext, useState} from 'react';

const ThemeContext = createContext({
    theme:"",
    setTheme: (theme:string) => {},
})

export const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
