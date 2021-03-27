import React, { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

export type Variant = 'small' | 'regular';

interface WrapperProps {
  variant?: Variant;
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ variant = 'regular', children }) => {
  return (
    <Box
      marginX='auto'
      maxW={variant === 'regular' ? '700px' : '450px'}
      w='100%'
      padding='30px'
    >
      {children}
    </Box>
  );
};

export default Wrapper;
