import React from 'react';
import styled from 'styled-components';

const AddIssueInput = ({ type, readonly }) => {
  return <Input type={type} readOnly={readonly} />;
};

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #bdbdbd;
  outline: none;
  padding: 10px;
`;

export default AddIssueInput;
