import { styled } from '@mui/material/styles';
import { OutlinedInput } from '@mui/material';

interface EInputProps {
  isFancy?: boolean;
}

export const Input = styled(OutlinedInput, {
  shouldForwardProp: props => props !== 'isFancy',
})<EInputProps>(() => ({
  height: '30px',
  background: '#F3F5F7',
  borderRadius: '30px',
  border: 'none',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    borderStyle: 'none',
    borderRadius: '0px',
    borderWidth: '0px',
    borderColor: 'transparent',
  },
  '.css-1f745nr-MuiInputBase-root-MuiOutlinedInput-root': {
    border: 'none',
  },
}));
