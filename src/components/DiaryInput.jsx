import { Input, Button } from 'antd';
import { useState } from 'react';
const { TextArea } = Input


const DiaryInput = ({ isloading, onSubmit }) => {
  const [userInput, setUserInput] = useState();
  // 사용자의 입력을 받아, 상위컴포넌트로 데이터를 전달
  // 로딩상태에는 제출버튼을 누르지 못하도록 처리

  // 회고록 작성
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  }

  // 회고록 입력 후 제출
  const handleClick = () => {
    onSubmit(userInput);
  }

  return (
    <div>
      <TextArea
        value={userInput}
        onChange={handleUserInput}
        placeholder="오늘 일어난 일을 간단히 적어주세요."
      />
      <Button loading={isloading} onClick={handleClick}>GPT의 회고록을 작성해줘!</Button>
    </div>
  );
};

export default DiaryInput;