import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../state/Store';
// import DropAdult from '../sub/DropMenu/DropAdult';
// import DropChild from '../sub/DropMenu/DropChild';
// import DropInf from '../sub/DropMenu/DropInf';
import DropBottom from '../sub/DropMenu/BottomDrop';
import DropComp from '../sub/DropMenu/DropComp';
import DropCompA from '../sub/DropMenu/DropCompA';

const Guests = () => {
    const {
        hasPoped,
        setPoped,
        adultC,
        setAdult,
        childrenC,
        setChildren,
        infantsC,
        setInfants,
        isDisabledA,
        setDisabledA,
        isDisabledC,
        setDisabledC,
        isDisabledI,
        setDisabledI,
        guests,
        setGuests
    } = useData();


    if (adultC > 1 && infantsC === 0) {
        setGuests(`${adultC + childrenC} guests`);
    } else if (adultC > 1 && infantsC > 1) {
        setGuests(`${adultC + childrenC} guests, ${infantsC} infants`);
    } else if (adultC > 1 && childrenC > 1 && infantsC === 1) {
        setGuests(`${adultC + childrenC} guests, ${infantsC} infant`);
    } else if (adultC === 1 && childrenC > 1 && infantsC === 0) {
        setGuests(`${adultC + childrenC} guests`);
    } else if (adultC === 1 && childrenC === 1 && infantsC === 1) {
        setGuests(`${adultC + childrenC} guests, ${infantsC} infant`);
    } else if (adultC === 1 && childrenC === 1 && infantsC > 1) {
        setGuests(`${adultC + childrenC} guests, ${infantsC} infants`);
    } else if (adultC === 1 && childrenC === 1 && infantsC === 0) {
        setGuests(`${adultC + childrenC} guests`);
    } else if (adultC === 1 && infantsC === 0) {
        setGuests(`${adultC + childrenC} guest`);
    } else if (adultC === 1 && childrenC > 1 && infantsC > 1) {
        setGuests(`${adultC + childrenC} guests, ${infantsC} infants`);
    } else if (adultC === 1 && childrenC > 1 && infantsC === 1) {
        setGuests(`${adultC + childrenC} guests, ${infantsC} infant`);
    } else if (adultC === 1 && childrenC === 0 && infantsC === 1) {
        setGuests(`${adultC + childrenC} guest, ${infantsC} infant`);
    } else if (adultC > 1 && childrenC === 0 && infantsC > 1) {
        setGuests(`${adultC + childrenC} guests, ${infantsC} infants`);
    } else if (adultC === 1 && childrenC === 0 && infantsC > 1) {
        setGuests(`${adultC + childrenC} guest, ${infantsC} infants`);
    } else {
        setGuests('Guests')
    }



    return (
        <Box>
            <Label>Guests</Label>
            <Select onClick={() => setPoped(!hasPoped)}>{guests}</Select>
            {hasPoped ? <Menu>
                <DropCompA
                    localCounter={adultC}
                    setLocalCounter={setAdult}
                    setLocalDisabled={setDisabledA}
                    childCounter={childrenC}
                    infantsCounter={infantsC}
                    isDisabled={isDisabledA} />
                <DropComp
                    localCounter={childrenC}
                    setLocalDisabled={setDisabledC}
                    setLocalC={setChildren}
                    globalCounter={adultC}
                    setGlobalC={setAdult}
                    localDisabled={isDisabledC}
                    title='Children'
                    subTitle='Ages 2-12' />
                <DropComp
                    localCounter={infantsC}
                    setLocalDisabled={setDisabledI}
                    setLocalC={setInfants}
                    globalCounter={adultC}
                    setGlobalC={setAdult}
                    localDisabled={isDisabledI}
                    title='Infants'
                    subTitle='Under 2' />
                <DropBottom />
            </Menu> : null}
        </Box>
    )
};

export default Guests;


const Box = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
`;

const Label = styled.label`
text-transform: uppercase;
`;

const Select = styled.button`
position: relative;
height: 50px;
border-radius: 5px;
border: none;
width: 100%;
box-sizing: border-box;
padding: 10px;
border: 0.5px solid black;
font-size: 16px;
margin-top: 5px;
background-color: #fff;
cursor:pointer;
display: flex;
`;

const Menu = styled.div`
position: absolute;
width: 20%;
background-color: #fff;
bottom: 23px;
border: 0.5px solid lightgray;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
`;