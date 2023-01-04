import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import Issue from '../components/Issue';
import AddIssueModal from '../components/Modal/AddIssue';

const TODO_LIST = [
  {
    id: 1,
    title: '할 일 제목',
    description: '할 일 입니다.',
    deadline: '',
    status: 'todo',
    manage: '조정택',
  },
  {
    id: 2,
    title: '진행중 제목',
    description: '할 일 입니다.',
    deadline: '',
    status: 'inprogress',
    manage: '조정택',
  },
  {
    id: 3,
    title: '완료 제목',
    description: '할 일 입니다.',
    deadline: '',
    status: 'complete',
    manage: '조정택',
  },
  {
    id: 4,
    title: '할 일 제목2',
    description: '할 일 입니다.',
    deadline: '',
    status: 'todo',
    manage: '조정택',
  },
];

const Board = () => {
  const [isModal, setIsModal] = useState(false);
  const [todoInput, setTodoInput] = useState({
    id: uuid(),
    title: 'asd',
    description: 'asd',
    deadline: '2022.01.01',
    status: 'todo',
    manage: '조정택',
  });

  const TODO = TODO_LIST.filter((el) => el.status === 'todo');
  const INPROGRESS = TODO_LIST.filter((el) => el.status === 'inprogress');
  const COMPLETE = TODO_LIST.filter((el) => el.status === 'complete');

  //   useEffect(() => {
  //     const TodoList = localStorage.getItem('todo-list') ?? [];
  //   }, []);

  const handleModalToggle = () => {
    setIsModal((prev) => !prev);
  };

  const handleSubmit = () => {
    try {
      const TodoList = JSON.parse(localStorage.getItem('todo-list')) ?? [];
      console.log(TodoList);
      TodoList.push(todoInput);

      localStorage.setItem('todo-list', JSON.stringify(TodoList));

      alert('등록완료');
    } catch (error) {
      alert('실패');
    }
  };

  return (
    <Wrapper>
      <Container>
        <IssueBox>
          <TodoBox>
            <BoxTitle>
              <span>할 일</span> <AddIssueBtn onClick={handleModalToggle}>+</AddIssueBtn>
            </BoxTitle>
            <ContentBox>
              {TODO.length === 0 && (
                <Issue>
                  <AddIssuwBox onClick={handleModalToggle}>추가 +</AddIssuwBox>
                </Issue>
              )}
              {TODO.map((todo) => {
                return <Issue>{todo.title}</Issue>;
              })}
            </ContentBox>
          </TodoBox>
          <InProgressBox>
            <BoxTitle>
              <span>진행중</span>
            </BoxTitle>
            <ContentBox>
              {INPROGRESS.map((inprogress) => {
                return <Issue>{inprogress.title}</Issue>;
              })}
            </ContentBox>
          </InProgressBox>
          <CompleteBox>
            <BoxTitle>
              <span>완료</span>
            </BoxTitle>
            <ContentBox>
              {COMPLETE.map((complete) => {
                return <Issue>{complete.title}</Issue>;
              })}
            </ContentBox>
          </CompleteBox>
        </IssueBox>
      </Container>
      {isModal && <AddIssueModal handleModalToggle={handleModalToggle} handleSubmit={handleSubmit} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 960px;
`;

const IssueBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TodoBox = styled.div`
  width: 32%;
`;
const InProgressBox = styled(TodoBox)``;
const CompleteBox = styled(TodoBox)``;

const BoxTitle = styled.h2`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  color: #111;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddIssuwBox = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: orange;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const AddIssueBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 24px;
`;

export default Board;
