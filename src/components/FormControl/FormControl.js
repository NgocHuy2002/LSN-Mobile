import React from 'react';
import PropTypes from 'prop-types';

import { tw } from 'react-native-tailwindcss';

import { View } from 'react-native';

import FormControlContext from './FormControlContext';

function FormControl(props) {
  const {
    status = 'basic',
    variant = 'filled',
    disabled = false,
    readonly = false,
    required = false,
    containerStyle,
    ...restProps
  } = props;

  const contextValue = {
    status,
    variant,
    disabled,
    readonly,
    required,
  };

  return (
    <FormControlContext.Provider value={contextValue}>
      <View {...restProps} style={containerStyle} />
    </FormControlContext.Provider>
  );
}

export default FormControl;
