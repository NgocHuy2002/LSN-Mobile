import React from 'react';
import { tw } from 'react-native-tailwindcss';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';

export default function MiniCard({ text, color, textColor }) {
  return (
    <View style={[tw.rounded, { backgroundColor: color }]}>
      <Text category="p2" style={[tw.pX1, tw.pYPx, { color: textColor }]}>
        {text}
      </Text>
    </View>
  );
}
