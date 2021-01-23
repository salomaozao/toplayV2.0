import React, { useCallback, memo, useRef, useState } from "react"
import {
	FlatList,
	View,
	Dimensions,
	Text,
	StyleSheet,
	Image,
} from "react-native"

//CAROUSEL DOES NOT HANDLE MARGINS VERY WELL!

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
		image: `https://picsum.photos/1440/2842?random=${i}`,
		// title: `This is the title ${i + 1}!`,
		// subtitle: `This is the subtitle ${i + 1}!`,
		title: null,
		subtitle: null,
	}
})

const Slide = memo(function Slide({ slides, index }) {
	slides = [<Text>a</Text>, <Text>b</Text>, <Text>c</Text>, <Text>d</Text>]
	return <Text style={[styles.slide]}>{index}</Text>
})

export default function Carousel(slides) {
	const [index, setIndex] = useState(0)
	const indexRef = useRef(index)
	indexRef.current = index > 4 ? indexRef.current : index
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
		return <Slide slides={slides} index={indexRef.current} />
	}, [])

	return (
		<View
			style={{
				height: 50,
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