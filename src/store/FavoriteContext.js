import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext(null)

function FavoriteCon({ children }) {
    const [favorite, setFavorite] = useState([])
    

    return (
        <FavoriteContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoriteContext.Provider>
    )
}



export default FavoriteCon
