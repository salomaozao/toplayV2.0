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
import data from "../../testing/data/quadras.json"

var ProductListingArr = []

var ProductListingArr = ["0000", "0003"]

var ProductsComponents = []

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
			<ScrollView style={{ paddingTop: 30 }}>
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
