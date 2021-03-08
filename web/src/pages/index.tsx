import { withUrqlClient } from 'next-urql';
import NavBar from 'components/NavBar';
import { createUrqlClient } from 'utils/createUrqlClient';

const Index = () => (
  <div>
    <NavBar />
  </div>
);

export default withUrqlClient(createUrqlClient)(Index);
