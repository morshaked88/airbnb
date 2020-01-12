import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../../state/Store';

const BottomDrop = () => {
    const {
        setChildren,
        adultC,
        setAdult,
        hasPoped,
        setPoped,
        setInfants,
    } = useData();

    const clearInput = () => {
        setAdult(0);
        setChildren(0);
        setInfants(0);
    }


    return (
        <Box>
            {adultC >= 1 ? <Btn onClick={() => clearInput()}>clear</Btn> : <p></p>}
            <Btn onClick={() => setPoped(!hasPoped)}>save</Btn>
        </Box>
    )
};

export default BottomDrop

const Box = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
box-sizing: border-box;
padding: 20px 10px;
height: 10px;
`;

const Btn = styled.button`
border: none;
height: 100%;
background-color: transparent;
cursor: pointer;
`;

