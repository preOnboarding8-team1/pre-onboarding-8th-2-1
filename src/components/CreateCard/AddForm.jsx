import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { kanbanListState } from '../../atoms/atom';

const AddForm = ({ setOpenAddForm }) => {
  const [kanbanList, setKanbanList] = useRecoilState(kanbanListState);
  const getId = kanbanList.length > 0 ? kanbanList[kanbanList.length - 1].id + 1 : 0;

  const handleAddTask = () => {
    const taskTitle = document.querySelector('.taskTitle').value;
    const taskContent = document.querySelector('.taskContent').value;
    const taskDeadline = document.querySelector('.taskDeadline').value;
    const taskManager = document.querySelector('.taskManager').value;
    setKanbanList((prev) => [
      ...prev,
      {
        id: getId,
        title: taskTitle,
        content: taskContent,
        category: '할 일',
        isChecked: false,
        deadline: taskDeadline,
        manager: taskManager,
      },
    ]);
    setOpenAddForm(false);
  };

  const cancelAddForm = () => {
    setOpenAddForm(false);
  };

  return (
    <AddContainer>
      <TaskTitle className="taskTitle" type="text" />
      <TaskDeadline className="taskDeadline" type="datetime-local" />
      <TaskManager className="taskManager" type="text" />
      <TaskContent className="taskContent" cols="30" rows="10" />
      <TaskSaveBtn onClick={handleAddTask}>저장</TaskSaveBtn>
      <TaskCancelBtn onClick={cancelAddForm}>취소</TaskCancelBtn>
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

const TaskTitle = styled.input``;
const TaskDeadline = styled.input``;
const TaskManager = styled.input``;
const TaskContent = styled.textarea``;
const TaskSaveBtn = styled.button``;
const TaskCancelBtn = styled.button``;
