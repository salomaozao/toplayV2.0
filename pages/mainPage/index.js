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
import {CardRect, CardRectBigger} from "./components/cards"

import styles from "../styles/styles"
import media from "../../media/media"

const mainPage = (userData) => {
	userData = {
		name: "Gabriel",
	}

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
					<Avatar.Text size={48} label="GS" />
				</View>
			</View>
			<SearchBar />
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
					<CardRect i={0} />
					<CardRect i={1} />
					<CardRect i={2} />
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
					Populares na sua cidade (slider)
				</Text>
				<CardGroup />
			</View>
			<View>
				<Text
					style={[
						styles.titleSecondary,
						styles.ml2,
						styles.my2,
						styles.textCenter,
						{ color: Colors.grey800 },
					]}
				>
					Você também pode gostar
				</Text>
				<View>
					<CardRectBigger side="left" i={0} />
					<CardRectBigger side="right" i={1} />
					<CardRectBigger side="left" i={2} />
				</View>
			</View>
		</ScrollView>
	)
}

export default mainPage
