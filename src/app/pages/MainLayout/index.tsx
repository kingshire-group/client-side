import React from 'react';
import styled from 'styled-components';
import { IProps } from './types';

export const MainLayoutWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background: #ffffff;
  overflow: hidden;
`;

function MainLayout(props: IProps) {
  return <MainLayoutWrapper>{props.children}</MainLayoutWrapper>;
}

export default MainLayout;
