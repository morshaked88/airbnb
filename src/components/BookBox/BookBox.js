import React from 'react';
import styled from 'styled-components';

import Where from '../BookBox/sub/Where';
import CheckIn from '../BookBox/sub/CheckIn';
import Guests from '../BookBox/sub/Guests';


const BookBox = () => {

    return (
        <Box>
            <Title>Book unique places to stay and things to do.</Title>
            <Where />
            <CheckIn />
            <Guests />
        </Box>
    )
};

export default BookBox;

const Box = styled.div`
height: 50%;
width: 22%;
background-color: #fff;
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 30px 20px;
border-radius: 6px;
`;

const Title = styled.h1`

`;