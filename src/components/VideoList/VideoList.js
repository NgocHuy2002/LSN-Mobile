import React from 'react';
import PropTypes from 'prop-types';

import { tw } from 'react-native-tailwindcss';
import { View, FlatList } from 'react-native';

import VideoItem from './VideoItem';

export default function VideoList(props) {
  const {
    data,
    onItemPress,
    onRemovePress,
    containerStyle,
    itemStyle,
    showEditButton,
    ...restProps
  } = props;

  const renderItem = ({ item, index }) => (
    <VideoItem
      item={item}
      onPress={() => onItemPress?.(item, index)}
      onRemovePress={() => onRemovePress?.(item, index)}
      showEditButton={showEditButton}
    />
  );

  return (
    <View style={containerStyle}>
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={(_, index) => `item-${index}`}
        {...restProps}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={tw.w2} />}
      />
    </View>
  );
}

VideoList.propTypes = {
  data: PropTypes.array,
  showEditButton: PropTypes.bool,
};
