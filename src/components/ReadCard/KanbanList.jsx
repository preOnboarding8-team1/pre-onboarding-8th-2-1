import styled from 'styled-components';
import Card from './Card';

const KanbanList = ({ title, cards }) => {
  return (
    <KanbanListWrap>
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
