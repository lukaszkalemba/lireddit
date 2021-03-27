import NextLink from 'next/link';
import { Link } from '@chakra-ui/layout';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from 'helpers/createUrqlClient';
import { usePostsQuery } from 'generated/graphql';
import Layout from 'components/Layout';

const Index = () => {
  const [{ data }] = usePostsQuery({
    variables: { limit: 10 },
  });

  return (
    <Layout>
      <NextLink href='/create-post'>
        <Link>create post</Link>
      </NextLink>
      {data && data.posts.map(({ id, title }) => <div key={id}>{title}</div>)}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
