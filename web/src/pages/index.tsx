import NextLink from 'next/link';
import { Link, Stack, Box, Heading, Text } from '@chakra-ui/layout';
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
      <Stack spacing={8}>
        {data &&
          data.posts.map(({ id, title, text }) => (
            <Box key={id} p={5} shadow='md' borderWidth='1px'>
              <Heading fontSize='xl'>{title}</Heading>
              <Text mt={4}>{text}</Text>
            </Box>
          ))}
      </Stack>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
