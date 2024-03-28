import React from "react";
import styled from "styled-components";

export const ResultTitle = styled.strong`
  font-size: 32px;
  margin: 10px;
  font-weight: 600;
`;
export const Divider = styled.div`
  margin-top: 20px;
`;
export const DiaryContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  > div {
  }
`;
export const CardContainer = styled.div`  
  position: relative;
  margin: 50px 0;
  > span {
    width: 70px;
    height: 70px;
    display: block;
    position: absolute;
    color: #fff;
    font-weight:600;
    top: -30px;
    font-size: 13px;
    line-height: 32px;
    border-radius: 100%;
    /* font-family: sans-serif; */
    background-color: #0ea1ac;
    margin: auto;
    left: 0; right: 0;
    z-index: -1;
  }
`;

export const CardImg = styled.div`
  margin: 13px 0 60px;
  .summary {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const CardTitle = styled.strong`
  display: block;
  padding: 8px 0;
  font-size: 22px;
  font-weight: 600;
  color: #0ea1ac;
  background-color: #fff;
  border-block: 1px solid #9b9b9b;
`;
export const CardContent = styled.div`
  font-size: 15px;
  padding: 15px 0 0;
  line-height: 26px;
  text-align: left;
`;
export const ActionList = styled.ul`
  font-size: 15px;
  list-style: none;
  text-align: left;
  line-height: 26px;
  padding: 15px 0 0;
  margin: 0;
`;
export const ActionListItem = styled.li`
  em { color: #0ea1ac; margin: 0 10px 0 0; }
`;

export const Button = styled.button`
  width: fit-content;
  padding: 20px 70px;
  background-color: #0ea1ac;
  color: #fff;
  border-radius: 13px;
  display: block;
  margin: 50px auto 100px;
  height: auto;
  font-size: 17px;
  line-height: 15px;
  outline: none;
  border:0;
  cursor: pointer;
  font-family: "Noto Serif KR";
  &:hover {
    background-color: #088e97;
  }
  em { color: #0ea1ac; margin: 0 10px 0 0; }
`;