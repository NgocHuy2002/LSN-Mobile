import React from 'react';

import { tw } from 'react-native-tailwindcss';

import { View } from 'react-native';
import { Divider } from '@ui-kitten/components';

export default function TableActions(props) {
  const { children, contentStyle, ...restProps } = props;

  return (
    <View {...restProps}>
      <Divider style={tw.mY2} />
      <View style={[tw.flexRow, tw.justifyEnd, contentStyle]}>
        {children}
      </View>
    </View>
  );
}
