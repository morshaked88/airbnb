import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../../state/Store';

const DropInf = () => {
    const {
        infantsC,
        setInfants,
        isDisabledI,
        setDisabledI,
        adultC,
        setAdult
    } = useData();


    infantsC === 0 ? setDisabledI(true) : setDisabledI(false);

    const checkUp = () => {
        setInfants(infantsC + 1);
        if (adultC === 0) {
            setAdult(adultC + 1);
        }

    }

    const checkDown = () => {
        setInfants(infantsC - 1);
        if (infantsC === 0 && adultC <= 1) {
            setAdult(0)
        }
    }

    return (
        <Box>
            <TitleBox>
                <Title>Infants</Title>
                <SubTitle>Under 2</SubTitle>
            </TitleBox>
            <BtnBox>
                <Btn onClick={() => checkDown()} disabled={isDisabledI}>-</Btn>
                <Title2>{infantsC}+</Title2>
                <Btn onClick={() => checkUp()}>+</Btn>
            </BtnBox>
        </Box>
    )
};

export default DropInf;

const Box = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
box-sizing: border-box;
padding: 20px 10px 0px 10px;
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
