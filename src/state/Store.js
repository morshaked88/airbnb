import React, { useContext, useState, createContext } from 'react';

const DataStore = createContext();
const { Provider } = DataStore;

const useData = () => {
    const context = useContext(DataStore);


    if (!context) {
        throw new Error(`useData must be within a DataProvider`)
    }

    return context;
}

const DataProvider = ({ children }) => {
    const [hasPoped, setPoped] = useState(false);
    const [adultC, setAdult] = useState(0);
    const [childrenC, setChildren] = useState(0);
    const [infantsC, setInfants] = useState(0);
    const [isDisabledA, setDisabledA] = useState(true);
    const [isDisabledC, setDisabledC] = useState(true);
    const [isDisabledI, setDisabledI] = useState(true);
    const [guests, setGuests] = useState('');

    const state = {
        hasPoped,
        adultC,
        childrenC,
        infantsC,
        isDisabledA,
        isDisabledC,
        isDisabledI,
        guests
    };

    const callbacks = {
        setPoped,
        setAdult,
        setChildren,
        setInfants,
        setDisabledA,
        setDisabledC,
        setDisabledI,
        setGuests

    }

    return (
        <Provider value={{ ...state, ...callbacks }}>{children}</Provider>
    )
};

export { DataProvider, useData };