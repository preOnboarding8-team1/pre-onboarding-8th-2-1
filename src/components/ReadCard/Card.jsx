import styled from 'styled-components';
import { useState } from 'react';
import UpdateForm from '../UpdateCard/UpdateForm';
import CardDelete from '../DeleteCard/CardDelete';

const Card = ({ card }) => {
  const [updateModal, setUpdateModal] = useState(false);

  const handleCardUpdate = (event) => {
    if (event.target.localName === 'button') {
      return;
    }
    setUpdateModal(true);
  };

  return (
    <CardContainer data-id={card.id} onClick={handleCardUpdate}>
      <CardContentBox>
        <CardCategory>{card.state}</CardCategory>
        <CardContent>{card.title}</CardContent>
        <CardDelete />
      </CardContentBox>
      {updateModal && <UpdateForm card={card} setUpdateModal={setUpdateModal} />}
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
