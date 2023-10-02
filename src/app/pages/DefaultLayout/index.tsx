import React from 'react';
// MUI DEFAULT LAYOUT
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Icons
import DashboardBody from 'app/components/DashboardBody';
import { Flex } from 'app/components/Core';
import { useDefaultLayoutSlice } from './slice';
import AppBar from '../../components/Layout/AppBar';

interface IProps {
  children: React.ReactNode;
  window?: () => Window;
}

export default function DefaultLayout(props: IProps) {
  const { actions } = useDefaultLayoutSlice();

  return (
    <Flex
      height="auto"
      flexDirection={['column', 'row']}
      alignItems="center"
      justifyContent="center"
      width="auto"
    >
      <CssBaseline />
      <AppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
        }}
      >
        <DashboardBody>{props.children}</DashboardBody>
      </Box>
    </Flex>
  );
}
