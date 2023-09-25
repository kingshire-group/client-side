import React, { ReactNode } from 'react';
import { Box } from '../Core';

interface IProps {
  children: ReactNode;
}

export default function DashboardBody(props: IProps) {
  return (
    <Box
      display=" flex"
      height={71}
      width={71}
      position="relative"
      // marginTop={5}
    >
      {props.children}
    </Box>
  );
}
