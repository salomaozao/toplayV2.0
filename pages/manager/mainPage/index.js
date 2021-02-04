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

import styles from "../../styles/styles"

const mainPage = ({ userData, navigation }) => {
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
						flexDirection: "column",
					}}
				>
					<Text style={[styles.title]}>Olá, {userData.name}!</Text>
					<Text style={[styles.underline, styles.small]}>
						Acessar suas quadras
					</Text>
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
					<CardRect i={0} navigation={navigation} />
					<CardRect i={1} navigation={navigation} />
					<CardRect i={2} navigation={navigation} />
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
				<CardGroup navigation={navigation} />
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
					<CardRectBigger side="left" i={0} navigation={navigation} />
					<CardRectBigger
						side="right"
						i={1}
						navigation={navigation}
					/>
					<CardRectBigger side="left" i={2} navigation={navigation} />
				</View>
			</View>
		</ScrollView>
	)
}

export default mainPage
