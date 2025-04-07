import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');
    const debouncedSearch = useDebounce((value) => onSearch(value), 500);

    const handleChange = (e) => {
        setInput(e.target.value);
        debouncedSearch(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search products..."
            value={input}
            onChange={handleChange}
            className="w-full p-2 border rounded"
        />
    );
};

export default SearchBar;
