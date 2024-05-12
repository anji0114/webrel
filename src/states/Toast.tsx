'use client';
import * as RadixToast from '@radix-ui/react-toast';
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { TToastProps, Toast } from '@/components/ui/Toast';

type TToastPrams = Omit<TToastProps, 'open' | 'setOpen'>;

const ToastContext = createContext<(params: TToastPrams) => void>(() => null);

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toast, setToast] = useState<TToastPrams>({ children: '' });
  const [toastState, setToastState] = useState(false);

  const openToast = (params: TToastPrams) => {
    setToastState(false);

    setTimeout(() => {
      setToastState(true);
      setToast({
        children: params.children,
        type: params.type,
        duration: params.duration,
      });
    }, 100);
  };

  return (
    <ToastContext.Provider value={openToast}>
      <RadixToast.Provider duration={5000}>
        {children}
        <Toast
          open={toastState}
          setOpen={setToastState}
          type={toast.type}
          duration={toast.duration}
        >
          {toast.children}
        </Toast>
        <RadixToast.Viewport />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
