import React from "react"
import {
	View,
	Image,
	Dimensions,
	ScrollView,
	TouchableOpacity,
} from "react-native"
import {
	Text,
	Button,
	Chip,
	Avatar,
	Drawer,
	Surface,
	Portal,
	Dialog,
	Colors,
} from "react-native-paper"

import styles from "../styles/styles"
import data from "../testing/data/quadras.json"

import Carousel from "./components/carousel"
import Calendar from "./components/calendar"
import Datatable from "./components/datatable"
import PopupDialog from "./components/popupDialog"
import PopupAbout from "./components/popupAbout"

//Todo: receive product details and pass it on to payment thrue routing

const ProductView = ({ navigation, route }) => {
	const [isDialogVisile, setDialogVisible] = React.useState(false)
	const showDialog = () => setDialogVisible(true)

	const [isAboutVisible, setAboutVisible] = React.useState(false)
	const showAbout = () => setAboutVisible(true)

	const product = data[route.params.productId]

	const date = new Date()
	const dd = String(date.getDate()).padStart(2, "0")
	const mm = String(date.getMonth() + 1).padStart(2, "0") //January is 0!
	const yyyy = date.getFullYear()

	const today = yyyy + "/" + mm + "/" + dd

	var { width } = Dimensions.get("window")
	return (
		<>
			<PopupDialog
				visible={isDialogVisile}
				hideDialog={() => setDialogVisible(false)}
				navigation={navigation}
				availableTimes={product.daysTimes[today]}
				id={route.params.productId}
			/>

			<PopupAbout
				visible={isAboutVisible}
				hideDialog={() => setAboutVisible(false)}
			/>
			<ScrollView
				style={{
					marginTop: 25,
				}}
			>
				<View>
					<View style={[styles.mx2, { marginTop: 25 }]}>
						<View>
							<Text style={[styles.title, styles.textCenter]}>
								{product.name}
							</Text>
						</View>
						<View
							style={[
								styles.row,
								styles.centerX,
								styles.ml4,
								{ position: "relative" },
							]}
						>
							<Avatar.Image
								size={24}
								source={{ uri: "https://picsum.photos/700" }}
								style={styles.mr2}
							/>
							<Text style={[styles.small]}>{product.owner}</Text>
						</View>
						<View
							style={[
								styles.row,
								styles.ml2,
								styles.mt2,
								styles.centerX,
							]}
						></View>
						<View style={styles.centerX}>
							{/* <Drawer.Item
								style={{ backgroundColor: "#5dc8d4" }}
								icon="star"
								label="CAMPEONATOS!"
							/> */}
						</View>
					</View>
					<Surface style={[styles.py2, styles.my2, styles.shadowLg]}>
						<Carousel />
						<Datatable />
					</Surface>
					<View style={styles.col}>
						<View>
							<Calendar />
							<View
								style={[{ alignSelf: "flex-end" }, styles.mx4]}
							>
								<Surface
									style={[
										styles.shadowLg,
										styles.my2,
										styles.round,
										{ padding: 8 },
									]}
								>
									<Text
										style={[
											styles.title,
											styles.textLight2,
										]}
									>
										{product.price
											.toFixed(2)
											.toString()
											.replace(".", ",")}
										<Text
											style={[
												styles.small,
												styles.textLight2,
											]}
										>
											por hora
										</Text>
									</Text>

									<View>
										<TouchableOpacity>
											<Text
												style={[
													styles.small,
													styles.mt2,
													styles.underline,
													styles.textLight2,
													{
														textAlign: "right",
													},
												]}
												onPress={showAbout}
											>
												Saber mais
											</Text>
										</TouchableOpacity>
									</View>
								</Surface>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<Button
				mode="contained"
				contentStyle={styles.bgPrimary}
				onPress={showDialog}
				style={{ width: width }}
			>
				alugar
			</Button>
		</>
	)
}
export default ProductView
