import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useLayoutEffect } from 'react';
import { kanbanListState, managerSelect, stateDropdown } from '../../atoms/atom';
import Search from '../CreateCard/Search';
import StateDropdown from '../CreateCard/StateDropdown';

const UpdateForm = ({ card, setUpdateModal }) => {
  const [kanbanList, setKanbanList] = useRecoilState(kanbanListState);
  const [currentManager, setCurrentManager] = useRecoilState(managerSelect);
  const stateDrop = useRecoilValue(stateDropdown);

  const handleTaskUpdate = () => {
    const taskTitle = document.querySelector('.taskTitle').value;
    const taskContent = document.querySelector('.taskContent').value;
    const taskDeadline = document.querySelector('.taskDeadline').value;
    setKanbanList(
      kanbanList.map((task) =>
        task.id === card.id
          ? {
              ...task,
              id: card.id,
              title: taskTitle,
              content: taskContent,
              state: stateDrop,
              deadline: taskDeadline,
              manager: currentManager,
            }
          : task
      )
    );
    setUpdateModal(false);
  };

  useLayoutEffect(() => {
    document.querySelector('.taskManager').value = currentManager;
  }, [currentManager]);

  return (
    <UpdateContainer>
      <UpdateItemBox>
        <TaskTitle className="taskTitle" type="text" placeholder="제목" defaultValue={card.title} />
        <TaskDeadline className="taskDeadline" type="datetime-local" defaultValue={card.deadline} />
        <TaskManager
          className="taskManager"
          type="text"
          placeholder="담당자"
          defaultValue={currentManager}
          onChange={(event) => setCurrentManager(event.target.value)}
        />
        {currentManager && <Search />}

        <TaskState className="taskState" placeholder="상태">
          상태
        </TaskState>
        <StateDropdown card={card} />
        <TaskContent className="taskContent" cols="30" rows="10" placeholder="내용" defaultValue={card.content} />
        <TaskSaveBtn onClick={handleTaskUpdate}>저장</TaskSaveBtn>
        <TaskCancelBtn onClick={() => setUpdateModal(false)}>취소</TaskCancelBtn>
      </UpdateItemBox>
    </UpdateContainer>
  );
};

export default UpdateForm;

const UpdateContainer = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const UpdateItemBox = styled.div`
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
