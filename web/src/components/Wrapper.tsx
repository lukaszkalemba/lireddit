import React, { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface WrapperProps {
  variant?: 'small' | 'regular';
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ variant = 'regular', children }) => {
  return (
    <Box
      marginTop={50}
      marginX='auto'
      maxW={variant === 'regular' ? '650px' : '400px'}
      w='100%'
    >
      {children}
    </Box>
  );
};

export default Wrapper;
