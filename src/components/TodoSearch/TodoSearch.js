import './TodoSearch.css';
import React from 'react';

const TodoSearch = ({
    searchValue,
    setSearchValue
}) => {

    return (
        <input className="searchInput" placeholder="Actididad N"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }} />
    );
};

export { TodoSearch };