import React from 'react';
import { tw, color } from 'react-native-tailwindcss';
import { View, Text, TouchableOpacity } from 'react-native';

const SmallButton = ({
  text,
  bgColor = color.primary,
  textColor = color.white,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[tw.p1, tw.pX2, tw.rounded, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <Text style={[tw.fontSemibold, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SmallButton;
