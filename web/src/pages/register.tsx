import { useMutation } from 'urql';
import { Formik, Form } from 'formik';
import { Box, Button } from '@chakra-ui/react';
import Wrapper from 'components/Wrapper';
import InputField from 'components/InputField';

const REGISTER_MUTATION = `
  mutation Register($username: String!, $password: String!) {
    registerUser(options: { username: $username, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`;

const register = () => {
  const [, register] = useMutation(REGISTER_MUTATION);

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => register(values)}
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
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default register;
