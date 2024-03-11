import { Card, Text } from "@ui-kitten/components";
import React from "react";
import { Dimensions, View } from "react-native";

export const SmallCard = ({ Icon, title }) => {
    const screenWidth = Dimensions.get('screen').width *0.5 - 30;

    return (
        <Card style={{
            borderRadius: 5, width: screenWidth, height: 50, shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,

            elevation: 4,
        }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                {Icon}<Text style={{ fontSize: 12 }}>{title}</Text>
            </View>
        </Card>
    )
}