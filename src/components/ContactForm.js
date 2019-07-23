import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useStaticQuery, graphql } from 'gatsby';

const emailData = graphql`
  {
    site {
      siteMetadata {
        siteEmail: email
      }
    }
  }
`;

export default () => {
  const {
    site: {
      siteMetadata: { siteEmail },
    },
  } = useStaticQuery(emailData);
  return (
    <Formik
      initialValues={{
        name: 'andrew',
        email: 'andrew@citynorth.chuerch',
        message: `let's get this going`,
      }}
      validate={values => {
        let errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.message) {
          errors.message = 'Required';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await fetch('/.netlify/functions/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...values,
              siteEmail: siteEmail,
            }),
          });
          const data = await response.json();
          if (response.ok) {
            alert(data.msg);
            resetForm();
          } else {
            throw data.msg;
          }
        } catch (err) {
          alert(err);
          console.log(err);
        }
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <FieldContainer>
            <StyledField type="name" name="name" placeholder="Name" />
            <StyledErrorMessage name="name" component="div" />
          </FieldContainer>
          <FieldContainer>
            <StyledField type="email" name="email" placeholder="Email" />
            <StyledErrorMessage name="email" component="div" />
          </FieldContainer>
          <FieldContainer>
            <StyledField
              name="message"
              component="textarea"
              placeholder="Message..."
              rows="5"
            />
            <StyledErrorMessage name="message" component="div" />
          </FieldContainer>
          <StyledButton type="submit" disabled={isSubmitting}>
            Submit
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 600px;
`;

const FieldContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 0.25rem;
  background: none;
  border: none;
  border-bottom: 1px solid var(--primary);
  margin-bottom: 1rem;
  font-size: 1rem;
  resize: none;
  outline: none;
  color: var(--black);
  transition: var(--mainTransition);
  :focus {
    border-bottom: 1px solid var(--primaryDark);
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.8rem;
  background: var(--danger);
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  color: var(--white);
`;

const StyledButton = styled.button`
  background: var(--primary);
  color: var(--white);
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  transition: var(--mainTransition);
  cursor: pointer;
  &:hover {
    background: var(--primaryDark);
  }
`;
