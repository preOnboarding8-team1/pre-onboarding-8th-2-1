import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { issuesState } from '../atoms';

import IssueList from '../components/IssueList';

const Issue = () => {
  const [issues, setIssues] = useRecoilState(issuesState);
  const [dragItem, setDragItem] = useState({});

  const todoIssues = issues.filter((v) => v.status === 'Todo');
  const inProgressIssues = issues.filter((v) => v.status === 'In Progress');
  const doneIssues = issues.filter((v) => v.status === 'Done');

  const handleOnDragStart = (issue) => {
    setDragItem(issue);
  };
  const handleOnDragOver = (e) => {
    e.preventDefault();
  };
  const handleOnDrop = (e) => {
    e.preventDefault();
    const classNames = e.target.className.split(' ');
    const prevIssues = issues.filter((v) => v.status === dragItem.status);
    const prevIdx = prevIssues.indexOf(dragItem);
    prevIssues.splice(prevIdx, 1);
    if (['Todo', 'In Progress', 'Done'].includes(e.target.id)) {
      if (e.target.id !== dragItem.status) {
        const newIssue = { ...dragItem, status: e.target.id };
        const nextIssues = issues.filter((v) => v.status === newIssue.status);

        const another = issues.filter((v) => v.status !== newIssue.status).filter((v) => v.status !== dragItem.status);
        if (classNames.includes('first')) {
          nextIssues.unshift(newIssue);
        } else if (classNames.includes('last')) {
          nextIssues.push(newIssue);
        } else {
          nextIssues.splice(+classNames[2], 0, newIssue);
        }
        const result = [...another, ...prevIssues, ...nextIssues];
        localStorage.setItem('issues', JSON.stringify(result));
        setIssues(result);
      } else {
        if (classNames.includes('first')) {
          prevIssues.unshift(dragItem);
        } else if (classNames.includes('last')) {
          prevIssues.push(dragItem);
        } else if (prevIdx >= +classNames[2]) {
          prevIssues.splice(+classNames[2], 0, dragItem);
        } else {
          prevIssues.splice(+classNames[2] - 1, 0, dragItem);
        }
        const another = issues.filter((v) => v.status !== dragItem.status);
        const result = [...another, ...prevIssues];
        localStorage.setItem('issues', JSON.stringify(result));
        setIssues(result);
      }
    }
  };
  return (
    <div>
      <IssueListContainer>
        <IssueList
          title="Todo"
          issues={todoIssues}
          handleOnDragStart={handleOnDragStart}
          handleOnDragOver={handleOnDragOver}
          handleOnDrop={handleOnDrop}
        />
        <IssueList
          title="In Progress"
          issues={inProgressIssues}
          handleOnDragStart={handleOnDragStart}
          handleOnDragOver={handleOnDragOver}
          handleOnDrop={handleOnDrop}
        />
        <IssueList
          title="Done"
          issues={doneIssues}
          handleOnDragStart={handleOnDragStart}
          handleOnDragOver={handleOnDragOver}
          handleOnDrop={handleOnDrop}
        />
      </IssueListContainer>
    </div>
  );
};

const IssueListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export default Issue;
