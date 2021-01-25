import React from "react"
import { View, Dimensions } from "react-native"

import Card from "./card"

const Group = () => {
	const width = Dimensions.get("window").width * 0.9
	const height = width * 0.5
	return (
		<View
			style={{
				width: width,
				height: height,
				alignSelf: "center",
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<Card i={0} />
			<Card i={1} />
		</View>
	)
}

export default Group
