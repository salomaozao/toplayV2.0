import React from "react"
import { View } from "react-native"
import { Text, Avatar, Colors } from "react-native-paper"

import styles from "../../styles/styles"

const TextInfo = ({ title, content, icon, side }) => (
	<View
		style={[
			styles.col,
			styles.my2,
			{ alignItems: side === "left" ? "flex-start" : "flex-end" },
		]}
	>
		<View style={styles.row}>
			{side === "right" ? (
				<>
					<Text style={{ fontSize: 20, marginHorizontal: 5 }}>
						{title}
					</Text>
					<Avatar.Icon
						icon={icon}
						size={18}
						style={[styles.iconPos]}
					/>
				</>
			) : (
				<>
					<Avatar.Icon
						icon={icon}
						size={18}
						style={[styles.iconPos]}
					/>
					<Text style={{ fontSize: 20, marginHorizontal: 5 }}>
						{title}
					</Text>
				</>
			)}
		</View>
		<Text style={[{ color: Colors.grey600 }]}>{content}</Text>
	</View>
)

export default TextInfo
