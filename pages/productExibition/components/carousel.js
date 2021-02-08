import React, { useCallback, memo, useRef, useState } from "react"
import {
	FlatList,
	View,
	Dimensions,
	Text,
	StyleSheet,
	Image,
} from "react-native"
import media from "../../../media/media"

import stylesMain from "../../styles/styles"

//CAROUSEL DOES NOT HANDLE MARGINS VERY WELL!
const Images = [media.quadra1, media.quadra2, media.quadra3]

const { width: windowWidth, height: windowHeight } = Dimensions.get("window")

const styles = StyleSheet.create({
	slide: {
		width: windowWidth,
		justifyContent: "center",
		alignItems: "center",
	},
	slideImage: { width: windowWidth * 0.9, height: windowHeight * 0.7 },
	slideTitle: { fontSize: 24 },
	slideSubtitle: { fontSize: 18 },

	carousel: { flex: 1 },
})

const slideList = Array.from({ length: 30 }).map((_, i) => {
	return {
		id: i,
		// image: `https://picsum.photos/1440/2842?random=${i}`,
		image: Images[i],
		// title: `This is the title ${i + 1}!`,
		// subtitle: `This is the subtitle ${i + 1}!`,
		title: null,
		subtitle: null,
	}
})

const Slide = memo(function Slide({ data }) {
	return (
		<View style={[styles.slide]}>
			<Image
				source={{ uri: data.image }}
				style={[
					styles.slideImage,
					stylesMain.shadowWhiteSm,
					stylesMain.round,
				]}
			></Image>
			{/* <Text style={styles.slideTitle}>{data.title}</Text>
			<Text style={styles.slideSubtitle}>{data.subtitle}</Text> */}
		</View>
	)
})

export default function Carousel() {
	const [index, setIndex] = useState(0)
	const indexRef = useRef(index)
	indexRef.current = index
	const onScroll = useCallback((event) => {
		const slideSize = event.nativeEvent.layoutMeasurement.width
		const index = event.nativeEvent.contentOffset.x / slideSize
		const roundIndex = Math.round(index)

		const distance = Math.abs(roundIndex - index)

		// Prevent one pixel triggering setIndex in the middle
		// of the transition. With this we have to scroll a bit
		// more to trigger the index change.
		const isNoMansLand = 0.4 < distance

		if (roundIndex !== indexRef.current && !isNoMansLand) {
			setIndex(roundIndex)
			
		}
	}, [])

	const flatListOptimizationProps = {
		initialNumToRender: 0,
		maxToRenderPerBatch: 1,
		removeClippedSubviews: true,
		scrollEventThrottle: 16,
		windowSize: 2,
		keyExtractor: useCallback((s) => String(s.id), []),
		getItemLayout: useCallback(
			(_, index) => ({
				index,
				length: windowWidth,
				offset: index * windowWidth,
			}),
			[],
		),
	}

	const renderItem = useCallback(function renderItem({ item }) {
		return <Slide data={item} />
	}, [])

	return (
		<View
			style={{
				height: windowHeight * 0.7 + 1,
			}}
		>
			<FlatList
				data={slideList}
				style={styles.carousel}
				renderItem={renderItem}
				pagingEnabled
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				onScroll={onScroll}
				{...flatListOptimizationProps}
			/>
		</View>
	)
}
