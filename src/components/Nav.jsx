import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const handleMove = () => navigate('/');
  return (
    <NavComponent onClick={handleMove}>
      <NavItem>Home</NavItem>
    </NavComponent>
  );
};

const NavComponent = styled.div`
  padding: 10px 0;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #d9d9d9;
`;

const NavItem = styled.div`
  padding: 0 10px;
  cursor: pointer;
`;

export default Nav;
