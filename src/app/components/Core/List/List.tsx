import styled from 'styled-components';
import {
  layout,
  space,
  border,
  color,
  compose,
  position,
  flex,
  flexGrow,
  justifyContent,
  alignItems,
} from 'styled-system';
import { ListProps } from '../types';

import { transform, transition } from '../system/system';

export const List = styled('ul')<ListProps>`
  text-decoration: none;
  list-style: ${(props: any) => props.listStyle || 'none'};
  display: flex;
  flex-direction: ${props => (props.type !== 'horizontal' ? 'column' : 'row')};
  justify-content: ${props => props.justifyContent || 'space-around'};
  align-items: ${props => props.alignItems || 'center'};
  color: ${props => props.color};
  ${compose(
    layout,
    space,
    border,
    color,
    position,
    flex,
    flexGrow,
    justifyContent,
    alignItems,
    transition,
    transform,
  )}
`;

List.defaultProps = {
  type: 'vertical',
};
