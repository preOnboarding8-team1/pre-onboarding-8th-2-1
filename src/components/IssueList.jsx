import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IssueItem from './IssueItem';

const IssueList = ({ title, issues, handleOnDragOver, handleOnDrop, handleOnDragStart }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/issue/write', { state: title });
  return (
    <IssueListComponent onDragOver={handleOnDragOver} onDrop={handleOnDrop} id={title}>
      <IssueListTitle>{title}</IssueListTitle>
      <IssueMoveArea id={title} className="first 0" />
      {issues.length ? (
        issues.map((v, idx) => (
          <IssueItemBlock key={v.id}>
            <IssueMoveArea id={title} className={idx} />
            <IssueItem issue={v} handleOnDragStart={handleOnDragStart} />
          </IssueItemBlock>
        ))
      ) : (
        <></>
      )}
      <IssueLastBlock id={title} className={`last ${issues.length + 1}`} />
      <IssueAddBtn onClick={handleNavigate}>Add Item</IssueAddBtn>
    </IssueListComponent>
  );
};

const IssueListComponent = styled.div`
  width: 350px;
  height: 600px;
  background: #d9d9d9;
  margin: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: auto;
`;

const IssueListTitle = styled.div`
  padding: 10px;
  font-weight: 700;
`;

const IssueMoveArea = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
`;

const IssueLastBlock = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 0;
`;

const IssueAddBtn = styled.div`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border-top: 1px solid black;
  cursor: pointer;
`;
const IssueItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default IssueList;
