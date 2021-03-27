import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { withUrqlClient } from 'next-urql';
import { Formik, Form, FormikHelpers } from 'formik';
import { Box, Button, Flex, Link } from '@chakra-ui/react';
import { useLoginMutation } from 'generated/graphql';
import { createUrqlClient } from 'helpers/createUrqlClient';
import { toErrorMap } from 'helpers/toErrorMap';
import Wrapper from 'components/Wrapper';
import InputField from 'components/InputField';

interface Values {
  usernameOrEmail: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [, login] = useLoginMutation();

  const handleSubmit = async (
    values: Values,
    { setErrors }: FormikHelpers<Values>
  ) => {
    const { data } = await login(values);

    if (data?.loginUser.errors) {
      setErrors(toErrorMap(data.loginUser.errors));
      return;
    }

    typeof router.query.next === 'string'
      ? router.push(router.query.next)
      : router.push('/');
  };

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ usernameOrEmail: '', password: '' }}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name='usernameOrEmail'
              label='Username or Email'
              placeholder='username or email'
            />
            <Box marginTop={3}>
              <InputField
                type='password'
                name='password'
                label='Password'
                placeholder='password'
              />
            </Box>
            <Flex>
              <NextLink href='/forgot-password'>
                <Link ml='auto' mt='1'>
                  forgot password?
                </Link>
              </NextLink>
            </Flex>
            <Button
              type='submit'
              colorScheme='teal'
              marginTop={5}
              width='100%'
              isLoading={isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
