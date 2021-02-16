import React from "react"
import { View, Dimensions } from "react-native"

import { CardSquare } from "./cards"

import styles from "../../styles/styles"

const Group = ({ navigation }) => {
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
			<CardSquare id="0000" navigation={navigation} />
			<CardSquare id="0001" navigation={navigation} />
		</View>
	)
}

export default Group
