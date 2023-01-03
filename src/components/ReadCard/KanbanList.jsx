import styled from 'styled-components';

const KanbanList = ({ title }) => {
  return (
    <KanbanListWrap>
      <KanbanListTitle>{title}</KanbanListTitle>
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
