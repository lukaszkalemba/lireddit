import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { Box, Button } from '@chakra-ui/react';
import { createUrqlClient } from 'helpers/createUrqlClient';
import { useCreatePostMutation } from 'generated/graphql';
import { useIsAuth } from 'hooks/useIsAuth';
import Layout from 'components/Layout';
import InputField from 'components/InputField';

const CreatePost = () => {
  const router = useRouter();
  const [, createPost] = useCreatePostMutation();

  useIsAuth();

  return (
    <Layout variant='small'>
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={async (values) => {
          const { error } = await createPost({ input: values });

          if (!error) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name='title' label='Title' placeholder='title' />
            <Box marginTop={3}>
              <InputField
                textarea
                name='text'
                label='Body'
                placeholder='text...'
              />
            </Box>
            <Button
              type='submit'
              colorScheme='teal'
              marginTop={5}
              width='100%'
              isLoading={isSubmitting}
            >
              Create post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
