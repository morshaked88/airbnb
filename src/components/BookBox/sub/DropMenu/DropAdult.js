import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../../state/Store';

const DropAdult = () => {
    const {
        adultC,
        setAdult,
        isDisabledA,
        setDisabledA,
        infantsC,
        childrenC
    } = useData();

    if (adultC === 0) {
        setDisabledA(true)
    } else if (childrenC >= 1) {
        setDisabledA(true)
    } else if (infantsC >= 1) {
        setDisabledA(true)
    } else if (childrenC >= 1 && infantsC >= 1) {
        setDisabledA(true)
    } else {
        setDisabledA(false)
    }

    const checkUp = () => {
        setAdult(adultC + 1);
    }

    const checkDown = () => {
        setAdult(adultC - 1);
    }

    return (
        <Box>
            <TitleBox>
                <Title>Adult</Title>
                <SubTitle>{<br></br>}</SubTitle>
            </TitleBox>
            <BtnBox>
                <Btn onClick={() => checkDown()} disabled={isDisabledA}>-</Btn>
                <Title2>{adultC}+</Title2>
                <Btn onClick={() => checkUp()}>+</Btn>
            </BtnBox>
        </Box>
    )

};

export default DropAdult;

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
