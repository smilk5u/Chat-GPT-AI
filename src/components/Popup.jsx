import React from 'react';
import styled from 'styled-components';

const Popup = ({ text }) => {
  return (
    <PopupWrap>
      <Text>{text}</Text>
      <Button>확인</Button>
    </PopupWrap>
  );
};

export default Popup;

const PopupWrap = styled.div`
  
`;

const Text = styled.p`
`

const Button = styled.button`

`