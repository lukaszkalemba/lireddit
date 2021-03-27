import NextLink from 'next/link';
import { useMeQuery, useLogoutMutation } from 'generated/graphql';
import { Flex, Box, Link, Button } from '@chakra-ui/react';
import { isServer } from 'helpers/isServer';

const NavBar = () => {
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();

  let body = null;

  if (fetching) {
    body = <div />;
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href='/login'>
          <Link color='white' mr='6'>
            login
          </Link>
        </NextLink>
        <NextLink href='/register'>
          <Link color='white'>register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box mr='6' color='white'>
          {data.me.username}
        </Box>
        <Button
          variant='link'
          color='white'
          onClick={() => logout()}
          isLoading={logoutFetching}
        >
          logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex position='sticky' top='0' zIndex='1' bg='teal' px='10' py='3'>
      <Box ml='auto'>{body}</Box>
    </Flex>
  );
};

export default NavBar;
