import styled from 'styled-components';
import { Radio as MuiRadio, FormControlLabel } from '@mui/material';
import React from 'react';
import {
  alignSelf,
  color,
  compose,
  justifySelf,
  layout,
  space,
} from 'styled-system';
import { theme } from 'styles/theme/themes';
import { Checkbox_Toogle_Rdio_Props } from '../types';

export const Radi = styled(MuiRadio)<Checkbox_Toogle_Rdio_Props>(
  {
    '&.Mui-checked': {
      color: `${theme.colors.primary.main} !important`,
    },
  },
  compose(color, layout, space, alignSelf, justifySelf),
);

type Placments = 'top' | 'bottom' | 'start';
interface Props {
  value: string | boolean;
  label: string;
  labelPlacement?: Placments;
}
export const Radio = ({ value, label }: Props) => (
  <FormControlLabel value={value} control={<Radi />} label={label} />
);
