import { FC, useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/layout';
import { PostSnippetFragment, useVoteMutation } from 'generated/graphql';

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

const UpdootSection: FC<UpdootSectionProps> = ({ post }) => {
  const [loadingState, setLoadingState] = useState<
    'updoot-loading' | 'downdoot-loading' | 'not-loading'
  >('not-loading');
  const [, vote] = useVoteMutation();

  const upvote = async () => {
    if (post.voteStatus === 1) {
      return;
    }

    setLoadingState('updoot-loading');

    await vote({
      postId: post.id,
      value: 1,
    });

    setLoadingState('not-loading');
  };

  const downvote = async () => {
    if (post.voteStatus === -1) {
      return;
    }

    setLoadingState('downdoot-loading');

    await vote({
      postId: post.id,
      value: -1,
    });

    setLoadingState('not-loading');
  };

  return (
    <Flex direction='column' justify='center' align='center' mr='18px'>
      <IconButton
        onClick={upvote}
        isLoading={loadingState === 'updoot-loading'}
        aria-label='updoot post'
        icon={<ChevronUpIcon w={5} h={5} />}
        colorScheme={post.voteStatus === 1 ? 'green' : undefined}
      />
      <Box py='3px'>{post.points}</Box>
      <IconButton
        onClick={downvote}
        isLoading={loadingState === 'downdoot-loading'}
        aria-label='downdoot post'
        icon={<ChevronDownIcon w={5} h={5} />}
        colorScheme={post.voteStatus === -1 ? 'red' : undefined}
      />
    </Flex>
  );
};

export default UpdootSection;
