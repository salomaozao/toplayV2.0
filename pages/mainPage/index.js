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
	TouchableRipple,
	Surface,
} from "react-native-paper"

import SearchBar from "./components/searchBar"
import CardGroup from "./components/cardGroups"
import { CardRect, CardRectBigger } from "./components/cards"

import styles from "../styles/styles"
import media from "../../media/media"
import data from "../testing/data/quadras.json"
import userDataJSON from "../testing/data/users.json"

const mainPage = ({ navigation, route }) => {
	// const userId = route.params.userId
	const userId = "0001"
	const userData = userData[userId] || none

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
						flexDirection: "column",
					}}
				>
					<Text style={[styles.title]}>Olá, {userData.name}!</Text>
					{userData.type === "owner" && (
						<TouchableRipple
							rippleColor="rgba(100,100,100,0.4)"
							onPress={() =>
								navigation.navigate("manager_ProductListing", {
									userId: userId,
								})
							}
						>
							<Text style={[styles.underline, styles.small]}>
								Acessar suas quadras
							</Text>
						</TouchableRipple>
					)}
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
						onPress={() =>
							navigation.navigate("acc", { userId: userId })
						}
					>
						{userData.imageURI ? (
							<Avatar.Image
								size={48}
								source={{ uri: userData.imageURI }}
							/>
						) : (
							<Avatar.Text size={48} label={userData.name[0]} />
						)}
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
