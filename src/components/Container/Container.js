import React from 'react';
import PropTypes from 'prop-types';

import { tw } from 'react-native-tailwindcss';
import { styled } from '@ui-kitten/components';

import { View } from 'react-native';
// import * as Animatable from 'react-native-animatable';

function Container(props) {
  const { eva, style, ...restProps } = props;

  return <View {...restProps} style={[eva.style, tw.flex1, style]} />;
}

export default styled('Layout')(Container);
