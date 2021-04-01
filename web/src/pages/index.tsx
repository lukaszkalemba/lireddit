import { useState } from 'react';
import NextLink from 'next/link';
import { Link, Stack, Box, Heading, Text, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from 'helpers/createUrqlClient';
import { useDeletePostMutation, usePostsQuery } from 'generated/graphql';
import Layout from 'components/Layout';
import UpdootSection from 'components/UpdootSection';

const Index = () => {
  const [variables, setVariables] = useState<{
    limit: number;
    cursor: string | null;
  }>({ limit: 10, cursor: null });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  const [, deletePost] = useDeletePostMutation();

  if (!fetching && !data) {
    return <div>You got no posts for some reason</div>;
  }

  return (
    <Layout>
      <Flex align='center' mb='30px'>
        <Heading>Posts</Heading>

        <NextLink href='/create-post'>
          <Link ml='auto' fontWeight='semibold'>
            create post
          </Link>
        </NextLink>
      </Flex>

      <Stack spacing={8}>
        {data &&
          data.posts.posts.map((post) => {
            if (!post) {
              return null;
            }

            const { id, title, creator, textSnippet } = post;

            return (
              <Flex key={id} p={5} shadow='md' borderWidth='1px'>
                <UpdootSection post={post} />
                <Box position='relative' width='100%'>
                  <NextLink href='/post/[id]' as={`/post/${id}`}>
                    <Link>
                      <Heading width='75%' fontSize='xl'>
                        {title}
                      </Heading>
                    </Link>
                  </NextLink>
                  <Text width='75%'>Posted by {creator.username}</Text>

                  <Text mt={4}>{textSnippet}</Text>
                  <IconButton
                    position='absolute'
                    right='0'
                    top='0'
                    icon={<DeleteIcon />}
                    aria-label='Delete post'
                    onClick={async () => {
                      await deletePost({ id });
                    }}
                  />
                </Box>
              </Flex>
            );
          })}
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
