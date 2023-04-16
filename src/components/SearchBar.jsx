                
import { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext';

function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext);

    let onSearchSubmit = e => {
        e.preventDefault();
        handleSearch(term.current.value);

    }

    return (
            <form>
                <input ref={term} type="text" placeholder="Search Here" />
                <button onClick={(e) => onSearchSubmit(e)}>Submit</button>
            </form>
    )
}

export default SearchBar;

    