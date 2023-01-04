import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { kanbanListState } from '../../atoms/atom';

const CardDelete = () => {
  const [taskList, setTaskList] = useRecoilState(kanbanListState);
  const handleCardDelete = (event) => {
    const targetId = parseInt(event.target.closest('section').dataset.id, 10);
    setTaskList(taskList.filter((task) => task.id !== targetId));
  };

  return <DeleteBtn onClick={handleCardDelete}>X</DeleteBtn>;
};

export default CardDelete;
const DeleteBtn = styled.button`
  padding: 0;
  border: 0;
  font-size: 0.5rem;
  width: 10px;
  height: 10px;
  background-color: transparent;
  cursor: pointer;
`;
