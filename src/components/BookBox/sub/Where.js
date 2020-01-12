import React from 'react';
import styled from 'styled-components';

const where = () => (
    <Box>
        <Label>Where</Label>
        <Input type='text' placeholder='Anywhere' />
    </Box>
)

export default where;

const Box = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
`;

const Label = styled.label`
text-transform: uppercase;
`;

const Input = styled.input`
height: 50px;
border-radius: 5px;
border: none;
width: 100%;
box-sizing: border-box;
padding: 10px;
border: 0.5px solid black;
font-size: 16px;
margin-top: 5px;
cursor: text;
`;