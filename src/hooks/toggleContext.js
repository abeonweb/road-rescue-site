import {createContext, useState} from "react"

const ToggleContext = createContext()

function ToggleContextProvider({children}){
    const [openMenu, setOpenMenu] = useState(false)

    function handleClick(){
        setOpenMenu(prev => !prev)
    }

    return (
        <ToggleContext.Provider value={{openMenu, handleClick}}>
            {children}
        </ToggleContext.Provider>
    )
}

export {ToggleContextProvider, ToggleContext}