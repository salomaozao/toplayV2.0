import React from "react"
import { View } from "react-native"
import { Avatar, Text, Button } from "react-native-paper"
import styles from "../../styles/styles"

const Header = () => (
	<View style={styles.bgPrimary}>
		<View
			style={[
				{ marginTop: 35, justifyContent: "space-between" },
				styles.row,
			]}
		>
			{/* <Text style={styles.textCenter}>aa</Text> */}
			<View>
				<Button icon="settings-helper"></Button>
			</View>
			<View>
				<Text>Toplay</Text>
			</View>
			<View style={styles.mr2}>
				<Avatar.Text size={24} label="XD" />
			</View>
		</View>
	</View>
)

export default Header
