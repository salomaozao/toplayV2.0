import * as React from "react"
import { View, Dimensions, Image, TouchableOpacity } from "react-native"
import { Text, Colors, Button, IconButton, Surface } from "react-native-paper"

import media from "../../../media/media"
import styles from "../../styles/styles"
import data from "../../testing/data/quadras.json"
const imgs = [media.quadra3, media.quadra2, media.quadra1]

const CardSquare = ({ id, navigation }) => {
	const width = Dimensions.get("screen").width * 0.4
	const height = width * 1.2

	const iconSize = Dimensions.get("screen").width * 0.035

	return (
		<TouchableOpacity onPress={() => navigation.navigate("product")}>
			<Surface
				style={[
					{ width: width, height: height },
					styles.border,
					styles.col,
					styles.shadowLg,
					{ borderRadius: 2.5 },
				]}
			>
				<View style={{ height: "90%" }}>
					<Image
						style={{
							width: "100%",
							height: "65%",
							borderTopLeftRadius: 2.5,
							borderTopRightRadius: 2.5,
						}}
						source={{ uri: media[data[id].img] }}
					/>
					<Text
						style={[
							styles.textCenter,
							styles.mt2,
							styles.textLight,
							{ fontWeight: "500" },
						]}
					>
						Quadra são joão
					</Text>
				</View>
				<View
					style={[
						{
							borderTopWidth: 0.5,
						},
					]}
				>
					<View
						style={[
							styles.row,
							{
								alignContent: "center",
								backgroundColor: Colors.grey900,
								justifyContent: "flex-start",
							},
						]}
					>
						<IconButton
							icon="map-marker"
							size={iconSize}
							style={{ bottom: iconSize / 2 }}
						/>
						<Text style={{ width: "100%" }}>Rua exemplo, 123</Text>
					</View>
				</View>
			</Surface>
		</TouchableOpacity>
	)
}

const CardRect = ({ id, navigation }) => (
	<Surface
		style={[
			styles.my2,
			styles.shadowLg,

			{ justifyContent: "center", height: 50, width: "95%" },
		]}
	>
		<TouchableOpacity onPress={() => navigation.navigate("product")}>
			<Image
				style={[
					{
						width: "100%",
						height: "100%",
						position: "absolute",
						zIndex: -10,
					},
				]}
				source={{ uri: media[data[id].img] }}
			/>
			<Text
				style={[
					styles.titleSecondary,
					styles.textLight,
					{
						backgroundColor: "rgba(52, 52, 52, 0.3)",
						padding: 8,
					},
				]}
			>
				{data[id].name}
			</Text>
		</TouchableOpacity>
	</Surface>
)

const CardRectBigger = ({ i, side, navigation }) => {
	const iconSize = Dimensions.get("screen").width * 0.035
	return (
		<Surface
			style={[
				styles.border,
				styles.my2,
				styles.mx4,
				styles.rounded,
				styles.shadowLg,
				styles.textLight,
				{
					justifyContent: "space-between",
					alignSelf: side === "left" ? "flex-start" : "flex-end",
					flexDirection: side === "left" ? "row" : "row-reverse",
					width: "85%",
					height: 150,
				},
			]}
		>
			<View style={[styles.center, { width: "45%" }]}>
				<Image
					source={{ uri: imgs[i] }}
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
					<Text
						style={[
							styles.titleSecondary,
							styles.textLight,
							{ fontSize: 20 },
						]}
					>
						Quadra Seu José
					</Text>
					<View style={[styles.row, { alignContent: "center" }]}>
						<IconButton
							icon="map-marker"
							size={iconSize}
							style={{ bottom: iconSize / 2 }}
						/>
						<Text style={{ color: Colors.grey500 }}>
							Rua exemplo, 123
						</Text>
					</View>
				</View>
				<View>
					<Button
						mode="contained"
						onPress={() => navigation.navigate("product")}
						style={[
							{
								backgroundColor: Colors.green500,
								width: "80%",
							},
							styles.shadowWhiteLg,
							styles.mb2,
						]}
					>
						Alugar!
					</Button>
				</View>
			</View>
		</Surface>
	)
}

export { CardRect, CardRectBigger, CardSquare }
