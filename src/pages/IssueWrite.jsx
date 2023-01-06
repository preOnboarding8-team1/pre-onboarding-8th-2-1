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
    const issues = JSON.parse(localStorage.getItem('issues'));
    if (typeof state === 'object') {
      const patchIssue = { ...state, assignees, title, desc, dueDate: date, status };
      const newIssues = [...issues].map((v) => {
        if (v.id === state.id) return patchIssue;
        return v;
      });
      localStorage.setItem('issues', JSON.stringify(newIssues));
      setIssues(newIssues);
    } else if (issues) {
      const nextId = Math.max(...issues.map((v) => v.id)) + 1;
      const newIssue = { id: nextId, assignees, title, desc, dueDate: date, status };
      const newIssues = [...issues, newIssue];
      localStorage.setItem('issues', JSON.stringify(newIssues));
      setIssues(newIssues);
    } else {
      const newIssue = { id: 0, assignees, title, desc, dueDate: date, status };
      const newIssues = [newIssue];
      localStorage.setItem('issues', JSON.stringify(newIssues));
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
          <IssueSubmitBtn type="button" onClick={handleOnSubmitDelay}>
            {typeof state === 'object' ? '수정' : '제출'}
          </IssueSubmitBtn>
          {typeof state === 'object' && (
            <IssueSubmitBtn type="button" onClick={handleNavigateBackDelay}>
              취소
            </IssueSubmitBtn>
          )}
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
            {isDate && <input type="datetime-local" onChange={handleDateChange} />}
          </IssueInfoItem>

          <IssueInfoItem>
            <IssueInfoTitle onClick={() => handleIsShow(setIsStatus)} role="presentation">
              Status <AiOutlineSetting />
            </IssueInfoTitle>
            <div>{status}</div>
            {isStatus && (
              <select onChange={handleSelect} defaultValue={status}>
                {STATUS_INITIAL.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            )}
          </IssueInfoItem>
        </Box>
      </IssueInfo>
    </IssueFormComponent>
  );
};

const IssueFormComponent = styled.form`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const IssueArticle = styled.div`
  width: 900px;
  border-right: 1px solid #d9d9d9;
`;

const Box = styled.div`
  margin-top: 42px;
`;

const IssueTitleInput = styled.input`
  width: 860px;
  height: 30px;
  padding: 4px;
`;

const IssueDescArea = styled.textarea`
  width: 862px;
  height: 220px;
  padding: 4px;
  margin: 10px 0;
`;

const IssueSubmitBtn = styled.button`
  width: 140px;
  height: 32px;
  margin: 8px 8px 8px 0;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

const IssueInfo = styled.div`
  width: 326px;
  padding: 10px 0;
  line-height: 24px;
`;

const IssueInfoItem = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
`;

const IssueInfoTitle = styled.div`
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: skyblue;
  }
`;

export default IssueForm;
