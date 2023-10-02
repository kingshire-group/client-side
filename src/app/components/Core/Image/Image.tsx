import styled from 'styled-components';
import {
  space,
  layout,
  justifySelf,
  alignSelf,
  compose,
  zIndex,
  size,
  position,
  width,
  border,
} from 'styled-system';
import { theme } from 'styles/theme/themes';
import { ImageProps } from '../types';

export const Image = styled('img')<ImageProps>`
  object-fit: cover;
  border-radius: ${(props: any) => props.borderRadius || theme.radii[1]};
  width: ${props => props.width || theme.sizes[47]};

  ${compose(
    space,
    width,
    layout,
    justifySelf,
    alignSelf,
    zIndex,
    position,
    size,
    border,
  )}
`;
