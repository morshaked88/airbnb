import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../../state/Store';

const DropChild = () => {
    const {
        childrenC,
        setChildren,
        isDisabledC,
        setDisabledC,
        adultC,
        setAdult
    } = useData();


    childrenC === 0 ? setDisabledC(true) : setDisabledC(false);

    const checkUp = () => {
        setChildren(childrenC + 1);
        if (adultC === 0) {
            setAdult(adultC + 1);
        }
    }

    const checkDown = () => {
        setChildren(childrenC - 1);
        if (childrenC === 0 && adultC <= 1) {
            setAdult(0)
        }
    }

    return (
        <Box>
            <TitleBox>
                <Title>Children</Title>
                <SubTitle>Ages 2-12</SubTitle>
            </TitleBox>
            <BtnBox>
                <Btn onClick={() => checkDown()} disabled={isDisabledC}>-</Btn>
                <Title2>{childrenC}+</Title2>
                <Btn onClick={() => checkUp()}>+</Btn>
            </BtnBox>
        </Box>
    )
};

export default DropChild;

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
