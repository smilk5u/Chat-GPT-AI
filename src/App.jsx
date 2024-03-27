import './App.css'
import { useState } from 'react';
import { CallGPT } from './api/gpt';
import DiaryInput from './components/DiaryInput';
import styled from "styled-components";

const dummyData = JSON.parse(
  `{ "title": "코딩 공부의 고난과 승리", "thumbnail": "https://source.unsplash.com/1600x900/?coding", "summary": "코딩 강의를 듣고 프로젝트 버그를 스택오버플로에서 해결하려 했지만 실패. GPT를 통해 해결했지만 개발실력에 도움이 될까?", "emotional_content": "오늘은 코딩 강의를 듣고 프로젝트에서 버그가 많이 나와 당황스러웠다. 스택오버플로에서 검색해 보았지만 해결되지 않아 좌절감을 느꼈다. 그러나 마침내 GPT를 활용하여 문제를 해결했지만, 이 경험이 개발 과정에서 얼마나 도움이 될지 의문이 들었다. 더 많은 학습과 도전이 필요한 하루였다.", "emotional_result": "이야기를 통해 고민과 실패에 직면했지만 결국 문제를 해결하는 데 성공했다. 이는 자신의 능력에 대한 확신을 갖게 해주었지만, 동시에 더 많은 학습과 성장이 필요하다는 불안을 느끼게 했다.", "analysis": "이 상황은 '성장'에 대한 과정을 잘 나타내는 사례로, 앨런 로버츠의 명언 '나 자신을 알라'가 적절하다. 개발자로서의 능력 향상을 위해 자기 발전에 대한 중요성을 깨닫는 계기로 삼아야 한다.", "action_list": [ "더 많은 코딩 실습을 통해 기술을 향상시키기", "도전적인 프로젝트에 도전하여 성장 기회를 얻기", "다양한 개발자들과의 소통을 통해 지식을 공유하고 확장하기" ] }`
);

function App() {
  const [data, setData] = useState(dummyData);
  const [isloading, setIsLoading] = useState(false);

  const handleClickAPICall = async (userInput) => {
    try {
      setIsLoading(true);
      console.log(userInput)
      const message = await CallGPT({
        prompt: `${userInput}`
      });
      console.log(message.choices[0].message.content)
      // setData(message)
      // console.log(JSON.parse(message))
    } catch (error) {
      console.error('에러가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = (userInput) => {
    // console.log(data)
    handleClickAPICall(userInput);
  }

  return (
    <AppConatiner>
      {
        console.log(data.title)
      }
      <DiaryInput isloading={isloading} onSubmit={handleSubmit} />
      <AppTitle>심리상담사</AppTitle>
      {import.meta.env.VITE_SOME_KEY}
      {/* <button onClick={handleClickAPICall}>GPT API call</button> */}
      <div>title : {data.title}</div>
      <div>analysis : {data.analysis}</div>
      <div>emotional_content : {data.emotional_content}</div>
      <div>emotional_result : {data.emotional_result}</div>
      <div>summary : {data.summary}</div>
      <div>thumbnail : {data.thumbnail}</div>
      <div>isloading : {isloading ? '로딩중...' : '완료!!'}</div>
    </AppConatiner>
  )
}

export default App

const AppConatiner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`;

const AppTitle = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 35px;
  text-align: center;
`;