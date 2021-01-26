import React from "react"
import { View, Dimensions } from "react-native"

import Card from "./cardSquare"

import styles from "../../styles/styles"

const Group = () => {
	const width = Dimensions.get("window").width * 0.9
	const height = width * 0.5
	return (
		<View
			style={[
				{
					width: width,
					height: height,
					alignSelf: "center",
					flexDirection: "row",
					justifyContent: "space-between",
				},
				styles.my4,
			]}
		>
			<Card i={0} />
			<Card i={1} />
		</View>
	)
}

export default Group
