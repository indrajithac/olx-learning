import {createContext,useState} from 'react'

export const FavoriteContext=createContext(null)

function Favorite({children}) {
    
    const [favorites,setFavorites]=useState([])
    
   

    return (
        <FavoriteContext.Provider value={{favorites,setFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default Favorite