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

import CardShow from "./components/cardShow"

import media from "../../../media/media"
import styles from "../../styles/styles"
import productsData from "../../testing/data/quadras.json"
import usersDataJson from "../../testing/data/users.json"

var ProductListingArr = []

var ProductListingArr = ["0000", "0003"]

var ProductsComponents = []

const ProductListing = ({ navigation, route }) => {
	if (userProducts.length !== 0) {
		for (let component of userProducts) {
			ProductsComponents.push(
				<CardShow navigation={navigation} key={count} id={component} />,
			)
		}
	} else {
		ProductsComponents.push(
			<View style={[styles.center]}>
				<Text>Você ainda não é dono de nenhuma quadra!</Text>
			</View>,
		)
	}

	// const userData = usersDataJson[route.params.userId]
	const userData = usersDataJson["0002"]
	const userProducts = userData["productsIds"]

	return (
		<>
			<ScrollView style={{ paddingTop: 30 }}>
				<View style={[styles.row, { justifyContent: "space-between" }]}>
					<IconButton
						icon="home"
						onPress={() =>
							navigation.navigate("main", { userId: id })
						}
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
								create: true,
								productId: "9999",
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
