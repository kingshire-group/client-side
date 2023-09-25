import styled from 'styled-components';
import {
  color,
  compose,
  fontSize,
  fontStyle,
  fontWeight,
  layout,
  space,
  typography,
  variant,
  border,
  alignSelf,
  justifySelf,
  position,
  system,
} from 'styled-system';
import { theme } from 'styles/theme/themes';
import { TextProps } from '../types';
import { cursor } from '../system/system';

const variants = {
  h1: {
    fontWeight: 'bold',
    lineHeight: 'heading',
    fontSize: theme.headings.h1,
  },
  h2: {
    fontWeight: 'bold',
    lineHeight: 'heading',
    fontSize: theme.headings.h2,
  },
  h3: {
    fontWeight: 'bold',
    lineHeight: 'heading',
    fontSize: theme.headings.h3,
  },
  h4: {
    fontWeight: 'bold',
    lineHeight: 'heading',
    fontSize: theme.headings.h4,
  },
  h5: {
    fontWeight: 'bold',
    lineHeight: 'heading',
    fontSize: theme.headings.h5,
  },
  h6: {
    fontWeight: 'bold',
    lineHeight: 'heading',
    fontSize: theme.headings.h6,
  },
};

export const Typography = styled('p')<TextProps>`
  font-family: 'DefaultFont';
  min-width: 0;
  margin: ${props => props.margin || theme.spaces[1]};
  color: ${props => props.color};
  ${system({
    textOverflow: true,
  })}
  ${compose(
    color,
    typography,
    layout,
    space,
    fontSize,
    fontStyle,
    fontWeight,
    position,
    border,
    alignSelf,
    justifySelf,
    position,
    cursor,
    variant({
      variants: {
        base: {
          fontSize: theme.fontSizes[7],
          fontWeight: 'normal',
        },
        ellipsis: {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
        ...variants,
      },
    }),
  )}
  ${system({
    cursor: true,
  })}
`;

Typography.defaultProps = {
  color: theme.colors.grey[700],
};
