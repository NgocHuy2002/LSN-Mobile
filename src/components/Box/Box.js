import React from 'react';
import PropTypes from 'prop-types';

import { tw } from 'react-native-tailwindcss';
import { styled } from '@ui-kitten/components';

import { View } from 'react-native';

function Box(props) {
  const { eva, ...restProps } = props;

  return <View {...restProps} />;
}

export default styled('Box')(Box);
