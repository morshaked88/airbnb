import React from 'react';
import styled from 'styled-components';

const searchBtn = () => (
    <Box>
        <Btn>Search</Btn>
    </Box>
);

export default searchBtn;

const Box = styled.div`
display: flex;
margin-top: 20px;
justify-content: flex-end;
align-items: flex-start;
height: 100px;
`;

const Btn = styled.button`
height: 73%;
width: 28%;
border-radius: 7px;
background-color: #eb4d4b;
border: none;
color: #fff;
font-weight: bold;
font-size: 18px;
cursor: pointer;
`;