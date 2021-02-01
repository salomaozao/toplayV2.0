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
			<CardSquare i={0} navigation={navigation} />
			<CardSquare i={1} navigation={navigation} />
		</View>
	)
}

export default Group
