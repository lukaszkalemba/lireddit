import { FC, ReactNode } from 'react';
import Wrapper, { Variant } from 'components/Wrapper';
import NavBar from 'components/NavBar';

interface LayoutProps {
  variant?: Variant;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ variant, children }) => {
  return (
    <div>
      <NavBar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </div>
  );
};

export default Layout;
