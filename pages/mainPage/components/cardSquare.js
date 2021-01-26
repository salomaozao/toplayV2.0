import React, { useState } from "react"
import { Dimensions, View, Image } from "react-native"
import { Text, IconButton } from "react-native-paper"

import media from "../../../media/media"
import styles from "../../styles/styles"

const CardSquare = ({ i }) => {
	const width = Dimensions.get("screen").width * 0.4
	const height = width * 1.2

	var [images, setImages] = useState([
		media.quadra1,
		media.quadra2,
		media.quadra3,
	])

	const iconSize = Dimensions.get("screen").width * 0.035

	return (
		<View
			style={[
				{ width: width, height: height },
				styles.border,
				styles.col,
				{ borderRadius: 2.5 },
			]}
		>
			<View style={{ height: "90%" }}>
				<Image
					style={{
						width: "100%",
						height: "65%",
						borderTopLeftRadius: 2.5,
						borderTopRightRadius: 2.5,
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
				<Text style={[styles.textCenter, styles.mt2]}>
					Quadra são joão
				</Text>
			</View>
			<View
				style={[
					{
						borderTopWidth: 0.5,

						// height: "10%",
					},
				]}
			>
				<View style={[styles.row, { alignContent: "center" }]}>
					<IconButton
						icon="map-marker"
						size={iconSize}
						style={{ bottom: iconSize / 2 }}
					/>
					<Text style={{ overflow: "hidden", width: "100%" }}>
						Rua exemplo, 123
					</Text>
				</View>
			</View>
		</View>
	)
}

export default CardSquare
