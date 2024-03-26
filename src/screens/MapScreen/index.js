import Container from "@components/Container/Container";
import { Text } from "@ui-kitten/components"
import MapView, { Marker } from 'react-native-maps';
import Content from '@components/Content/Content';
import { Dimensions } from "react-native";
import Header from "@components/Header/Header";
import { useState } from "react";

export const MapScreen = () => {
  const [markers, setMarkers] = useState([
    {
      latlng: {
        latitude: 21.019121,
        longitude: 105.809102,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      title: 'VNPT',
    },
    {
      latlng: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      title: 'Somewhere',
    },
  ])
  // --------------- Action -------------------
  const handlePin = (latitude, longitude) => {
    setMarkers([
      ...markers,
      {
        latlng: {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        title: 'VNPT',
      }
    ]);
  }
  // ------------------------------------------
  return (
    <Container>
      <Header
        style={{ backgroundColor: '#286FC3' }}
        color='#FFFFFF'
        status='primary'
        title='Bản đồ'
        hideLeftIcon={false}
      />
      <Content>
        <MapView
          style={{ width: Dimensions.get('screen').width, height: 500 }}
          initialRegion={{
            latitude: 21.019121,//21.019121, 105.809102
            longitude: 105.809102,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={(event) => console.log(event.nativeEvent.coordinate.latitude, event.nativeEvent.coordinate.longitude)}
        >
          {markers?.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
            // description={marker.description}
            />
          ))}
        </MapView>
      </Content>
    </Container>
  )
}