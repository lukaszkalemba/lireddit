import { FC, useState } from 'react';
import { withUrqlClient } from 'next-urql';
import { Formik, Form } from 'formik';
import { Button, Box } from '@chakra-ui/react';
import { useForgotPasswordMutation } from 'generated/graphql';
import { createUrqlClient } from 'helpers/createUrqlClient';
import Wrapper from 'components/Wrapper';
import InputField from 'components/InputField';

const ForgotPassword: FC<{}> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={async (values) => {
          await forgotPassword(values);
          setComplete(true);
        }}
      >
        {({ isSubmitting }) =>
          complete ? (
            <Box>
              if an account with that email exists, we sent you an email
            </Box>
          ) : (
            <Form>
              <InputField
                type='email'
                name='email'
                label='Email'
                placeholder='email'
              />

              <Button
                type='submit'
                colorScheme='teal'
                marginTop={5}
                width='100%'
                isLoading={isSubmitting}
              >
                Forgot password
              </Button>
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);
