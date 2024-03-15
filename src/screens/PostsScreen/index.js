import Container from "@components/Container/Container";
import Header from "@components/Header/Header";
import Content from '@components/Content/Content';
import React, { useState } from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { Button, Icon, Text } from "@ui-kitten/components";
import Carousel from "react-native-snap-carousel";
import { tw } from "react-native-tailwindcss";
import { PaginationCustom } from "@components/Pagination/Pagination";
import { ROUTER } from "@constants/router";

export const PostsScreen = ({ navigation, route }) => {
	const data = [
		{ title: 'Chuyên mục 1', posts: [{ title: 'title post 1' }, { title: 'title post 2' }, { title: 'title post 3' },] },
		{ title: 'Chuyên mục 2', posts: [{ title: 'title post 1' }, { title: 'title post 2' }, { title: 'title post 3' },] },
		{ title: 'Chuyên mục 3', posts: [{ title: 'title post 1' }, { title: 'title post 2' }, { title: 'title post 3' },] },
		{ title: 'Chuyên mục 4', posts: [{ title: 'title post 1' }, { title: 'title post 2' }, { title: 'title post 3' },] },
	]
	const [paginationStates, setPaginationStates] = useState(Array(data.length).fill(0));
	// ------- Render --------------------
	const renderIcon = (props) => (
		<Icon
			{...props}
			name={'grid'}
		/>
	);
	const renderCard = ({ item, index }) => (
		<TouchableOpacity 
		style={{
			borderRadius: 5,
			width: Dimensions.get('screen').width * 0.7,
			height: Dimensions.get('screen').height * 0.2 + 20,
		}} 
		key={item.title}
		onPress={() => navigation.navigate(ROUTER.POST)}
		>
			{/* <Text style={{ fontSize: 30 }}>{item.title}</Text> */}
			<Image source={require('../../assets/images/image_demo.png')} style={{ width: Dimensions.get('screen').width * 0.7, height: 115 }} />
			<Text style={{ textAlign: 'justify', display: 'flex', flexWrap: 'wrap', width: Dimensions.get('screen').width * 0.7 }}>{item.title}</Text>
		</TouchableOpacity>
	)

	// function PaginationView(props) {
	//     const { items, activeSlide } = props;
	//     return (
	//         <Pagination
	//             dotsLength={items.length}
	//             activeDotIndex={activeSlide}
	//             containerStyle={{ backgroundColor: "transparent" }}
	//             dotStyle={{
	//                 width: 7,
	//                 height: 7,
	//                 borderRadius: 5,
	//             }}
	//             dotColor='#286FC3'
	//             inactiveDotColor='#757575'
	//             inactiveDotOpacity={0.4}
	//             inactiveDotScale={0.6}
	//         />
	//     );
	// }
	const setPaginationState = (index, value) => {
		const newPaginationStates = [...paginationStates];
		newPaginationStates[index] = value;
		setPaginationStates(newPaginationStates);
	};
	return (
		<Container>
			<Header
				style={{ backgroundColor: '#286FC3' }}
				color='#FFFFFF'
				status='primary'
				title='Bài viết'
				hideLeftIcon={false}
			/>
			<Content>
				{data.map((chuyen_muc, index) => {
					return (
						<View key={chuyen_muc + '_' + index}>
							<View style={[tw.p2, { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }]}>
								<Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>{chuyen_muc.title}</Text>
								<Button appearance="ghost" accessoryLeft={renderIcon}>Xem tất cả</Button>
							</View>
							<View>
								<Carousel
									data={chuyen_muc.posts}
									renderItem={renderCard}
									layout={'default'}
									sliderWidth={Dimensions.get('screen').width}
									itemWidth={Dimensions.get('screen').width * 0.7}
									autoplayDelay={2000}
									autoplayInterval={3000}
									scrollEnabled={true}
									useScrollView={true}
									onSnapToItem={(itemIndex) => setPaginationState(index, itemIndex)}
								/>
								<PaginationCustom
									items={chuyen_muc.posts}
									activeSlide={paginationStates[index]}
								/>
							</View>
						</View>
					)
				})}
			</Content>
		</Container>
	)
}