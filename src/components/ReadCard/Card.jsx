import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { kanbanListState } from '../../atoms/atom';

const Card = ({ card }) => {
  const [taskList, setTaskList] = useRecoilState(kanbanListState);

  const handleCardDelete = (event) => {
    const targetId = parseInt(event.target.closest('section').dataset.id, 10);
    setTaskList(taskList.filter((task) => task.id !== targetId));
  };

  return (
    <CardContainer data-id={card.id}>
      <CardContentBox>
        <CardCategory>{card.state}</CardCategory>
        <CardContent>{card.title}</CardContent>
        <DeleteBtn onClick={handleCardDelete}>X</DeleteBtn>
      </CardContentBox>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid white;
  border-radius: 7px;
  background-color: white;
  box-shadow: 1px 1px 5px 0.1px rgba(0, 0, 0, 0.15);
`;

const CardContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

const CardCategory = styled.div`
  height: 15px;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  background-color: gray;
  color: white;
`;

const CardContent = styled.p`
  display: inline-block;
  width: 50%;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 600;
  border: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
`;

const DeleteBtn = styled.button`
  padding: 0;
  border: 0;
  font-size: 0.5rem;
  width: 10px;
  height: 10px;
  background-color: transparent;
  cursor: pointer;
`;
