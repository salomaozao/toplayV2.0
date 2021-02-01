import React, { useState } from "react"
import { View, TouchableHighlight } from "react-native"
import { Colors, Text, Title, Menu, Surface } from "react-native-paper"
import styles from "../../styles/styles"

const Apointments = ({ navigation, name, date, passed }) => {
	const color = passed ? Colors.red500 : Colors.green500

	const [menuVisible, setMenuVisible] = useState(false)

	return (
		<Menu
			visible={menuVisible}
			onDismiss={() => setMenuVisible(false)}
			statusBarHeight={70}
			anchor={
				<TouchableHighlight
					style={[
						styles.my2,
						styles.shadowMd,
						{
							marginVertical: 10,
							height: 50,
							justifyContent: "center",
						},
					]}
					onLongPress={() => setMenuVisible(true)}
					onPress={() => navigation.navigate("product")}
				>
					<Surface
						style={[
							styles.p2,
							{
								flexDirection: "row",
								justifyContent: "space-between",
							},
						]}
					>
						<View>
							<Text
								style={[
									styles.titleSecondary,
									styles.textLight2,
								]}
							>
								{name}
							</Text>
						</View>

						<View style={styles.row}>
							<View style={[styles.col]}>
								<Text
									style={{
										textAlign: "center",
										color: color,
									}}
								>
									Data
								</Text>
								<Text
									style={{
										textAlign: "center",
										color: color,
									}}
								>
									{date}
								</Text>
							</View>
						</View>
					</Surface>
				</TouchableHighlight>
			}
		>
			<Menu.Item
				onPress={() => navigation.navigate("product")}
				title="Visitar"
			/>

			<Menu.Item
				onPress={() => navigation.navigate("product")}
				title="Remarcar"
			/>
		</Menu>
	)
}
export default Apointments
