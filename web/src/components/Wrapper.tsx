import { FC, ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className='mt-20 mx-auto max-w-xl'>{children}</div>;
};

export default Wrapper;
