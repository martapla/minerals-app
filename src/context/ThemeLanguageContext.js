import {createContext, useState} from 'react'

const userContext = createContext()

const ThemeLanguageContext = () => {

    const[user, setUser] = useState(null)



  return (
    <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>
  )
}

export default ThemeLanguageContext