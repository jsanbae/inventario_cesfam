import { useState, useEffect } from 'react'
import {RiSearchLine} from 'react-icons/ri'

function MainSearchComponent () {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searching, setSearching] = useState(false);
    
    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };
    
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setSearching(true); 
    }

    const search = (searchText) => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    };
    
    useEffect(() => {
        if (searchText.length > 0) {
            const results = search(searchText);
            setSearchResults(results);
            setSearching(false);
        }
    }, [searchText]);

    return (
        <form className="w-full lg:w-[80%] order-1 lg:order-first" onSubmit={handleSearchSubmit}>
            <div className="relative w-full">
                <RiSearchLine className="absolute left-2 top-3 text-gray-500" />
                <input type="text" className="bg-white outline-none py-2 pl-8 pr-4 w-full rounded-lg" placeholder="Buscar Insumo..." value={searchText} onChange={handleSearch} />
            </div>
            {searching && <p>Searching...</p>}
            {searchResults.length > 0 && <p>Found {searchResults.length} results</p>}
        </form>
    );
}

export default MainSearchComponent;