import styled from 'styled-components';

const StateDropdown = ({ setStateDrop }) => {
  const handleStateSelect = (event) => {
    const currentTarget = event.target;
    if (currentTarget.localName === 'li') {
      const options = document.querySelectorAll('.taskStateOption');
      options.forEach((option) => {
        option.style = 'background-color: white';
      });
      currentTarget.style = 'background-color: #70bbf7';
      setStateDrop(currentTarget.innerText);
    }
  };

  return (
    <DropdownContainer onClick={handleStateSelect}>
      <OptionSelectBox className="taskStateOption">할 일</OptionSelectBox>
      <OptionSelectBox className="taskStateOption">진행 중</OptionSelectBox>
      <OptionSelectBox className="taskStateOption">완료</OptionSelectBox>
    </DropdownContainer>
  );
};

export default StateDropdown;

const DropdownContainer = styled.ul`
  width: 30%;
  margin: 0;
  background-color: white;
  list-style: none;
  padding: 0;
`;

const OptionSelectBox = styled.li`
  width: 100%;
  background-color: white;
  border: 1px solid grey;
  padding: 5px 0px;
`;
