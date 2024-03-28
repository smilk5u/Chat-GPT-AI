import {
  DiaryContainer,
  ResultTitle,
  CardContainer,
  CardImg,
  CardTitle,
  CardContent,
  ActionList,
  ActionListItem,
  Button,
} from "./CommonStyles";

import {
  LoadingOutlined,
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
  MessageTwoTone,
  SoundTwoTone,
} from "@ant-design/icons";
import { Image } from "antd";
import styled from "styled-components";

const ThumbnailImage = styled(Image)`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const DiaryDisplay = ({ setResult, data, isLoading }) => {
  return (
    <DiaryContainer $data={data}>
      <ResultTitle>{data.title}</ResultTitle>
      <CardImg>
        <ThumbnailImage src={data.thumbnail} alt="Thumbnail" />
        <p className="summary">
          <span>난 지금...</span>
          {data.summary}
        </p>
      </CardImg>
      <CardContainer>
        <span>1장</span>
        <CardTitle className="sub_title">감성일기장</CardTitle>
        <CardContent>{data.emotional_content}</CardContent>
      </CardContainer>
      <CardContainer>
        <span>2장</span>
        <CardTitle className="sub_title">내가 느낀 감정</CardTitle>
        <CardContent>{data.emotional_result}</CardContent>
      </CardContainer>
      <CardContainer>
        <span>3장</span>
        <CardTitle className="sub_title">심리 분석</CardTitle>
        <CardContent>{data.analysis}</CardContent>
      </CardContainer>
      <CardContainer>
        <span>4장</span>
        <CardTitle className="sub_title">GPT 조언</CardTitle>
        <ActionList>
          {data.action_list.map((action, index) => (
            <ActionListItem key={index}>
              <em>{index + 1}</em>
              {action}
            </ActionListItem>
          ))}
        </ActionList>
      </CardContainer>
      <Button onClick={() => setResult(false)}>다시하기</Button>
    </DiaryContainer>
  );
};

export default DiaryDisplay;