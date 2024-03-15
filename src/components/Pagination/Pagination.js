import React from "react";
import { Pagination } from "react-native-snap-carousel";

export const PaginationCustom = (props) => {
    const { items, activeSlide } = props;
    return (
        <Pagination
            dotsLength={items.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: "transparent" }}
            dotStyle={{
                width: 7,
                height: 7,
                borderRadius: 5,
            }}
            dotColor='#286FC3'
            inactiveDotColor='#757575'
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
        />
    )
}