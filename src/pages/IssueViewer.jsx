import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { issuesState } from '../atoms';
import { useDelay } from '../hooks/useDelay';
import { localSetData } from '../utils/local';

const IssueViewer = () => {
  const { state } = useLocation();
  const { title, desc, assignees, dueDate, id, status } = state;
  const navigate = useNavigate();

  const [issues, setIssues] = useRecoilState(issuesState);

  const handleNavigate = () => navigate('/issue/write', { state });
  const handleDelete = () => {
    const newIssues = issues.filter((v) => v.id !== id);
    localSetData(newIssues);
    setIssues(issues.filter((v) => v.id !== id));
    navigate('/');
  };

  const handleNavigateDelay = useDelay(handleNavigate);
  const handleDeleteDelay = useDelay(handleDelete);
  return (
    <IssueViewerComponent>
      <Box>
        <Title>{`#${id} ${title}`}</Title>
        <div>
          <Title>담당자 : {assignees.join(', ')}</Title>
          <Title>마감일 : {dueDate}</Title>
          <Title>상태 : {status}</Title>
        </div>

        <Desc>{desc}</Desc>

        <div>
          <Btn type="button" onClick={handleNavigateDelay}>
            수정
          </Btn>
          <Btn type="button" onClick={handleDeleteDelay}>
            삭제
          </Btn>
        </div>
      </Box>
    </IssueViewerComponent>
  );
};

const IssueViewerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 42px;
`;

const Box = styled.div`
  border: 1px solid black;
`;

const Title = styled.div`
  width: 1200px;
  padding: 10px;
  border-bottom: 1px solid black;
`;

const Desc = styled(Title)`
  min-height: 432px;
  border-bottom: 1px solid black;
`;

const Btn = styled.button`
  width: 125px;
  height: 32px;
  margin: 8px;
  cursor: pointer;
`;

export default IssueViewer;
