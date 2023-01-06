import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AiOutlineSetting } from 'react-icons/ai';
import { assigneesState, issuesState } from '../atoms';
import Assignees from '../components/Assignees';

import { useDelay } from '../hooks/useDelay';

const IssueForm = () => {
  const STATUS_INITIAL = ['Todo', 'In Progress', 'Done'];
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('Todo');
  const [date, setDate] = useState('');

  const [isDate, setIsDate] = useState(false);
  const [isAssignees, setIsAssignees] = useState(false);
  const [isStatus, setIsStatus] = useState(false);

  const [assignees, setAssigness] = useRecoilState(assigneesState);
  const [issues, setIssues] = useRecoilState(issuesState);

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e, set) => {
    set(e.target.value);
  };

  const handleIsShow = (set) => set((prev) => !prev);

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();

    setDate(`${year}년 ${month}월 ${date}일`);
  };

  const handleSelect = (e) => {
    setStatus(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (typeof state === 'object') {
      const patchIssue = { ...state, assignees, title, desc, dueDate: date, status };
      const newIssues = [...issues].map((v) => {
        if (v.id === state.id) return patchIssue;
        return v;
      });

      setIssues(newIssues);
      setAssigness([]);
      navigate('/');

      return;
    }

    if (issues.length > 0) {
      const nextId = Math.max(...issues.map((v) => v.id)) + 1;
      const newIssue = { id: nextId, assignees, title, desc, dueDate: date, status };
      const newIssues = [...issues, newIssue];

      setIssues(newIssues);
    } else {
      const newIssue = { id: 1, assignees, title, desc, dueDate: date, status };
      const newIssues = [newIssue];

      setIssues(newIssues);
    }

    setAssigness([]);
    navigate('/');
  };
  const handleNavigateBack = () => navigate(-1);

  const handleOnSubmitDelay = useDelay(handleOnSubmit);
  const handleNavigateBackDelay = useDelay(handleNavigateBack);
  useEffect(() => {
    if (typeof state === 'object') {
      setTitle(state.title);
      setDesc(state.desc);
      setAssigness(state.assignees);
      setDate(state.dueDate);
      setStatus(state.status);
    } else if (typeof state === 'string') {
      setStatus(state);
    }
  }, []);

  return (
    <IssueFormComponent onSubmit={handleOnSubmitDelay}>
      <IssueArticle>
        <Box>
          <IssueTitleInput
            type="text"
            placeholder="Title"
            onChange={(e) => handleOnChange(e, setTitle)}
            value={title}
          />
          <IssueDescArea placeholder="Desc" onChange={(e) => handleOnChange(e, setDesc)} value={desc} />
          <IssueBtnBox>
            <IssueSubmitBtn type="button" onClick={handleOnSubmitDelay}>
              {typeof state === 'object' ? '수정' : '제출'}
            </IssueSubmitBtn>
            {typeof state === 'object' && (
              <IssueCancelBtn type="button" onClick={handleNavigateBackDelay}>
                취소
              </IssueCancelBtn>
            )}
          </IssueBtnBox>
        </Box>
      </IssueArticle>

      <IssueInfo>
        <Box>
          <IssueInfoItem>
            <IssueInfoTitle onClick={() => handleIsShow(setIsAssignees)} role="presentation">
              Assignees <AiOutlineSetting />
            </IssueInfoTitle>
            {assignees.length ? assignees.map((v) => <div key={v}>{v}</div>) : '비어 있음'}
            {isAssignees ? <Assignees /> : <></>}
          </IssueInfoItem>

          <IssueInfoItem>
            <IssueInfoTitle onClick={() => handleIsShow(setIsDate)} role="presentation">
              Date <AiOutlineSetting />
            </IssueInfoTitle>
            <div>{date || '비어 있음'}</div>
            {isDate && <IssueInfoDate type="datetime-local" onChange={handleDateChange} />}
          </IssueInfoItem>

          <IssueInfoItem>
            <IssueInfoTitle onClick={() => handleIsShow(setIsStatus)} role="presentation">
              Status <AiOutlineSetting />
            </IssueInfoTitle>
            <div>{status}</div>
            {isStatus && (
              <IssueStatusSelect onChange={handleSelect} defaultValue={status}>
                {STATUS_INITIAL.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </IssueStatusSelect>
            )}
          </IssueInfoItem>
        </Box>
      </IssueInfo>
    </IssueFormComponent>
  );
};

const IssueFormComponent = styled.form`
  display: flex;
  width: 90%;
  margin: auto;
`;

const IssueArticle = styled.div`
  flex-grow: 1;
  margin-right: 10px;
  border-right: 1px solid #d9d9d9;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 42px;
`;

const IssueTitleInput = styled.input`
  padding: 15px 0 15px 18px;
  border: none;
  border-bottom: 1px solid grey;
  font-size: 1.5rem;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 1.5rem;
  }
`;

const IssueDescArea = styled.textarea`
  height: 220px;
  margin: 10px 0;
  padding: 20px;
  border-radius: 7px;
  font-size: 1rem;
  font-family: arial, Helvetica, sans-serif;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 1rem;
  }
`;

const IssueCancelBtn = styled.button`
  width: 125px;
  margin: 8px 8px 8px 0;
  padding: 8px 0px;
  border: none;
  border-radius: 5px;
  background-color: #f26e22;
  color: white;
  cursor: pointer;
`;

const IssueSubmitBtn = styled.button`
  width: 125px;
  margin: 8px 8px 8px 0;
  padding: 8px 0px;
  border: none;
  border-radius: 5px;
  background-color: #21bf48;
  color: white;
  cursor: pointer;
`;

const IssueBtnBox = styled.div`
  display: flex;
`;

const IssueInfo = styled.div`
  flex-grow: 1;
  margin-left: 10px;
  padding: 10px 0;
  line-height: 24px;
  flex-grow: 1;
`;

const IssueInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
  padding: 10px 0px;
  border-bottom: 1px solid #d9d9d9;
`;

const IssueInfoTitle = styled.div`
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: skyblue;
  }
`;

const IssueInfoDate = styled.input`
  margin-top: 10px;
  animation: fadeIn ease-in-out 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const IssueStatusSelect = styled.select`
  margin-top: 10px;
  padding: 10px 0;
  border-radius: 5px;
  animation: fadeIn ease-in-out 1s;
  :focus {
    outline: none;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default IssueForm;
