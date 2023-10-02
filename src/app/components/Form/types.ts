import { ReactElement } from 'react';

export interface IFormField {
  name: string;
  placeholder?: string;
  type?: string;
  valid?: boolean;
  variant?: 'outlined' | 'filled';
  accessoryRight?: (props: any) => ReactElement;
}

export interface IFormControlProps extends IFormField {
  control: string;
}
