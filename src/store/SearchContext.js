import { createContext, useState } from 'react'

export const SearchContext = createContext(null)

function Search({ children }) {

    const [searchTerm, setSearchTerm] = useState("")
    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    )
}

export default Search