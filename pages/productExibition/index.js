import React from "react"
import {
	Text,
	Button,
	Chip,
	Avatar,
	Appbar, // no fundo
	Drawer,
	Dialog,
	Portal,
	Surface,
	Paragraph,
} from "react-native-paper"
import { View, Image, Dimensions, ScrollView } from "react-native"
import styles from "../../styles/styles"

// import Carousel from "./components/carousel"
import Calendar from "./components/calendar"
import Datatable from "./components/datatable"
import PopupDialog from "./components/PopupDialog"
import PopubAbout from "./components/popupAbout"
import { TouchableHighlight } from "react-native-gesture-handler"
import PopupAbout from "./components/popupAbout"

const ProductView = () => {
	const [isDialogVisile, setDialogVisible] = React.useState(false)
	const showDialog = () => setDialogVisible(true)

	const [isAboutVisible, setAboutVisible] = React.useState(false)
	const showAbout = () => setAboutVisible(true)

	return (
		<>
			<PopupDialog
				visible={isDialogVisile}
				setVisible={setDialogVisible}
				hideDialog={() => setDialogVisible(false)}
			/>

			<PopupAbout
				visible={isAboutVisible}
				setVisible={setAboutVisible}
				hideDialog={() => setAboutVisible(false)}
			/>
			<ScrollView
				style={{
					height: Dimensions.get("window").height - 90,
				}}
			>
				<View>
					<View style={[styles.mx2]}>
						<View style={styles.title}>
							<Text style={[styles.title, styles.textCenter]}>
								Nome da quadra
							</Text>
						</View>
						<View
							style={[
								styles.row,
								styles.centerX,
								styles.ml2,
								{ position: "relative" },
							]}
						>
							<Avatar.Image
								size={24}
								source={{ uri: "https://picsum.photos/700" }}
								style={styles.mr2}
							/>
							<Text style={[styles.small]}>Nome do dono</Text>
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
					<View style={styles.col}>
						<Datatable />
						<View>
							<Calendar />
							<View
								style={[{ alignSelf: "flex-end" }, styles.mx4]}
							>
								<Surface>
									<Text style={styles.title}>
										R$18,00
										<Text style={styles.small}>
											por hora
										</Text>
									</Text>
									<Button
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
