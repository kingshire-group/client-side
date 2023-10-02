import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {
  color,
  compose,
  layout,
  space,
  typography,
  variant,
  PaddingProps,
  FontSizeProps,
  border,
  BackgroundColorProps,
  zIndex,
  ColorProps,
  position,
  BorderProps,
} from 'styled-system';
import { theme, Theme } from 'styles/theme/themes';
import { ButtonProps } from '../types';

export const BaseButton = styled('button')<ButtonProps>`
  border: ${props => props.border || 'none'};
  max-height: ${props => props.maxHeight || props.height};
  height: ${props => props.height || theme.sizes[5]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props: PaddingProps) =>
    props.padding || props.p || theme.spaces[2]};
  margin: 3;
  min-width: ${theme.sizes[18]};
  font-size: ${(props: FontSizeProps) => props.fontSize || theme.fontSizes[5]};
  font-family: 'Poppins-Medium';
  transition: all 0.3s ease;
  outline: none;
  :hover {
    opacity: 0.7;
  }
  :focus {
    outline: none;
    -moz-outline-style: none;
  }
  &:disabled {
    color: white;
    background-color: ${theme.colors.grey[300]};
    cursor: not-allowed;
  }
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: ${props => props.color || theme.colors.white[0]};

  ${compose(
    color,
    layout,
    space,
    typography,
    border,
    zIndex,
    position,
    variant({
      variants: {
        primary: {
          // borderBottomRightRadius: [3],
          // borderTopLeftRadius: [3],
          borderRadius: (props: BorderProps) => props.borderRadius || [1],
          backgroundColor: (props: BackgroundColorProps) =>
            props.bg || theme.colors.primary.main,
        },
        secondary: {
          // borderBottomRightRadius: [3],
          // borderTopLeftRadius: [3],
          borderRadius: [1],
          backgroundColor: (props: BackgroundColorProps) =>
            props.bg || theme.colors.secondary.main,
        },
        tertiary: {
          // borderBottomRightRadius: [3],
          // borderTopLeftRadius: [3],
          borderRadius: [1],
          backgroundColor: theme.colors.white[0],
          color: theme.colors.grey[800],
        },
        outlined: {
          borderRadius: [1],
          border: [1],
          borderColor: theme.colors.grey[300],
          bg: theme.colors.white,
          color: (props: ColorProps) => props.color || theme.colors.grey[700],
        },
        status: {
          // bg: (props: Theme) => props.colors.secondary.main,
          borderRadius: [1],
        },
        padded: {
          bg: (props: Theme) => props.colors.blueBerry[0],
          borderRadius: theme.radii[2],
          paddingX: [4],
          paddingY: (props: Theme) => props.spaces[5],
        },
        paddedOutline: {
          bg: (props: Theme) => props.colors.white,
          borderRadius: [2],
          border: [1],
          borderColor: theme.colors.grey[300],
          paddingX: [4],
          paddingY: (props: Theme) => props.spaces[5],
          color: (props: ColorProps) => props.color || theme.colors.grey[700],
        },
        ghost: {
          borderRadius: 0,
          border: 'none',
          color: (props: ColorProps) => props.color || theme.colors.grey[700],
          backgroundColor: (props: BackgroundColorProps) =>
            props.bg || theme.colors.white[0],
        },
        rightOutlinedLeaf: {
          px: [2, 3, 4],
          py: [3, '20px', '25px'],
          borderRadius: 0,
          borderBottomLeftRadius: 3,
          borderTopRightRadius: 3,
          fontSize: [2, 3],
          fontWeight: 6,
          fontFamily: theme.fonts.poppins,
          bg: 'transparent',
          border: 1,
        },
        normal: {},
      },
    }),
  )}/* system({
    transform: true,
    transition: true,
    transformOrigin: true,
  }) */
`;

BaseButton.defaultProps = {
  variant: 'primary',
};

export const Button = ({ loading, children, ...rest }: ButtonProps) => {
  return (
    // @ts-ignore
    <BaseButton {...rest}>
      {loading && (
        <CircularProgress
          style={{ marginRight: 4, color: 'white' }}
          size={theme.sizes[3]}
        />
      )}
      {children}
    </BaseButton>
  );
};
