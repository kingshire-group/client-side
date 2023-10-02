import styled from 'styled-components';
import {
  color,
  compose,
  layout,
  space,
  typography,
  border,
  zIndex,
  position,
} from 'styled-system';
import { theme } from 'styles/theme/themes';
import { ButtonProps } from '../types';

export const Link = styled('a')<ButtonProps>`
  color: ${props => props.color || theme.colors.grey[600]};
  text-decoration: none;
  ${compose(color, layout, space, typography, border, zIndex, position)};
`;
