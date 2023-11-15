import { useState, useEffect } from 'react'
import {RiSearchLine, RiLoaderFill} from 'react-icons/ri'

function MainSearchComponent () {
    const [showResults, setShowResults] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searching, setSearching] = useState(false);
    
    const handleSearchSubmit = (event) => {
        event.preventDefault();
    }

    const search = (searchText) => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    };

    const handleChange = (event) => {
        const search_text = event.target.value;
        setSearchText(search_text);
    }

    const handleKeyDown = (event) => {
        const pressed_key = event.code;
        if (pressed_key === 'ArrowDown') {
            console.log('pa bajo');
        }
        if (pressed_key === 'ArrowUp') {
            console.log('pa arriba');
        }
        if (pressed_key === 'Enter') {
            console.log('pa entro');
        }
        
    }
    
    useEffect(() => {        
        if (searchText.length === 0) setSearching(false);
        
        if (searchText.length !== 0) setSearching(true);

        if (searchText.length > 3) {
            const results = search(searchText);
            setSearchResults(results);
            setSearching(false);
        }
    }, [searchText]);

    useEffect(() => {
        setShowResults(false);
        if (!searching && searchResults.length > 0) {
            setShowResults(true);
        }
    }, [searchResults])

    return (
        <div className="w-full lg:w-[80%] order-1 lg:order-first">
            <div className="relative w-full">
                {searching && <RiLoaderFill className="loading-icon absolute left-2 top-3 text-gray-500" />}
                {!searching && <RiSearchLine className="absolute left-2 top-3 text-gray-500" />}
                <input type="text" 
                    className="bg-white outline-none py-2 pl-8 pr-4 w-full rounded-lg" 
                    placeholder="Buscar Insumo..." 
                    value={searchText}
                    onChange={handleChange} 
                    onFocus={() => setShowResults(true)}
                    onBlur={() => setShowResults(false)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {
                showResults && 
                (
                    <ul>
                        <li>A</li>
                        <li>{searchResults.length} resultados (ver todos)</li>
                    </ul>
                )
            }
        </div>
    );
}

export default MainSearchComponent;