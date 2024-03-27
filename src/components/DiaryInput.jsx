import { Input, Button, message } from 'antd';
import { useState } from 'react';
import { Title } from './CommonStyles';
const { TextArea } = Input
import styled from "styled-components";


const DiaryInput = ({ isloading, onSubmit }) => {
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
      <Title>오늘의 일;</Title>
      <TextArea
        value={userInput}
        onChange={handleUserInput}
        placeholder="오늘 일어난 일을 간단히 적어주세요."
        style={{ height: '200px' }}
      />
      <ButtonContainer>
        <Button loading={isloading} onClick={handleClick}>GPT의 회고록을 작성해줘!</Button>
      </ButtonContainer>
    </div>
  );
};

export default DiaryInput;

const ButtonContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  gap: 5px;
`;