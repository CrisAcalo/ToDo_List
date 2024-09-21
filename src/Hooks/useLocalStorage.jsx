import React from 'react';

function useLocalStorage(itemName, initialValue) {
    let localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }
    const [item, setItem] = React.useState(parsedItem);
    const updateStorageItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }
    return [item, updateStorageItem];
}

export { useLocalStorage };