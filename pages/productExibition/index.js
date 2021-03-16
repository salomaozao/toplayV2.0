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
	shadow,
} from "react-native-paper"

import styles from "../styles/styles"
import usersData from "../testing/data/users.json"
import productData from "../testing/data/quadras.json"

import Carousel from "./components/carousel"
// import Calendar from "./components/calendar"
// import Datatable from "./components/datatable"
import PopupDialog from "./components/popupDialog"
import PopupAbout from "./components/popupAbout"
import { BttnsDaysList } from "./components/bttnsDaysList"

//Todo: receive product details and pass it on to payment thrue routing

const ProductView = ({ navigation, route }) => {
	const { productId } = route.params
	const product = productData[productId]

	const date = new Date()
	const dd = String(date.getDate()).padStart(2, "0")
	const mm = String(date.getMonth() + 1).padStart(2, "0") //January is 0!
	const yyyy = date.getFullYear()

	const today = yyyy + "/" + mm + "/" + dd

	var { width } = Dimensions.get("window")

	const [isAboutVisible, setAboutVisible] = React.useState(false)

	const shadowStyle = {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: 24,
	}
	return (
		<>
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
							<Text style={[styles.small]}>
								{usersData[product.ownerId].name}
							</Text>
						</View>
						<View
							style={[
								styles.row,
								styles.ml2,
								styles.mt2,
								styles.centerX,
							]}
						></View>
					</View>

					<View style={styles.col}>
						<View>
							<Surface>
								<View
									style={[
										styles.pt2,
										styles.my2,
										styles.shadowLg,
									]}
								>
									<Carousel />
									{/* <Datatable /> */}
								</View>
								<Text
									style={[
										styles.centerSelf,
										styles.titleSecondary,
										styles.px1,
										styles.my2,
									]}
								>
									Agendamentos
								</Text>

								<BttnsDaysList
									times={product.daysTimes}
									onPress={(e) => showDialog()}
								/>
								<View
									style={[
										{ alignSelf: "flex-end" },
										styles.mx4,
									]}
								>
									<Surface
										style={[
											shadowStyle,
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
													onPress={() =>
														setAboutVisible(true)
													}
												>
													Saber mais
												</Text>
											</TouchableOpacity>
										</View>
									</Surface>
								</View>
							</Surface>
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	)
}
export default ProductView
