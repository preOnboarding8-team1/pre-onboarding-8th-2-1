import styled from 'styled-components';
import KanbanList from '../components/ReadCard/KanbanList';

const KanbanBoard = () => {
  const TITLE_NAME = {
    TO_DO: '할 일',
    IN_PROGRESS: '진행 중',
    DONE: '완료',
  };

  return (
    <>
      <MainHeader>
        <MainTitle>KANBAN BOARD</MainTitle>
      </MainHeader>
      <KanbanContainer>
        <KanbanList title={TITLE_NAME.TO_DO} />
        <KanbanList title={TITLE_NAME.IN_PROGRESS} />
        <KanbanList title={TITLE_NAME.DONE} />
      </KanbanContainer>
    </>
  );
};

export default KanbanBoard;

const MainHeader = styled.header`
  display: flex;
  justify-content: center;
  height: 70px;
  border-bottom: 1px solid gray;
`;

const MainTitle = styled.span`
  line-height: 70px;
  font-size: 1.5rem;
  font-weight: 300;
`;

const KanbanContainer = styled.span`
  display: flex;
  justify-content: center;
  margin: 50px 0 20px 0;
`;
