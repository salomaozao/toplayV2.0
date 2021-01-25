import React, { useState } from "react"
import { View, TouchableHighlight } from "react-native"
import {
	Colors,
	Text,
	Title,
	Menu,

} from "react-native-paper"
import styles from "../../styles/styles"

const Apointments = ({ name, date, passed }) => {
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
						styles.border,
						styles.borderDark,
						{
							marginVertical: 5,
							height: 50,
							justifyContent: "center",
						},
					]}
					onPress={() => setMenuVisible(true)}
				>
					<View
						style={[
							styles.mx2,
							{
								flexDirection: "row",
								justifyContent: "space-between",
							},
						]}
					>
						<View>
							<Title>{name}</Title>
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
					</View>
				</TouchableHighlight>
			}
		>
			<Menu.Item
				titleStyle={{ textAlign: "right" }}
				onPress={() => console.log("Clicou em visitar")}
				title="Visitar"
			/>
			<Menu.Item
				titleStyle={{ textAlign: "right" }}
				onPress={() => console.log("Clicou em excluir")}
				title="Excluir"
			/>
			<Menu.Item
				titleStyle={{ textAlign: "right" }}
				onPress={() => console.log("Clicou em remarcar")}
				title="Remarcar"
			/>
		</Menu>
	)
}
export default Apointments
