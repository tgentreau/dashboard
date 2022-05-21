import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initializeState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initializeState)
    const handleClick = (clicked) => {
        setIsClicked({...initializeState, [clicked]: true})
    }
    const [screenSize, setScreenSize] = useState()
    return(
        <StateContext.Provider
        value={{ 
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize
        }}
        >
            {children}
        </StateContext.Provider> 
    ) 
}

export const useStateContext = () => useContext(StateContext)