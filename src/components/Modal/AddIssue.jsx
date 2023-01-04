import React from 'react';
import styled from 'styled-components';
import AddIssueInput from '../Input/AddIssueInput';

const AddIssueModal = ({ handleModalToggle, handleSubmit }) => {
  return (
    <Wrapper>
      <Title>
        <h2>이슈 추가</h2>
        <CloseBtn onClick={handleModalToggle}>X</CloseBtn>
      </Title>
      <InputBox>
        <InputContainer>
          <InputLabel>제목</InputLabel>
          <Input>
            <AddIssueInput type="text" />
          </Input>
        </InputContainer>
        <InputContainer>
          <InputLabel>내용</InputLabel>
          <Description />
        </InputContainer>
        <InputContainer>
          <InputLabel>마감일</InputLabel>
          <Input>
            <AddIssueInput type="datetime-local" />
          </Input>
        </InputContainer>
        <InputContainer>
          <InputLabel>상태</InputLabel>
          <Input>
            <StatusSelect>
              <option value="">할 일</option>
              <option value="">진행중</option>
              <option value="">완료</option>
            </StatusSelect>
          </Input>
        </InputContainer>
        <InputContainer>
          <InputLabel type="text">담당자</InputLabel>
          <Input>
            <AddIssueInput />
          </Input>
        </InputContainer>
      </InputBox>
      <SaveBtn onClick={handleSubmit}>저장</SaveBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  padding: 30px;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #111;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputBox = styled.div`
  width: 100%;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  width: 30%;
  font-size: 18px;
  font-weight: 400;
  color: #111;
`;

const Input = styled.div`
  width: 70%;
  height: 40px;
`;

const Description = styled.textarea`
  width: 70%;
  height: 80px;
  outline: none;
  border: 1px solid #bdbdbd;
  resize: none;
  padding: 10px;
`;

const CloseBtn = styled.button`
  font-size: 24px;
  font-weight: 500;
  color: #111;
  border: none;
  background: none;
  cursor: pointer;
`;

const StatusSelect = styled.select`
  width: 100%;
  height: 100%;
  border: 1px solid #bdbdbd;
`;

const SaveBtn = styled.button`
  display: block;
  width: 70px;
  height: 30px;
  background-color: #111;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 30px auto 0;
`;

export default AddIssueModal;
