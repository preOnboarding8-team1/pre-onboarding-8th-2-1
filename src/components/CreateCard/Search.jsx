import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { managerSelect } from '../../atoms/atom';

const Search = () => {
  const [currentManager, setCurrentManager] = useRecoilState(managerSelect);
  const MANAGER = ['조정택', '곽현', '김민상', '박혜정', '오태준', '박경태', '이성헌', '최승수'];
  const managerOption = [];

  for (let i = 0; i < MANAGER.length; i++) {
    if (MANAGER[i].indexOf(currentManager) === 0) {
      managerOption.push(MANAGER[i]);
    }
  }

  const handleOptionSelected = (event) => {
    setCurrentManager(event.target.textContent);
  };

  return (
    <DropdownContainer>
      {managerOption.map((data) => (
        <OptionSelectBox key={MANAGER.indexOf(data)} onClick={handleOptionSelected}>
          {data}
        </OptionSelectBox>
      ))}
    </DropdownContainer>
  );
};

export default Search;

const DropdownContainer = styled.section`
  width: 30%;
  background-color: white;
`;

const OptionSelectBox = styled.button`
  width: 100%;
  background-color: white;
  border: 1px solid grey;
  border-bottom: 0;
  padding: 5px 0px;
  :last-child {
    border: 1px solid grey;
  }
`;
