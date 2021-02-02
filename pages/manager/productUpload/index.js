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
	Colors,
} from "react-native-paper"
import styles from "../../styles/styles"

import Carousel from "./components/carousel"
import Calendar from "./components/calendar"
import Datatable from "./components/datatable"
import PopupDialog from "./components/PopupDialog"
import PopubAbout from "./components/popupAbout"
import PopupAbout from "./components/popupAbout"

const ProductView = ({ navigation }) => {
	const [isDialogVisile, setDialogVisible] = React.useState(false)
	const showDialog = () => setDialogVisible(true)

	const [isAboutVisible, setAboutVisible] = React.useState(false)
	const showAbout = () => setAboutVisible(true)

	return (
		<>
			<ScrollView
				style={{
					height: Dimensions.get("window").height - 90,
				}}
			>
				<View>
					<View style={[styles.mx2, { marginTop: 25 }]}>
						<View style={styles.title}>
							<Text style={[styles.title, styles.textCenter]}>
								Quadra São João
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
								São João Nascimento
							</Text>
						</View>
						<View
							style={[
								styles.row,
								styles.ml2,
								styles.mt2,
								styles.centerX,
							]}
						>
							<Chip
								icon="information"
								onPress={() => console.log("Pressed")}
							>
								Esta quadra não é aberta em fins de semana
							</Chip>
						</View>
						<View style={styles.centerX}>
							<Drawer.Item
								style={{ backgroundColor: "#5dc8d4" }}
								icon="star"
								label="CAMPEONATOS!"
							/>
						</View>
					</View>
					<Surface style={[styles.py2, styles.my2, styles.shadowLg]}>
						<View style={{borderStyle: "dashed"}}>
							<Text>asdmiasmd</Text>
						</View>
						<Datatable />
					</Surface>
					<View style={styles.col}>
						<View>
							{/* <Surface style={[styles.my2, styles.shadowMd]}> */}
							<Calendar />
							{/* </Surface> */}
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
										R$18,00
										<Text
											style={[
												styles.small,
												styles.textLight2,
											]}
										>
											por hora
										</Text>
									</Text>
									<Button
										mode="contained"
										contentStyle={styles.bgPrimary}
										onPress={showDialog}
									>
										alugar
									</Button>
									<View>
										<TouchableHighlight>
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
										</TouchableHighlight>
									</View>
								</Surface>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	)
}
export default ProductView
