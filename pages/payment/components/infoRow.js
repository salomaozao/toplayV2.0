import React from "react"
import { View } from "react-native"
import TextInfo from "./textinfo"

const InfoRow = ({ info1, info2 }) => (
	<View
		style={[
			{
				justifyContent: "space-between",
				flexDirection: "row",
			},
		]}
	>
		<TextInfo
			title={info1.title}
			content={info1.content}
			icon={info1.icon}
			side="left"
		/>

		<TextInfo
			title={info2.title}
			content={info2.content}
			icon={info2.icon}
			side="right"
		/>
	</View>
)

export default InfoRow
