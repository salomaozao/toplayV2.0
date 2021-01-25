import React from "react"
import { View, TextInput } from "react-native"
import { Text } from "react-native-paper"
import styles from "../../styles/styles"

const inputs = (props) => (
	<View>
		<Text style={[{ fontSize: 20 }, styles.textCenter, styles.my2]}>
			{props.title}
		</Text>
		<View
			style={[
				styles.borderBottom,
				styles.borderDark,
				styles.mx4,
				styles.my2,
				styles.p1,
			]}
		>
			<TextInput placeholder={props.placeholder} />
		</View>
	</View>
)

export default inputs
