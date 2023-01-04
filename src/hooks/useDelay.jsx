import { useState } from 'react';

export const useDelay = (func) => {
  const [isFlag, setIsFlag] = useState(true);

  const delay = (v) => {
    if (isFlag) {
      setIsFlag(false);
      func(v);
      setTimeout(() => setIsFlag(true), 500);
    }
  };
  return delay;
};
