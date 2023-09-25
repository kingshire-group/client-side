import { Field } from 'formik';
import styled from 'styled-components';
import {
  alignSelf,
  color,
  compose,
  justifySelf,
  layout,
  space,
  typography,
  variant,
  border,
  position,
  borderRadius,
  system,
} from 'styled-system';
import { theme } from 'styles/theme/themes';
import { tabIndex } from '../system/system';
import { InputProps } from '../types';

export const Input = styled(Field)<InputProps>`
  border-radius: ${(props: any) => props.borderRadius || theme.radii[1]};

  padding: ${props => props.padding || theme.spaces[3]};
  ::placeholder {
    font-size: ${theme.sizes[2]};
    color: ${theme.colors.grey[500]};
  }
  &:focus {
    outline: none;
  }
  font-size: ${props => props.fontSize || theme.fontSizes[4]};
  font-family: ${props => props.fontFamily || theme.fonts.nunito};
  color: ${props => props.color || theme.colors.grey[600]};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '45px'};

  ${compose(
    color,
    typography,
    space,
    alignSelf,
    justifySelf,
    layout,
    border,
    position,
    tabIndex,
    borderRadius,
    variant({
      variants: {
        outlined: {
          border: theme.borders[1],
          borderColor: theme.colors.grey[400],
        },
        filled: {
          backgroundColor: theme.colors.grey[100],
          border: 'none',
          borderRadius: theme.radii[2],
        },
      },
    }),
  )}
  ${system({
    tabIndex: true,
  })}
`;

Input.defaultProps = {
  placeholder: 'Type here',
  variant: 'filled',
};
