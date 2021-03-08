import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { Formik, Form } from 'formik';
import { Box, Button } from '@chakra-ui/react';
import { useLoginMutation } from 'generated/graphql';
import { createUrqlClient } from 'utils/createUrqlClient';
import { toErrorMap } from 'utils/toErrorMap';
import Wrapper from 'components/Wrapper';
import InputField from 'components/InputField';

const Login = () => {
  const router = useRouter();
  const [, login] = useLoginMutation();

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const { data } = await login(values);
          if (data?.loginUser.errors) {
            setErrors(toErrorMap(data.loginUser.errors));
          } else if (data?.loginUser.user) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name='username'
              label='Username'
              placeholder='username'
            />
            <Box marginTop={3}>
              <InputField
                type='password'
                name='password'
                label='Password'
                placeholder='password'
              />
            </Box>
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
