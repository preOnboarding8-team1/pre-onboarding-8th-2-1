import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { kanbanListState } from '../../atoms/atom';
import Card from './Card';

const KanbanList = ({ title, cards }) => {
  const [kanbanList, setKanbanList] = useRecoilState(kanbanListState);
  const handleDropItem = (event) => {
    event.preventDefault();
    const dropCardId = parseInt(event.dataTransfer.getData('id'), 10);
    const chageState = event.target.closest('section').childNodes[0].innerText;
    setKanbanList(
      kanbanList.map((task) =>
        task.id === dropCardId
          ? {
              ...task,
              state: chageState,
            }
          : task
      )
    );
  };

  return (
    <KanbanListWrap
      onDragOver={(event) => {
        event.preventDefault();
      }}
      onDrop={handleDropItem}
      className="kanbanContainer">
      <KanbanListTitle>{title}</KanbanListTitle>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} card={card} />
      ))}
    </KanbanListWrap>
  );
};

export default KanbanList;

const KanbanListWrap = styled.section`
  width: 20vw;
  margin: 0 10px;
  padding: 10px;
`;

const KanbanListTitle = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: 600;
  color: grey;
`;
