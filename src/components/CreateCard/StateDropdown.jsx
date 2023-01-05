import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useLayoutEffect } from 'react';
import { stateDropdown } from '../../atoms/atom';

const StateDropdown = ({ card }) => {
  const [, setStateDropDown] = useRecoilState(stateDropdown);
  const handleStateSelect = (event) => {
    const currentTarget = event.target;
    if (currentTarget.localName === 'li') {
      const options = document.querySelectorAll('li');
      options.forEach((option) => {
        option.style = 'background-color: white';
      });
      currentTarget.style = 'background-color: #70bbf7';
      setStateDropDown(currentTarget.innerText);
    }
  };

  const handleStateColor = () => {
    switch (card.state) {
      case '할 일': {
        document.querySelector('.taskTodo').style = 'background-color: #70bbf7';
        break;
      }
      case '진행 중': {
        document.querySelector('.taskProgress').style = 'background-color: #70bbf7';
        break;
      }
      case '완료': {
        document.querySelector('.taskDone').style = 'background-color: #70bbf7';
        break;
      }
      default:
    }
  };

  useLayoutEffect(() => {
    card && handleStateColor();
  }, []);

  return (
    <DropdownContainer onClick={handleStateSelect}>
      <OptionSelectBox className="taskTodo">할 일</OptionSelectBox>
      <OptionSelectBox className="taskProgress">진행 중</OptionSelectBox>
      <OptionSelectBox className="taskDone">완료</OptionSelectBox>
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
  cursor: pointer;
`;

const OptionSelectBox = styled.li`
  width: 100%;
  background-color: white;
  border: 1px solid grey;
  padding: 5px 0px;
`;
