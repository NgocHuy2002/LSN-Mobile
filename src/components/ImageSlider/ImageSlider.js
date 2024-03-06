import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";
import { API_URL, API } from "@constants/api";
import { tw, color } from "react-native-tailwindcss";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

export default function ImageSlider(props) {
  const { data, containerStyle } = props;

  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        if (index !== currentIndex) {
          swiperRef.current.scrollTo(index);
        }
      }}
    >
      <View
        style={[
          tw.roundedLg,
          tw.w12,
          tw.h12,
          tw.m1,
          currentIndex === index && [
            tw.border2,
            tw.borderPrimary,
          ],
        ]}
      >
        <Image
          style={[tw.wFull, tw.hFull, tw.roundedLg]}
          source={{
            uri: API_URL + API.PREVIEW_ID.replace("{0}", item.url),
          }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={containerStyle}>
      {data.length > 0 && (
        <Swiper
          ref={swiperRef}
          style={[tw.h64, tw.bgGray100]}
          showsButtons={false}
          showsPagination={false}
          loop={false}
          onIndexChanged={(index) => setCurrentIndex(index)}
        >
          {data.map((item, index) => (
            <View
              key={`image-${index}`}
              style={[tw.flex1, tw.justifyCenter, tw.alignCenter]}
            >
              <Image
                style={[tw.wFull, tw.hFull, tw.resizeContain]}
                source={{
                  uri: API_URL + API.PREVIEW_ID.replace("{0}", item.url),
                }}
              />
            </View>
          ))}
        </Swiper>
      )}
      <FlatList
        style={[tw.mT2]}
        contentContainerStyle={[tw.pX4]}
        horizontal
        data={data}
        renderItem={renderListItem}
      />
    </View>
  );
}

ImageSlider.propTypes = {
  data: PropTypes.array,
  showEditButton: PropTypes.bool,
};
