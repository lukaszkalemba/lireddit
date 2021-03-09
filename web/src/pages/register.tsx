import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { Formik, Form } from 'formik';
import { Box, Button } from '@chakra-ui/react';
import { useRegisterMutation } from 'generated/graphql';
import { createUrqlClient } from 'helpers/createUrqlClient';
import { toErrorMap } from 'helpers/toErrorMap';
import Wrapper from 'components/Wrapper';
import InputField from 'components/InputField';

const Register = () => {
  const router = useRouter();
  const [, register] = useRegisterMutation();

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const { data } = await register(values);

          if (data?.registerUser.errors) {
            setErrors(toErrorMap(data.registerUser.errors));
          } else if (data?.registerUser.user) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name='email' label='Email' placeholder='email' />
            <Box marginTop={3}>
              <InputField
                name='username'
                label='Username'
                placeholder='username'
              />
            </Box>
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
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(Register);
