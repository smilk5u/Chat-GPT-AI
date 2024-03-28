import { Input, Button, message } from 'antd';
import { useState } from 'react';
const { TextArea } = Input
import styled from 'styled-components';

const DiaryInput = ({ isLoading, onSubmit }) => {
  const [userInput, setUserInput] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  // 사용자의 입력을 받아, 상위컴포넌트로 데이터를 전달
  // 로딩상태에는 제출버튼을 누르지 못하도록 처리

  // 회고록 작성
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  }

  // 회고록 입력 후 제출
  const handleClick = () => {
    if (!userInput) {
      messageApi.open({
        type: 'error',
        content: '일과를 적어주세요'
      });
      return;
    }
    messageApi.open({
      type: "success",
      content: "생성 요청 완료",
    });

    onSubmit(userInput);
    setUserInput(null);
  }

  return (
    <div>
      {contextHolder}
      <Title>힘든 일이나 고민거리가 있나요? 저에게 말씀해주세요.</Title>
      <TextAreaWrap
        value={userInput}
        onChange={handleUserInput}
        placeholder="너무 짧지 않게 이야기를 들려주세요."
        style={{ height: '200px' }}
      />
      <ButtonContainer>
        <ButtonWrap loading={isLoading} onClick={handleClick}>결과 확인하기</ButtonWrap>
      </ButtonContainer>
    </div>
  );
};

export default DiaryInput;

const Title = styled.div`
  font-size: 18px;
  margin: 30px 0 10px;
  font-weight: 500;
`;

const TextAreaWrap = styled(TextArea)`
  font-size: 17px;
  font-family: "Noto Serif KR";
  padding: 15px;  
  color:#222;
  &::placeholder {
    font-family: "Noto Serif KR";
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin: 20px 0 0;
`;

const ButtonWrap = styled(Button)`
  width: fit-content;
  padding: 20px 40px;
  background-color: #0ea1ac;
  color: #fff;
  border-radius: 13px;
  display: block;
  margin: 0 auto;
  height: auto;
  font-size: 17px;
  line-height: 15px;
  font-family: "Noto Serif KR";
  &:hover {
    span {
      color: #000;
    }
  }
`;
