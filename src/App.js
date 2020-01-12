import React from 'react';
import styled from 'styled-components';

import BookBox from './components/BookBox/BookBox';
import { DataProvider } from './state/Store';


function App() {
  return (
    <Container>
      <DataProvider>
        <BookBox />
      </DataProvider>
    </Container>
  );
}

export default App;


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
`;
