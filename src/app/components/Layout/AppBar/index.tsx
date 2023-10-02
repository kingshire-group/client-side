import React from 'react';
import {
  Avatar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Box, Container } from 'app/components/Core';
import MuiAppBar from '@mui/material/AppBar';
import { Menu } from 'styled-icons/material';
import { AppBarProps } from './types';

export default function AppBarLayout({}: AppBarProps) {
  // Global App Theme Hook
  const theme = useTheme();
  const appBarBreakPoint = useMediaQuery(theme.breakpoints.down('sm'));

  return !appBarBreakPoint ? null : (
    <MuiAppBar sx={{ width: '100%', margin: 0 }} position="sticky">
      <Toolbar variant="regular">
        <Container height="auto" width={'100%'}>
          <Box flexGrow={1}>
            <Menu width={20} height={20} />
            <Typography variant="h6" noWrap component="div"></Typography>
          </Box>
          <Box
            flexGrow={0}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box paddingX={5}></Box>
            <Avatar sx={{ width: 25, height: 25 }}></Avatar>
          </Box>
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
}
