import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from 'helpers/createUrqlClient';
import { usePostsQuery } from 'generated/graphql';
import Layout from 'components/Layout';

const Index = () => {
  const [{ data }] = usePostsQuery();

  return (
    <Layout>
      {data && data.posts.map(({ id, title }) => <div key={id}>{title}</div>)}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
