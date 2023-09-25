import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Field, useField } from 'formik';
import { IFormField } from '../types';

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 1px 0px 0 rgb(31 38 135 / 37%);
  border-radius: 2rem;
  width: 80%;
  margin-block: 0.75rem;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

const Typography = styled.p`
  font-size: 6;
  color: #ec2626;
`;

function InputField({ name, ...rest }: IFormField) {
  const [field, meta] = useField(name);
  const { touched, error } = meta;
  return (
    <Fragment>
      <Field as={StyledInput} {...field} name={name} {...rest} />
      {touched && error ? <Typography>{error}</Typography> : null}
    </Fragment>
  );
}

export default InputField;
