import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { kanbanListState } from '../../atoms/atom';

const CardDelete = () => {
  const [taskList, setTaskList] = useRecoilState(kanbanListState);
  const handleCardDelete = (event) => {
    const targetId = parseInt(event.target.parentElement.parentElement.dataset.id, 10);
    setTaskList(taskList.filter((task) => task.id !== targetId));
  };

  return <DeleteBtn onClick={handleCardDelete}>X</DeleteBtn>;
};

export default CardDelete;
const DeleteBtn = styled.button`
  padding: 0;
  border: 0;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
`;
