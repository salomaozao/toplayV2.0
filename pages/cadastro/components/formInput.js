import React from "react"
import { View } from "react-native"
import { Text, TextInput } from "react-native-paper"
import styles from "../../styles/styles"

const inputs = ({ title, placeholder }) => (
	<View style={styles.centerSelf}>
		<Text style={[{ fontSize: 20 }, styles.textCenter, styles.my2]}>
			{title}
		</Text>
		<View style={[styles.my2, styles.p1]}>
			<TextInput
				placeholder={placeholder}
				mode="outlined"
				style={{ backgroundColor: "rgba(0,0,0,.40)" }}
			/>
		</View>
	</View>
)

export default inputs
