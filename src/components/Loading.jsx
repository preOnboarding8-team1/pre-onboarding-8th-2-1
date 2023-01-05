import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingComponent>
      <LoadingC>
        <Spinner />
      </LoadingC>
    </LoadingComponent>
  );
};

const LoadingComponent = styled.div`
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    25% {
      border-right-color: #3e7ebe;
    }
    50% {
      border-bottom-color: #3e7ebe;
    }
    75% {
      border-left-color: #3e7ebe;
    }
    to {
      border-top-color: #3e7ebe;
      transform: rotate(360deg);
    }
  }
`;

const LoadingC = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Spinner = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: #3e7ebe;
  animation: spinner 1.2s ease infinite;
`;
export default Loading;
