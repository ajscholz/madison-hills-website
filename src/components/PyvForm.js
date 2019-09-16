import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useStaticQuery, graphql } from 'gatsby';
import SpinnerIcon from './SpinnerIcon';
import DatePicker from 'react-datepicker';
import getDay from 'date-fns/getDay';
import subDays from 'date-fns/subDays';

import 'react-datepicker/dist/react-datepicker.css';

import { FaRegCheckCircle, FaRegTimesCircle, FaCalendar } from 'react-icons/fa';
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

  const isSunday = date => {
    const day = getDay(date);
    return day === 0;
  };

  const CustomDatePicker = ({ value, onChange }) => {
    return (
      <DatePicker
        selected={value}
        onChange={date => onChange('date', date)}
        filterDate={isSunday}
        minDate={subDays(new Date(), 0)}
        placeholderText="Select a Sunday"
        style={{ marginTop: '21.28px' }}
      />
    );
  };

  return (
    <Formik
      initialValues={{
        name: 'andrew',
        email: 'andrew@citynorth.chuerch',
        date: new Date(),
        kids: false,
        contact: false,
        // name: null,
        // email: null,
        // date: null,
        // kids: null,
        // contact: null,
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
          alert(values);
          // const response = await fetch('/.netlify/functions/contact', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({
          //     ...values,
          //     siteEmail: siteEmail,
          //   }),
          // });
          // const data = await response.json();
          // if (response.ok) {
          //   setAccepted(true);
          // } else {
          //   setAccepted(false);
          //   throw data.msg;
          // }
        } catch (err) {
          console.log(err);
        }
        setSubmitted(true);
        // setTimeout(() => {
        //   if (accepted) resetForm();
        //   setSubmitting(false);
        // }, 2000);
        // setTimeout(() => {
        //   setSubmitted(false);
        // }, 5000);
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
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
          <FieldContainer style={{ display: 'flex' }}>
            <h4>What date would you like to visit?</h4>
            <Field
              name="date"
              component={CustomDatePicker}
              onChange={setFieldValue}
              value={values.date}
            />{' '}
            <FaCalendar />
          </FieldContainer>
          <FieldContainer>
            <h4>
              Tell us a bit about your family... Do you have children in 5th
              grade or younger?
            </h4>
            <Radio type="radio" name="kids" value={true} />
            Yes
            <Radio type="radio" name="kids" value={false} />
            No
            <StyledErrorMessage name="message" component="div" />
          </FieldContainer>
          <FieldContainer>
            <h4>Would you like a pastor to reach out to you personally?</h4>
            <Radio type="radio" name="contact" value={true} />
            Yes
            <Radio type="radio" name="contact" value={false} />
            No
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
  & > h4 {
    margin-bottom: 0.5rem;
  }
  & .react-datepicker-wrapper {
    margin-top: 21px;
  }
  & .react-datepicker__day--selected {
    background-color: var(--primaryDark);
  }
  & .react-datepicker {
    box-shadow: var(--shadow3);
    .react-datepicker__header {
      border-bottom: 1px solid var(--primary);
    }
  }
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

const Radio = styled(Field)`
  margin-right: 0.5rem;
  &:not(:first-of-type) {
    margin-left: 2rem;
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
  margin-top: 2rem;
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
