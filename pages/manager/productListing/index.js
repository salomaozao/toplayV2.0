import React from "react"
import { View, Image, ScrollView } from "react-native"
import {
	Text,
	Card,
	Title,
	Button,
	IconButton,
	Colors,
	Menu,
	FAB,
} from "react-native-paper"
import media from "../../../media/media"
import styles from "../../styles/styles"

const ProductListingDataArr = [
	{
		sport: "footbal",
		key: "0",
	},
	{
		sport: "basket",
		key: "1",
	},
	{
		sport: "footbal",
		key: "2",
	},
]

const ProductsComponents = []

const CardShow = ({ navigation, name, subtitle, image, sport = "footbal" }) => {
	const sportsColors = {
		footbal: Colors.green900,
		basket: Colors.orange900,
	}
	const [visible, setVisible] = React.useState(false)

	const openMenu = () => setVisible(true)

	const closeMenu = () => setVisible(false)

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
						<Card.Cover source={{ uri: image }} />
						<Card.Title
							title={name}
							subtitle={subtitle}
							titleStyle={{ color: sportsColors[sport] }}
						/>
					</Card>
				}
			>
				<Menu.Item
					onPress={() => navigation.navigate("product")}
					title="Visitar"
				/>
				<Menu.Item
					onPress={() => navigation.navigate("manager_upload")}
					title="Personalizar"
				/>
			</Menu>
		</View>
	)
}

const ProductListing = ({ navigation }) => {
	for (let data of ProductListingDataArr) {
		let c = 0
		ProductsComponents.push(
			<CardShow navigation={navigation} key={c} {...data} />,
		)
		c++
	}
	return (
		<>
			<ScrollView style={{ marginTop: 30 }}>
				<View style={[styles.row, { justifyContent: "space-between" }]}>
					<IconButton
						icon="home"
						onPress={() => navigation.navigate("main")}
					/>
					<View style={styles.center}>
						<Title style={[styles.titleSecondary]}>
							Suas Quadras
						</Title>
					</View>
					<FAB
						style={{
							width: 40,
							height: 40,
							position: "relative",
							top: 5,
							right: 5,
						}}
						small
						icon="plus"
						onPress={() =>
							navigation.navigate("manager_upload", {
								un: "Jorge",
							})
						}
					/>
				</View>

				{ProductsComponents}
			</ScrollView>
		</>
	)
}

export default ProductListing
