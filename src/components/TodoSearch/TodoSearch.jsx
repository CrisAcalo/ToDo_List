import './TodoSearch.css';
import React from 'react';
import { TodoContext } from '../../TodoContext';

const TodoSearch = () => {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    return (
        <input className="searchInput" placeholder="Search"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }} />
    );
};

export { TodoSearch };