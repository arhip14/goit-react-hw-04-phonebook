import React from "react";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import { FormContainer } from './ContactFormStyled';

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Invalid name format')
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Invalid phone number'
      )
      .required('Phone number is required'),
  });


  const initialValues = {
    name: '',
    number: '',
  };


  const onSubmit = (values, { resetForm }) => {
    addContact({ ...values, id: Math.random().toString() });
    resetForm();
  };


  return (
    <FormContainer>
      <h2>Add Contact</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <div>
            <label>
              Name:
            </label>
            <Field type="text" name="name"></Field>
            <ErrorMessage name="name" component="div"></ErrorMessage>
          </div>
          
          <div>
            <label>
              Number:
            </label>
            <Field type="tel" name="number"></Field>
            <ErrorMessage name="number" component="div"></ErrorMessage>
          </div>
          <button type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </FormContainer>
  )
}


export default ContactForm
