import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useStaticQuery, graphql } from 'gatsby';
import SpinnerIcon from './SpinnerIcon';

import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import Button from './Button';

const emailData = graphql`
  {
    site {
      siteMetadata {
        siteEmail: email
      }
    }
  }
`;

export default ({ light }) => {
  const [submitted, setSubmitted] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const {
    site: {
      siteMetadata: { siteEmail },
    },
  } = useStaticQuery(emailData);
  return (
    <Formik
      initialValues={{
        // name: 'andrew',
        // email: 'andrew@citynorth.chuerch',
        // message: `let's get this going`,
        name: '',
        email: '',
        message: ``,
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
              real:
                typeof window === 'undefined'
                  ? false
                  : window.localStorage.real === true
                  ? true
                  : false,
            }),
          });
          const data = await response.json();
          if (response.ok) {
            setAccepted(true);
          } else {
            setAccepted(false);
            throw data.msg;
          }
        } catch (err) {
          console.log(err);
        }
        setSubmitted(true);
        setTimeout(() => {
          if (accepted) resetForm();
          setSubmitting(false);
        }, 2000);
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <FieldContainer>
            <StyledField
              type="name"
              name="name"
              placeholder="Name"
              light={light}
            />
            <StyledErrorMessage name="name" component="div" />
          </FieldContainer>
          <FieldContainer>
            <StyledField
              type="email"
              name="email"
              placeholder="Email"
              light={light}
            />
            <StyledErrorMessage name="email" component="div" />
          </FieldContainer>
          <FieldContainer>
            <StyledField
              name="message"
              component="textarea"
              placeholder="Message..."
              rows="5"
              light={light}
            />
            <StyledErrorMessage name="message" component="div" />
          </FieldContainer>
          <StyledButton type="submit" disabled={isSubmitting}>
            {isSubmitting && <SpinnerIcon margin="0 1rem 0 0" top="2px" />}
            {isSubmitting ? `Submitting` : 'Submit'}
          </StyledButton>
          {submitted && (
            <SubmitMessage light={light}>
              <Icon
                as={accepted ? FaRegCheckCircle : FaRegTimesCircle}
                accepted={accepted}
              />
              <h4>
                {accepted
                  ? 'Message submitted successfully!'
                  : 'Message submission failed. Please try again.'}
              </h4>
            </SubmitMessage>
          )}
        </StyledForm>
      )}
    </Formik>
  );
};

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 600px;
  position: relative;
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
  color: ${props => (props.light ? 'var(--white)' : 'var(--black)')};
  transition: var(--mainTransition);
  :focus {
    border-bottom: 1px solid
      ${props => (props.light ? 'var(--primaryLight)' : 'var(--primaryDark)')};
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  color: var(--danger);
`;

const StyledButton = styled(Button)`
  width: 100%;
  /* &:not(:disabled):hover {
    background: var(--primaryDark);
  } */
  &:disabled {
    opacity: 0.9;
    cursor: default;
  }
`;

const SubmitMessage = styled.div`
  position: absolute;
  top: 0;
  left: -10%;
  z-index: 500;
  height: 150%;
  width: 120%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  opacity: 0;
  background: ${props => (props.light ? 'var(--black)' : 'var(--white)')};
  animation: fade 5s;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Icon = styled.svg`
  display: block;
  font-size: 10rem;
  color: ${props => (props.accepted ? 'var(--primary)' : 'tomato')};
`;
