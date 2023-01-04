import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { issuesState } from '../atoms';

import IssueList from '../components/IssueList';

const Issue = () => {
  const [issues, setIssues] = useRecoilState(issuesState);

  const todoIssues = issues.filter((v) => v.status === 'Todo');
  const inProgressIssues = issues.filter((v) => v.status === 'In Progress');
  const doneIssues = issues.filter((v) => v.status === 'Done');

  return (
    <div>
      <IssueListContainer>
        <IssueList title="Todo" issues={todoIssues} />
        <IssueList title="In Progress" issues={inProgressIssues} />
        <IssueList title="Done" issues={doneIssues} />
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
