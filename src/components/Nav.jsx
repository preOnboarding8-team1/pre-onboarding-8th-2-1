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
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
  }
`;

const NavItem = styled.div`
  padding: 0 20px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export default Nav;
