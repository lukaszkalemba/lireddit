import { FC } from 'react';
import { Formik, Form } from 'formik';

interface registerProps {}

const register: FC<registerProps> = ({}) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => <Form></Form>}
    </Formik>
  );
};

export default register;
