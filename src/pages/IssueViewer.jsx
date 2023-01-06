import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { issuesState } from '../atoms';
import { useDelay } from '../hooks/useDelay';

const IssueViewer = () => {
  const { state } = useLocation();
  const { title, desc, assignees, dueDate, id, status } = state;
  const navigate = useNavigate();

  const [issues, setIssues] = useRecoilState(issuesState);

  const handleNavigate = () => navigate('/issue/write', { state });
  const handleDelete = () => {
    const newIssues = issues.filter((v) => v.id !== id);
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

        <IssueUpdateBtn type="button" onClick={handleNavigateDelay}>
          수정
        </IssueUpdateBtn>
        <IssueDeleteBtn type="button" onClick={handleDeleteDelay}>
          삭제
        </IssueDeleteBtn>
      </Box>
    </IssueViewerComponent>
  );
};

const IssueViewerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-top: 42px;
`;

const Box = styled.div`
  width: 50%;
  min-width: 277px;
  max-width: 800px;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 4px 1px 10px 2px #000000;
`;

const Title = styled.div`
  padding: 10px;
  border-bottom: 1px solid black;
  vertical-align: middle;
`;

const Desc = styled(Title)`
  min-height: 400px;
  border-bottom: 1px solid black;
`;

const IssueUpdateBtn = styled.button`
  width: 125px;
  margin: 8px 0 8px 8px;
  padding: 8px 0;
  border: none;
  border-radius: 5px;
  background-color: #21bf48;
  color: white;
  cursor: pointer;
`;

const IssueDeleteBtn = styled.button`
  width: 125px;
  margin: 8px 0 8px 8px;
  padding: 8px 0;
  border: none;
  border-radius: 5px;
  background-color: #f26e22;
  color: white;
  cursor: pointer;
`;

export default IssueViewer;
