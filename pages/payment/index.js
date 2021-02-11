import React from "react"
import { View } from "react-native"
import { Text, Button, Surface } from "react-native-paper"

import styles from "../styles/styles"

const PaymentsPage = () => {
	return (
		<>
			<View>
				<Surface style={styles.center}>
					<Text style={[styles.title]}>80,99</Text>
				</Surface>
			</View>
		</>
	)
}

export default PaymentsPage
