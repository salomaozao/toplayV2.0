import React from "react"
import { View } from "react-native"
import { Menu, Card, Colors } from "react-native-paper"
import styles from "../../../styles/styles"

const CardShow = ({ navigation, id }) => {
	const sportsColors = {
		footbal: Colors.green900,
		basket: Colors.orange900,
	}
	const [visible, setVisible] = React.useState(false)

	const openMenu = () => setVisible(true)

	const closeMenu = () => setVisible(false)

	const comp = data[id]
	return (
		<View>
			<Menu
				visible={visible}
				onDismiss={closeMenu}
				anchor={
					<Card
						style={[
							styles.my4,
							{ alignSelf: "center", width: "80%" },
						]}
						onPress={openMenu}
					>
						<Card.Cover source={{ uri: media[comp.img] }} />
						<Card.Title
							title={comp.name}
							// subtitle={subtitle}
							titleStyle={{ color: sportsColors[comp.sport] }}
						/>
					</Card>
				}
			>
				<Menu.Item
					onPress={() => {
						closeMenu()
						navigation.navigate("product")
					}}
					title="Visitar"
				/>
				<Menu.Item
					onPress={() => {
						closeMenu()
						navigation.navigate("manager_upload", {
							productId: id,
						})
					}}
					title="Personalizar"
				/>
			</Menu>
		</View>
	)
}

export default CardShow
