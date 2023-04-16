import React, { useState, useContext, useEffect } from 'react';

import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children}) => {
   const [loading, setLoading] = useState(true);
   const  [cocktails, setCocktails] = useState([]) 
   const [searchTerm, setSearchTerm] = useState('a')


    return(
        <AppContext.Provider value={{
            loading, 
            searchTerm,
            cocktails,
            setSearchTerm,
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}