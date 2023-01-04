import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const IssueItem = ({ issue, handleOnDragStart }) => {
  const { assignees, title, id } = issue;
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/issue/${id}`, { state: issue });

  const titleSlice = title.length > 25 ? `${title.substring(0, 25)} ...` : title;
  return (
    <IssueItemComponent onDragStart={() => handleOnDragStart(issue)} draggable onClick={handleNavigate}>
      <IssueTitle>
        <div>{`#${id}`}</div>
        <div>{assignees ? assignees.join(', ') : <></>}</div>
      </IssueTitle>
      <IssueDesc>{titleSlice}</IssueDesc>
    </IssueItemComponent>
  );
};

const IssueItemComponent = styled.div`
  width: 312px;
  height: 65px;
  padding: 5px;
  margin: 2px 0;
  display: flex;
  background: #eee;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
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
