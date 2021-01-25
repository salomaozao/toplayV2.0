import React, { useState } from "react"
import { Dimensions, View, Image } from "react-native"
import { Text } from "react-native-paper"

import media from "../../../media/media"
import styles from "../../../styles/styles"

const CardCustom = ({ i }) => {
	const width = Dimensions.get("screen").width * 0.4
	const height = width * 1.2

	var [images, setImages] = useState([
		media.quadra1,
		media.quadra2,
		media.quadra3,
	])
	return (
		<View
			style={[
				{ width: width, height: height },
				styles.border,
				styles.col,
			]}
		>
			<Image
				style={{
					width: "100%",
					height: "65%",
				}}
				source={{
					uri: images[i], //como indexar?
				}}
				onError={() => {
					el = images
					el[i] = media.error
					setImages(el)
				}}
			/>
			<Text style={[styles.textCenter, styles.mt2]}>Quadra são joão</Text>
		</View>
	)
}

export default CardCustom
