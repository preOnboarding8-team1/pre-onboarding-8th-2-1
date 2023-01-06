import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDelay } from '../hooks/useDelay';

const IssueItem = ({ issue, handleOnDragStart }) => {
  const { assignees, title, id } = issue;
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/issue/${id}`, { state: issue });

  const handleNavigateDelay = useDelay(handleNavigate);
  const titleSlice = title.length > 25 ? `${title.substring(0, 25)} ...` : title;
  return (
    <IssueItemComponent onDragStart={() => handleOnDragStart(issue)} draggable onClick={handleNavigateDelay}>
      <IssueTitle>
        <div>{`#${id}`}</div>
        <div>{assignees ? assignees.join(', ') : <></>}</div>
      </IssueTitle>
      <IssueDesc>{titleSlice}</IssueDesc>
    </IssueItemComponent>
  );
};

const IssueItemComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 65px;
  padding: 5px;
  margin: 2px 0;
  background: #eee;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 2px auto;
  }
`;

const IssueTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 4px;
`;

const IssueDesc = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  padding: 0 4px;
  line-height: 18px;
`;

export default IssueItem;
