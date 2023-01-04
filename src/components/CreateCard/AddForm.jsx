import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useLayoutEffect, useState } from 'react';
import { kanbanListState, managerSelect, stateDropdown } from '../../atoms/atom';
import Search from './Search';
import StateDropdown from './StateDropdown';

const AddForm = ({ setOpenAddForm }) => {
  const [kanbanList, setKanbanList] = useRecoilState(kanbanListState);
  const [stateDrop, setStateDrop] = useRecoilState(stateDropdown);
  const [currentManager, setCurrentManager] = useRecoilState(managerSelect);
  const getId = kanbanList.length > 0 ? kanbanList[kanbanList.length - 1].id + 1 : 0;

  const handleTaskAdd = () => {
    const taskTitle = document.querySelector('.taskTitle').value;
    const taskContent = document.querySelector('.taskContent').value;
    const taskDeadline = document.querySelector('.taskDeadline').value;
    setKanbanList((prev) => [
      ...prev,
      {
        id: getId,
        title: taskTitle,
        content: taskContent,
        state: stateDrop,
        deadline: taskDeadline,
        manager: currentManager,
      },
    ]);
    setOpenAddForm(false);
  };

  useLayoutEffect(() => {
    document.querySelector('.taskManager').value = currentManager;
  }, [currentManager]);

  return (
    <AddContainer>
      <AddItemBox>
        <TaskTitle className="taskTitle" type="text" placeholder="제목" />
        <TaskDeadline className="taskDeadline" type="datetime-local" />
        <TaskManager
          onChange={(event) => {
            event.target.value ? setCurrentManager(event.target.value) : setCurrentManager('');
          }}
          className="taskManager"
          type="text"
          placeholder="담당자"
        />
        {currentManager && <Search />}
        <TaskState className="taskState" placeholder="상태">
          상태
        </TaskState>
        <StateDropdown setStateDrop={setStateDrop} />
        <TaskContent className="taskContent" cols="30" rows="10" placeholder="내용" />
        <TaskSaveBtn onClick={handleTaskAdd}>저장</TaskSaveBtn>
        <TaskCancelBtn onClick={() => setOpenAddForm(false)}>취소</TaskCancelBtn>
      </AddItemBox>
    </AddContainer>
  );
};

export default AddForm;

const AddContainer = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const AddItemBox = styled.div`
  display: flex;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  flex-direction: column;
`;
const TaskTitle = styled.input`
  width: 30%;
  padding: 0;
  border: 0;
  outline: 0;
`;
const TaskDeadline = styled.input`
  width: 30%;
  padding: 0;
  border: 0;
  outline: 0;
`;
const TaskState = styled.button`
  width: 30%;
  margin-top: 10px;
`;
const TaskManager = styled.input`
  width: 30%;
  margin-top: 10px;
  padding: 0;
  border: 0;
  outline: 0;
`;
const TaskContent = styled.textarea`
  width: 30%;
  margin-top: 10px;
  padding: 0;
  border: 0;
  outline: 0;
`;
const TaskSaveBtn = styled.button`
  width: 30%;
`;
const TaskCancelBtn = styled.button`
  width: 30%;
`;
