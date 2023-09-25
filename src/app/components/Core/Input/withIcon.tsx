import { IconButton } from '@mui/material';
import React from 'react';
import { Flex } from '..';

interface IconWithTextProps {
  icon: React.FunctionComponent<any>;
  handleInputType: (inputName: string) => void;
  inputName: string;
}

export const withIcon = (WrappedComponent: React.ElementType) => {
  const MyComp = ({
    icon: Icon,
    handleInputType,
    inputName,
  }: IconWithTextProps) => {
    return (
      <Flex width={71} position={'relative'}>
        <i
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '0px',
            minWidth: '20px',
            paddingRight: '10px',
          }}
        >
          <IconButton tabIndex={2} onClick={() => handleInputType(inputName)}>
            <Icon width="20px" height="20px" />
          </IconButton>
        </i>

        <WrappedComponent padding={'10px'} style={{ textAlign: 'center' }} />
      </Flex>
    );
  };
  MyComp.displayName = 'myComp';
  return MyComp;
};
