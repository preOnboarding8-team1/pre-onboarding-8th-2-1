import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { assigneesState } from '../atoms';

const Assignees = () => {
  const INITIAL_SUGGESTIONS = ['김민상', '조정택', '박경태', '박혜정', '최승수', '오태준', '곽현', '이성헌', '조재헌'];

  const [assignees, setAssignees] = useRecoilState(assigneesState);
  const [suggestions, setSuggestions] = useState(INITIAL_SUGGESTIONS);
  const inputRef = useRef();

  const handleAddAssignees = (name) => {
    setAssignees((prevState) => {
      const newState = [...prevState];
      if (newState.includes(name)) return newState.filter((v) => v !== name);
      return [...newState, name];
    });
  };

  const handleSearch = (e) => {
    setSuggestions(INITIAL_SUGGESTIONS.filter((v) => v.includes(e.target.value)));
  };

  return (
    <AssignessComponent>
      <SuggestionsInputBox>
        <SuggestionsInput type="text" onChange={handleSearch} ref={inputRef} />
      </SuggestionsInputBox>

      <SuggestionsTitle>Suggestions</SuggestionsTitle>

      {suggestions.map((v) => (
        <SuggestionsItem key={v} role="presentation" onClick={() => handleAddAssignees(v)}>
          <SuggestionsCheck>{assignees.includes(v) ? <AiOutlineCheck /> : ''}</SuggestionsCheck>
          {v}
        </SuggestionsItem>
      ))}
    </AssignessComponent>
  );
};

const AssignessComponent = styled.div`
  width: 300px;
  border: 1px solid #d9d9d9;
  border-bottom: none;
  box-sizing: border-box;
`;

const SuggestionsInputBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const SuggestionsInput = styled.input`
  width: 250px;
  padding: 4px 4px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

const SuggestionsTitle = styled.div`
  padding: 5px;
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
`;

const SuggestionsItem = styled.div`
  width: 282px;
  height: 20px;
  padding: 8px;
  display: flex;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
`;

const SuggestionsCheck = styled.div`
  width: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Assignees;
