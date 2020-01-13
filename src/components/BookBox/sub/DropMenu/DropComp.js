import React from 'react';
import styled from 'styled-components';

const DropComp = ({ localCounter, setLocalDisabled, setLocalC, globalCounter, setGlobalC, localDisabled, title, subTitle }) => {


    localCounter === 0 ? setLocalDisabled(true) : setLocalDisabled(false);

    const checkUp = (setCounter, counter, globalCounter, setGlobalCounter) => {
        setCounter(counter + 1);
        if (globalCounter === 0) {
            setGlobalCounter(globalCounter + 1);
        }
    }

    const checkDown = (setCounter, counter, globalCounter, setGlobalCounter) => {
        setCounter(counter - 1);
        if (counter === 0 && globalCounter <= 1) {
            setGlobalC(0)
        }
    }

    return (
        <Box>
            <TitleBox>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </TitleBox>
            <BtnBox>
                <Btn onClick={() => checkDown(setLocalC, localCounter, globalCounter, setGlobalC, globalCounter)} disabled={localDisabled}>-</Btn>
                <Title2>{localCounter}+</Title2>
                <Btn onClick={() => checkUp(setLocalC, localCounter, globalCounter, setGlobalC, globalCounter)}>+</Btn>
            </BtnBox>
        </Box>
    )
};

export default DropComp;


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