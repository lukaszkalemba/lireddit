import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { Button, Box } from '@chakra-ui/react';
import { toErrorMap } from 'helpers/toErrorMap';
import Wrapper from 'components/Wrapper';
import InputField from 'components/InputField';
import { useChangePasswordMutation } from 'generated/graphql';
import { createUrqlClient } from 'helpers/createUrqlClient';
import { withUrqlClient } from 'next-urql';

interface ChangePasswordProps {
  token?: string;
}

const ChangePassword: NextPage<ChangePasswordProps> = ({ token }) => {
  const router = useRouter();
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState('');

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ newPassword: '' }}
        onSubmit={async ({ newPassword }, { setErrors }) => {
          if (token) {
            const { data } = await changePassword({ newPassword, token });

            if (data?.changePassword.errors) {
              const errorMap = toErrorMap(data.changePassword.errors);

              if ('token' in errorMap) {
                setTokenError(errorMap.token);
              }

              setErrors(errorMap);
            } else if (data?.changePassword.user) {
              router.push('/');
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name='newPassword'
              label='New Password'
              placeholder='new password'
              type='password'
            />
            {tokenError && <Box color='red'>{tokenError}</Box>}
            <Button
              type='submit'
              colorScheme='teal'
              marginTop={5}
              width='100%'
              isLoading={isSubmitting}
            >
              Reset password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default withUrqlClient(createUrqlClient)(ChangePassword);
