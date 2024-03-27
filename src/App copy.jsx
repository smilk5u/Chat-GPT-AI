import './App.css'
import { useState } from 'react';
import { CallGPT } from './api/gpt';
import DiaryInput from './components/DiaryInput';

const dummyData = JSON.parse(
  `{ "title": "코딩 공부의 고난과 승리", "thumbnail": "https://source.unsplash.com/1600x900/?coding", "summary": "코딩 강의를 듣고 프로젝트 버그를 스택오버플로에서 해결하려 했지만 실패. GPT를 통해 해결했지만 개발실력에 도움이 될까?", "emotional_content": "오늘은 코딩 강의를 듣고 프로젝트에서 버그가 많이 나와 당황스러웠다. 스택오버플로에서 검색해 보았지만 해결되지 않아 좌절감을 느꼈다. 그러나 마침내 GPT를 활용하여 문제를 해결했지만, 이 경험이 개발 과정에서 얼마나 도움이 될지 의문이 들었다. 더 많은 학습과 도전이 필요한 하루였다.", "emotional_result": "이야기를 통해 고민과 실패에 직면했지만 결국 문제를 해결하는 데 성공했다. 이는 자신의 능력에 대한 확신을 갖게 해주었지만, 동시에 더 많은 학습과 성장이 필요하다는 불안을 느끼게 했다.", "analysis": "이 상황은 '성장'에 대한 과정을 잘 나타내는 사례로, 앨런 로버츠의 명언 '나 자신을 알라'가 적절하다. 개발자로서의 능력 향상을 위해 자기 발전에 대한 중요성을 깨닫는 계기로 삼아야 한다.", "action_list": [ "더 많은 코딩 실습을 통해 기술을 향상시키기", "도전적인 프로젝트에 도전하여 성장 기회를 얻기", "다양한 개발자들과의 소통을 통해 지식을 공유하고 확장하기" ] }`
);


function App() {
  const [data, setData] = useState(dummyData);
  const [isloading, setIsLoading] = useState(false);

  const handleClickAPICall = async () => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `코딩 강의를 들었다. 프로젝트에 버그가 많이 나왔음. 스택오버플로에서 검색했지만 해결 안되었어.
      역시 gpt를 통해서 해결했다. 근데 이렇게 해결하는게 개발실력에 도움 될까..?`
      });
      setData(message);
    } catch (error) {
      console.error('에러가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <DiaryInput isloading={isloading} onSubmit={handleSubmit} />
      {import.meta.env.VITE_SOME_KEY}
      <button onClick={handleClickAPICall}>GPT API call</button >
      <div>title : {JSON.stringify(data.title)}</div>
      <div>analysis : {JSON.stringify(data.analysis)}</div>
      <div>emotional_content : {JSON.stringify(data.emotional_content)}</div>
      <div>emotional_result : {JSON.stringify(data.emotional_result)}</div>
      <div>summary : {JSON.stringify(data.summary)}</div>
      <div>thumbnail : {JSON.stringify(data.thumbnail)}</div>
      <div>isloading : {isloading ? '로딩중...' : '완료!!'}</div>
    </>
  )
}

export default App
