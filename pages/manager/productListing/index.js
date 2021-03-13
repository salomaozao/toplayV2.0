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

const ProductListing = ({ navigation, route }) => {
	const userData = usersDataJson[route.params.userId]
	const userProducts = userData.productsIds
	var ProductsComponents = []
	let count = 0
	if (userProducts.length !== 0) {
		for (let component of userProducts) {
			count++
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
								userId: route.params.userId,
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
