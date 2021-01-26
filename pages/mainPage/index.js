import * as React from "react"
import { View, Dimensions, Image, ScrollView } from "react-native"
import { Text, Colors, Avatar, Button, IconButton,  } from "react-native-paper"

import SearchBar from "./components/searchBar"
import CardGroup from "./components/cardGroups"
import styles from "../styles/styles"
import media from "../../media/media"

const CardRect = () => (
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

const CardRectBigger = ({ img, side }) => {
	const iconSize = Dimensions.get("screen").width * 0.035
	return (
		<View
			style={[
				styles.border,
				styles.my2,
				styles.mx4,
				{
					justifyContent: "space-between",
					alignSelf: side === "left" ? "flex-start" : "flex-end",
					flexDirection: side === "left" ? "row" : "row-reverse",
					width: "80%",
					height: 150,
				},
			]}
		>
			<View style={[styles.center, { width: "45%" }]}>
				<Image
					source={{ uri: media.quadra1 }}
					style={{ width: "95%", height: "95%" }}
				/>
			</View>
			<View
				style={[
					styles.col,
					styles.mx2,
					styles.mt2,
					{ alignContent: "center", justifyContent: "space-between" },
				]}
			>
				<View>
					<Text style={[styles.titleSecondary, { fontSize: 20 }]}>
						Quadra Seu José
					</Text>
					<View style={[styles.row, { alignContent: "center" }]}>
						<IconButton
							icon="map-marker"
							size={iconSize}
							style={{ bottom: iconSize / 2 }}
						/>
						<Text>Rua exemplo, 123</Text>
					</View>
				</View>
				<View>
					<Button
						mode="contained"
						style={[
							{
								backgroundColor: Colors.green500,
								width: "80%",
								alignSelf: "center",
							},
							styles.mb2,
						]}
					>
						Alugar!
					</Button>
				</View>
			</View>
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
					styles.bgPrimary,
					{
						height: 200,
						justifyContent: "space-between",
						flexDirection: "row",
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
					<Text style={[styles.small, styles.underline]}>
						configurar sua conta
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
					<CardRect />
					<CardRect />
					<CardRect />
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
					<CardRectBigger side="left" />
					<CardRectBigger side="right" />
				</View>
			</View>
		</ScrollView>
	)
}

export default mainPage
