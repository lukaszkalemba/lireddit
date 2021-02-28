import { Formik, Form, Field } from 'formik';
import Wrapper from 'components/Wrapper';

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {}}
      >
        {() => (
          <Wrapper>
            <Form>
              <div className='flex flex-col'>
                <label htmlFor='username'>Username</label>
                <Field
                  id='username'
                  name='username'
                  className='p-2 border-2 border-gray-400 mb-4'
                />
                <label htmlFor='password'>password</label>
                <Field
                  id='password'
                  name='password'
                  className='p-2 border-2 border-gray-400 mb-4'
                />
                <button type='submit' className='bg-black text-white p-2 my-5'>
                  Submit
                </button>
              </div>
            </Form>
          </Wrapper>
        )}
      </Formik>
    </div>
  );
};

export default Register;
