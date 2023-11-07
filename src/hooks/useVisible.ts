import { useState } from 'react';

type TUseVisibleReturn = {
  visible: boolean;
  setVisibleTrue: () => void;
  setVisibleFalse: () => void;
  toggle: () => void;
};

export const useVisible = (defaultValue?: boolean): TUseVisibleReturn => {
  const [visible, setVisible] = useState(defaultValue ? defaultValue : false);

  const setVisibleTrue = () => setVisible(true);
  const setVisibleFalse = () => setVisible(false);

  const toggle = () => {
    setVisible((prevState) => !prevState);
  };

  return { visible, setVisibleTrue, setVisibleFalse, toggle };
};
