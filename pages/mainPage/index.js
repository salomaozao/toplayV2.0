import * as React from "react"
import { View, Dimensions, Image, ScrollView } from "react-native"
import { Text, Colors } from "react-native-paper"

import SearchBar from "./components/searchBar"
import CardGroup from "./components/cardGroups"
import styles from "../styles/styles"
import media from "../../media/media"

const Show1 = ({}) => (
	<View
		style={[
			styles.my2,
			{ justifyContent: "center", height: 50, width: "95%" },
		]}
	>
		<Image
			style={{
				width: "100%",
				height: "100%",
				position: "absolute",
				zIndex: -10,
			}}
			source={{ uri: media.quadra1 }}
		/>
		<Text
			style={[
				styles.titleSecondary,
				{
					textAlign: "left",
					backgroundColor: "rgba(52, 52, 52, 0.3)",
					padding: 8,
					color: Colors.grey900,
				},
			]}
		>
			Quadra São Joaão
		</Text>
	</View>
)

const Show2 = () => (
	<View style={{ width: 100, height: 100 }}>
		<Text>Quadra Seu José</Text>
	</View>
)

const Slide = () => {
	// let ComponentsList = []
	// ComponentsList = [<Show2 />, <Show2 />, <Show2 />]
	// for (let i; i === 3; i++) {
	// 	ComponentsList.push(Show2)
	// }

	return (
		<View style={[styles.row, styles.border]}>
			<Show2 />
			<Show2 />
			<Show2 />
		</View>
	)
}

const mainPage = (userData) => {
	userData = {
		name: "Gabriel",
	}

	return (
		<ScrollView>
			<View
				style={[
					styles.center,
					styles.bgPrimary,
					styles.col,
					{ height: 200 },
				]}
			>
				<View style={{ right: 20 }}>
					<Text style={[styles.title]}>Olá, {userData.name}!</Text>
					<Text style={[styles.small]}>configurar sua conta</Text>
				</View>
			</View>
			<SearchBar />
			<View style={styles.mt4}>
				<Text
					style={[
						styles.titleSecondary,
						styles.ml2,
						styles.textCenter,
						{ fontSize: 20, color: Colors.grey800 },
					]}
				>
					Mais recentes
				</Text>
				<View style={[{ alignItems: "center" }]}>
					<Show1 />
					<Show1 />
					<Show1 />
				</View>
			</View>
			<View style={styles.my2}>
				<Text
					style={[
						styles.titleSecondary,
						styles.ml2,
						styles.mb2,
						styles.textCenter,
						{ fontSize: 20, color: Colors.grey800 },
					]}
				>
					Populares na sua cidade
				</Text>
				<CardGroup />
			</View>
		</ScrollView>
	)
}

export default mainPage
