import { useState } from 'react';
import NextLink from 'next/link';
import { Link, Stack, Box, Heading, Text, Flex } from '@chakra-ui/layout';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from 'helpers/createUrqlClient';
import { usePostsQuery } from 'generated/graphql';
import Layout from 'components/Layout';
import { Button } from '@chakra-ui/button';

const Index = () => {
  const [variables, setVariables] = useState<{
    limit: number;
    cursor: string | null;
  }>({ limit: 10, cursor: null });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  if (!fetching && !data) {
    return <div>You got no posts for some reason</div>;
  }

  return (
    <Layout>
      <Flex align='center' mb='30px'>
        <Heading>LiReddit</Heading>
        <NextLink href='/create-post'>
          <Link ml='auto'>create post</Link>
        </NextLink>
      </Flex>

      <Stack spacing={8}>
        {data &&
          data.posts.posts.map(({ id, title, textSnippet, creator }) => (
            <Box key={id} p={5} shadow='md' borderWidth='1px'>
              <Heading fontSize='xl'>{title}</Heading>
              <Text>Posted by {creator.username}</Text>
              <Text mt={4}>{textSnippet}</Text>
            </Box>
          ))}
      </Stack>

      {data && data.posts.hasMore && (
        <Flex>
          <Button
            onClick={() => {
              setVariables({
                limit: variables.limit,
                cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
              });
            }}
            isLoading={fetching}
            m='auto'
            my={8}
            bg='teal'
            color='white'
          >
            Load more
          </Button>
        </Flex>
      )}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
