import styled from 'styled-components';
import {
  color,
  compose,
  flex,
  flexbox,
  flexDirection,
  flexGrow,
  justifyContent,
  layout,
  space,
  alignItems,
  typography,
  HeightProps,
  border,
  backgroundImage,
  position,
  backgroundPosition,
  backgroundSize,
  system,
  boxShadow,
  background,
} from 'styled-system';
import {
  transform,
  transition,
  transformOrigin,
  cursor,
} from '../system/system';
import { BoxProps, HoverContainerProps } from '../types';

export const Box = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
    transition: 'all 0.4s ease-in-out',
  },
  compose(
    color,
    backgroundImage,
    border,
    layout,
    space,
    flex,
    flexbox,
    flexDirection,
    flexGrow,
    justifyContent,
    alignItems,
    typography,
    position,
    backgroundPosition,
    backgroundSize,
    boxShadow,
    transition,
    transform,
    transformOrigin,
    background,
    cursor,
  ),
  system({
    transform: true,
    transition: true,
    transformOrigin: true,
    cursor: true,
  }),
);

export const Flex = styled(Box)({
  display: 'flex',
});

export const Container = styled(Flex)`
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  height: ${(props: HeightProps) => props.height || '100%'};
`;

export const HoverContainer = styled(Flex)<HoverContainerProps>`
  opacity: 1;
  &:hover {
    opacity: ${props => (props.opacity ? props.opacity : 1)};
    transform: ${props => (props.scale ? 'scale(1.05)' : 'scale(1)')};
  }
  cursor: pointer;
`;

export const DesktopOnly = styled(Flex)`
  @media screen and (max-width: 601px) {
    display: none;
  }
`;

export const MobileOnly = styled(Flex)`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
