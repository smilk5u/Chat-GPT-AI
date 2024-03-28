import { useState } from 'react';
import { CallGPT } from './api/gpt';
import { message } from 'antd';
import DiaryDisplay from './components/DiaryDisplay';
import styled from 'styled-components';
import IntroDisplay from './components/IntroDisplay';

const dummyData = JSON.parse(
  `{"title":"GPT를 통한 서비스 개발의 영향","thumbnail":"https://source.unsplash.com/1600x900/?development","summary":"GPT를 통해 서비스를 만들어보는 것이 개발 실력에 도움이 될까?","emotional_content":"GPT를 통해 서비스를 만들어보는 것이 개발 실력에 도움이 될까? 이 질문에 대한 궁금증으로 가득 차 있습니다. 새로운 기술을 시도하면서의 긴장과 설레임이 느껴집니다.","emotional_result":"이 질문은 자아의 능력과 자신감에 대한 의심을 반영할 수 있습니다. 새로운 도전에 대한 두려움과 자신의 능력에 대한 불확실성이 존재한다고 볼 수 있습니다.","analysis":"새로운 기술이나 도전에 대한 두려움과 불안감은 성장의 시작이자 기회일 수 있습니다. '우리의 두려움이 가장 큰 장벽이다.' - 프랭클린 D. 루즈벨트","action_list":["새로운 기술에 도전할 때 자신을 믿어보세요.","자신의 능력을 강조하고 긍정적인 태도를 유지하세요.","두려움을 극복하기 위해 작은 단계부터 시작해보세요."]}`
);

function App() {
  const [data, setData] = useState(dummyData);
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [result, setResult] = useState(false);

  const handleClickAPICall = async (userInput) => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `${userInput}`
      });
      console.log('message : ', message)
      setData(JSON.parse(message))
      setResult(true);
    } catch (error) {
      console.error('에러가 발생했습니다.', error);
      messageApi.open({
        type: 'error',
        content: '너무 짧지 않게 말씀해주세요...'
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = (userInput) => {
    handleClickAPICall(userInput);
  }

  return (
    <AppConatiner>
      {contextHolder}
      {console.log(JSON.stringify(data))}
      {console.log(result)}
      <span>Chat GPT AI;</span>
      <AppTitle>
        고민, 걱정, 
        <span>되돌아보기</span>
        </AppTitle>
      {
        result
          ? <DiaryDisplay setResult={setResult} isLoading={isLoading} data={data} />
          : <IntroDisplay isLoading={isLoading} onSubmit={handleSubmit} />
      }
      {import.meta.env.VITE_SOME_KEY}
    </AppConatiner>
  )
}

export default App

const AppConatiner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  padding: 0 20px;
  width: 100%;
  margin: 100px auto 0;
  position: relative;
  > span {
    position: absolute;
    left: 0; top: 0;
    font-size: 15px;
    color: #0ea1ac;
    font-weight: 600;
  }
`;

const AppTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin: 0 0 50px;
  span { color: #0ea1ac; display:inline-block; margin: 0 0 0 10px; }
`;