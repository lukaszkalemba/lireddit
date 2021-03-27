import { Formik, Form } from 'formik';
import { Box, Button } from '@chakra-ui/react';
import Wrapper from 'components/Wrapper';
import InputField from 'components/InputField';

const CreatePost = () => {
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
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
    </Wrapper>
  );
};

export default CreatePost;
