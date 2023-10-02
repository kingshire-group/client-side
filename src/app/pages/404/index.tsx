import React from 'react';
import lottie404 from 'assets/lotties/404.json';
import Lottie from 'react-lottie';
import { Container, Button, Box } from 'app/components/Core';
import { useNavigate } from 'react-router-dom';
import { theme } from 'styles/theme/themes';

export const PageNotFound = () => {
  const navigate = useNavigate();
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie404,
    renderSettings: {
      preserveAspectRation: 'xMidYMid slice',
    },
  };
  return (
    <Container height="100vh" flexDirection="column">
      <Box width={['100%', '80%', '50%', '40%']}>
        <Lottie options={lottieDefaultOptions} width="100%" />
      </Box>
      <Button
        bg={theme.colors.info.main as string}
        variant="paddedOutline"
        width={['90%', '30%', 42]}
        onClick={() => navigate('/home')}
      >
        Back to Home
      </Button>
    </Container>
  );
};
