import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { issuesState } from '../atoms';
import { useDelay } from '../hooks/useDelay';
import { localSetData } from '../utils/local';

import IssueList from '../components/IssueList';

const Issue = () => {
  const ISSUES_STATUS = ['Todo', 'In Progress', 'Done'];
  const FIRST = 'first';
  const LAST = 'last';
  const [issues, setIssues] = useRecoilState(issuesState);
  const [dragItem, setDragItem] = useState({});

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
    if (ISSUES_STATUS.includes(e.target.id)) {
      if (e.target.id !== dragItem.status) {
        const newIssue = { ...dragItem, status: e.target.id };
        const nextIssues = issues.filter((v) => v.status === newIssue.status);

        const another = issues.filter((v) => v.status !== newIssue.status).filter((v) => v.status !== dragItem.status);
        if (classNames.includes(FIRST)) {
          nextIssues.unshift(newIssue);
        } else if (classNames.includes(LAST)) {
          nextIssues.push(newIssue);
        } else {
          nextIssues.splice(+classNames[2], 0, newIssue);
        }
        const result = [...another, ...prevIssues, ...nextIssues];
        localSetData(result);
        setIssues(result);
      } else {
        if (classNames.includes(FIRST)) {
          prevIssues.unshift(dragItem);
        } else if (classNames.includes(LAST)) {
          prevIssues.push(dragItem);
        } else if (prevIdx >= +classNames[2]) {
          prevIssues.splice(+classNames[2], 0, dragItem);
        } else {
          prevIssues.splice(+classNames[2] - 1, 0, dragItem);
        }
        const another = issues.filter((v) => v.status !== dragItem.status);
        const result = [...another, ...prevIssues];
        localSetData(result);
        setIssues(result);
      }
    }
  };
  const handleOnDragStartDelay = useDelay(handleOnDragStart);
  const handleOnDropDelay = useDelay(handleOnDrop);
  return (
    <div>
      <IssueListContainer>
        {ISSUES_STATUS.map((v) => (
          <IssueList
            key={v}
            title={v}
            status={v}
            handleOnDragStart={handleOnDragStartDelay}
            handleOnDragOver={handleOnDragOver}
            handleOnDrop={handleOnDropDelay}
          />
        ))}
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
