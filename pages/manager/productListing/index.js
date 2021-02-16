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
import data from "../../testing/data/quadras.json"

const ProductListingArr = ["0000", "0003"]

const ProductsComponents = []

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
						navigation.navigate("manager_upload", { productId: id })
					}}
					title="Personalizar"
				/>
			</Menu>
		</View>
	)
}

const ProductListing = ({ navigation }) => {
	if (ProductListingArr.length !== 0) {
		for (let count = 0; count < ProductListingArr.length; count++) {
			ProductsComponents.push(
				<CardShow
					navigation={navigation}
					key={count}
					id={ProductListingArr[count]}
				/>,
			)
		}
	} else if (ProductListingArr.length === 0) {
		ProductsComponents.push(
			<View style={[styles.center]}>
				<Text>Você ainda não é dono de nenhuma quadra!</Text>
			</View>,
		)
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
						<Title style={[styles.titleSecondary, styles.mt2]}>
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
