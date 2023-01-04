import styled from 'styled-components';
import { useState } from 'react';
import AddForm from './AddForm';

const TaskAdd = () => {
  const [openAddForm, setOpenAddForm] = useState(false);

  const handleAddForm = () => {
    setOpenAddForm(true);
  };

  return (
    <AddBtnContainer>
      <TaskAddBtn onClick={handleAddForm}>+ 이슈 추가</TaskAddBtn>
      {openAddForm && <AddForm setOpenAddForm={setOpenAddForm} />}
    </AddBtnContainer>
  );
};

export default TaskAdd;

const AddBtnContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const TaskAddBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  color: grey;
  cursor: pointer;
`;
