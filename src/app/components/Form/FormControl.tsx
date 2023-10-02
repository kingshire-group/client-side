import React from 'react';
import { Input } from '../Core';
import { IFormControlProps } from './types';

function FormControl({
  control,
  name,
  placeholder,
  valid,
  type,
  variant,
}: IFormControlProps) {
  switch (control) {
    case 'input':
      return (
        <Input
          name={name}
          placeholder={placeholder}
          type={type}
          valid={valid}
          variant={variant}
          width={['250px', '250px', '300px']}
        />
      );
    default:
      return null;
  }
}
export default FormControl;
