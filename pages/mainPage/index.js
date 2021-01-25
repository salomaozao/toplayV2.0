import * as React from "react"
import { View, Dimensions, Image, ScrollView } from "react-native"
import { Text } from "react-native-paper"

import CardGroup from "./components/cardGroups"
import styles from "../../styles/styles"

const Show1 = () => (
	<View
		style={[
			styles.border,
			styles.my2,
			{ justifyContent: "center", height: 50, width: "95%" },
		]}
	>
		<Text
			style={[styles.titleSecondary, styles.mx2, { textAlign: "left" }]}
		>
			Quadra São João
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
		<>
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
						<Text style={[styles.title]}>
							Olá, {userData.name}!
						</Text>
						<Text style={[styles.small]}>configurar sua conta</Text>
					</View>
				</View>
				<View style={styles.mt4}>
					<Text>Mais recentes</Text>
					<View style={[{ alignItems: "center" }]}>
						<Show1 />
						<Show1 />
						<Show1 />
					</View>
					<CardGroup />
				</View>
			</ScrollView>
		</>
	)
}

export default mainPage
