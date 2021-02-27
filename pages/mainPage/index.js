import * as React from "react"
import {
	View,
	Dimensions,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native"
import {
	Text,
	Colors,
	Avatar,
	Button,
	IconButton,
	Surface,
} from "react-native-paper"

import SearchBar from "./components/searchBar"
import CardGroup from "./components/cardGroups"
import { CardRect, CardRectBigger } from "./components/cards"

import styles from "../styles/styles"
import media from "../../media/media"
import data from "../testing/data/quadras.json"




const mainPage = ({ userData, navigation }) => {
	userData = {
		name: "Gabriel",
	}

	const recommendedProdsIds = ["0000", "0001", "0002", "0003"]

	return (
		<ScrollView>
			<View
				style={[
					styles.bgPrimary,
					{
						height: 140,
						justifyContent: "space-between",
						flexDirection: "row",
						paddingTop: 25,
					},
				]}
			>
				<View
					style={{
						height: "100%",
						justifyContent: "center",
						bottom: 10,
						left: 5,
					}}
				>
					<Text style={[styles.title]}>Olá, {userData.name}!</Text>
				</View>
				<View
					style={[
						styles.mx2,
						{
							justifyContent: "center",
							bottom: 10,
						},
					]}
				>
					<TouchableOpacity
						onPress={() => navigation.navigate("acc")}
					>
						<Avatar.Text size={48} label="GS" />
					</TouchableOpacity>
				</View>
			</View>
			<View styles={styles.shadowXl}>
				<SearchBar />
			</View>
			<View style={styles.mt4}>
				<Text
					style={[
						styles.titleSecondary,
						styles.ml2,
						styles.textCenter,
						{ color: Colors.grey800 },
					]}
				>
					Mais recentes
				</Text>
				<View style={[{ alignItems: "center" }]}>
					<CardRect
						id={recommendedProdsIds[0]}
						navigation={navigation}
					/>
					<CardRect
						id={recommendedProdsIds[1]}
						navigation={navigation}
					/>
					<CardRect
						id={recommendedProdsIds[2]}
						navigation={navigation}
					/>
				</View>
			</View>
			<View style={styles.my2}>
				<Text
					style={[
						styles.titleSecondary,
						styles.ml2,
						styles.my2,
						styles.textCenter,
						{ color: Colors.grey800 },
					]}
				>
					Populares na sua cidade
				</Text>
				<CardGroup navigation={navigation} />
			</View>
			<View>
				<Text
					style={[
						styles.titleSecondary,
						styles.ml2,
						styles.my4,
						styles.textCenter,
						{ color: Colors.grey800 },
					]}
				>
					Você também pode gostar
				</Text>
				<View>
					<CardRectBigger
						side="left"
						id={recommendedProdsIds[0]}
						navigation={navigation}
					/>
					<CardRectBigger
						side="right"
						id={recommendedProdsIds[1]}
						navigation={navigation}
					/>
					<CardRectBigger
						side="left"
						id={recommendedProdsIds[3]}
						navigation={navigation}
					/>
				</View>
			</View>
		</ScrollView>
	)
}

export default mainPage
