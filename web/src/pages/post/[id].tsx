import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import { Heading, Box } from '@chakra-ui/layout';
import { createUrqlClient } from 'helpers/createUrqlClient';
import { usePostQuery } from 'generated/graphql';
import Layout from 'components/Layout';

const Post = () => {
  const router = useRouter();

  const intId = typeof router.query.id === 'string' ? +router.query.id : -1;

  const [{ data, error, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });

  if (fetching) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div>{error.message}</div>
      </Layout>
    );
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading>{data.post.title}</Heading>
      <Box pt='15px'>{data.post.text}</Box>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
