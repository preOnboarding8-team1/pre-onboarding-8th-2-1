import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IssueItem from './IssueItem';
import { filteredIssueState } from '../atoms';

const IssueList = ({ title, status, handleOnDragOver, handleOnDrop, handleOnDragStart }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/issue/write', { state: title });

  const issues = useRecoilValue(filteredIssueState(status));

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
      <IssueAddBtn onClick={handleNavigate}>+ Add Item</IssueAddBtn>
    </IssueListComponent>
  );
};

const IssueListComponent = styled.div`
  display: flex;
  width: 350px;
  height: 600px;
  background: #fff;
  margin: 5px;
  flex-direction: column;
  border-radius: 10px;
  overflow: auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
    margin: 5px auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const IssueListTitle = styled.div`
  margin: 10px 10px 0 10px;
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
  margin-top: 10px;
`;

const IssueAddBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background: #f1f3f5;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  &:hover {
    background: #e9ecef;
  }
`;

const IssueItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default IssueList;
