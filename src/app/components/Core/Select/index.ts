import {} from 'styled-system';
import styled from 'styled-components';
import MuiSelect from '@mui/material/Select';
import { theme } from 'styles/theme/themes';

export const Select = styled(MuiSelect)`
  .MuiSelect-icon {
    color: ${theme.colors.primary.main};
  }
  .MuiSelect-select {
    border: 0px;
    font-size: 12px;
  }
  .MuiOutlinedInput-notchedOutline {
    border: ${theme.borders[0]};
  }
  &:hover {
    border: none;
  }
`;
