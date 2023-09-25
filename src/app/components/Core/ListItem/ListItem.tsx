import styled from 'styled-components';
import {
  layout,
  space,
  typography,
  border,
  color,
  compose,
  position,
  variant,
  fontSize,
  fontStyle,
  fontWeight,
  alignSelf,
  justifySelf,
} from 'styled-system';
import { theme } from 'styles/theme/themes';
import { ListItemsProps } from '../types';
import { Typography } from '../Typography/Typography';

export const ListItem = styled(Typography)<ListItemsProps>`
  color: ${props => props.color || 'inherite'};
  cursor: pointer;
  font-family: ${props => props.fontFamily || theme.fonts.poppins};
  font-weight: ${props => props.fontWeight || theme.fontWeights[5]};
  margin: ${props => props.margin || theme.spaces[1]}
    ${compose(
      color,
      typography,
      layout,
      space,
      fontSize,
      fontStyle,
      fontWeight,
      border,
      alignSelf,
      justifySelf,
      position,
      variant({
        variants: {},
      }),
    )};
`;
