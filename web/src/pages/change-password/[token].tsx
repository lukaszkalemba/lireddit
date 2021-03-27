import { useState } from 'react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { Formik, Form } from 'formik';
import { Box, Button, Link, Flex } from '@chakra-ui/react';
import { useChangePasswordMutation } from 'generated/graphql';
import { toErrorMap } from 'helpers/toErrorMap';
import { createUrqlClient } from 'helpers/createUrqlClient';
import Wrapper from 'components/Wrapper';
import InputField from 'components/InputField';

const ChangePassword: NextPage = () => {
  const router = useRouter();
  const [tokenError, setTokenError] = useState('');

  const [, changePassword] = useChangePasswordMutation();

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ newPassword: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await changePassword({
            newPassword: values.newPassword,
            token:
              typeof router.query.token === 'string' ? router.query.token : '',
          });
          if (response.data?.changePassword.errors) {
            const errorMap = toErrorMap(response.data.changePassword.errors);
            if ('token' in errorMap) {
              setTokenError(errorMap.token);
            }
            setErrors(errorMap);
          } else if (response.data?.changePassword.user) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name='newPassword'
              placeholder='new password'
              label='New Password'
              type='password'
            />
            {tokenError && (
              <Flex>
                <Box mr={2} style={{ color: 'red' }}>
                  {tokenError}
                </Box>
                <NextLink href='/forgot-password'>
                  <Link>click here to get a new one</Link>
                </NextLink>
              </Flex>
            )}
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

export default withUrqlClient(createUrqlClient)(ChangePassword);
