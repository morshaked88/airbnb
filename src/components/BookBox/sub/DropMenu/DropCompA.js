import React from 'react';
import styled from 'styled-components';

const DropCompA = ({ localCounter, setLocalCounter, setLocalDisabled, childCounter, infantsCounter, isDisabled }) => {


    if (localCounter === 0) {
        setLocalDisabled(true)
    } else if (childCounter >= 1) {
        setLocalDisabled(true)
    } else if (infantsCounter >= 1) {
        setLocalDisabled(true)
    } else if (childCounter >= 1 && infantsCounter >= 1) {
        setLocalDisabled(true)
    } else {
        setLocalDisabled(false)
    }

    const checkUp = (counter, setCounter) => {
        setCounter(counter + 1);
    }

    const checkDown = (counter, setCounter) => {
        setCounter(counter - 1);
    }

    return (
        <Box>
            <TitleBox>
                <Title>Adult</Title>
                <SubTitle>{<br></br>}</SubTitle>
            </TitleBox>
            <BtnBox>
                <Btn onClick={() => checkDown(localCounter, setLocalCounter)} disabled={isDisabled}>-</Btn>
                <Title2>{localCounter}+</Title2>
                <Btn onClick={() => checkUp(localCounter, setLocalCounter)}>+</Btn>
            </BtnBox>
        </Box>
    )

};

export default DropCompA;

const Box = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
box-sizing: border-box;
padding: 20px 10px;
`;

const Btn = styled.button`
height: 60%;
width: 23%;
border-radius: 50%;
cursor: pointer;
background-color: transparent;
border: 1px solid dodgerblue;
color: dodgerblue;

&:disabled {
cursor: pointer;
background-color: transparent;
border: 1px solid #dfe6e9;
color: #dfe6e9;  
}
`;

const TitleBox = styled.div`

`;

const BtnBox = styled.div`
display: flex;
width: 30%;
justify-content: space-around;
align-items: center;
`;

const Title = styled.h3`


`;

const Title2 = styled.h3`


`;

const SubTitle = styled.p`


`;
