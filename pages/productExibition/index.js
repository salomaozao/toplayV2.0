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

import Carousel from "./components/carousel"
import Calendar from "./components/calendar"
import Datatable from "./components/datatable"

//Todo: receive product details and pass it on to payment thrue routing

const PopupDialog = ({ visible, hideDialog, navigation }) => {
	const TimesBttn = ({ time }) => (
		<Button
			onPress={() => {
				hideDialog()
				navigation.navigate("payment", { prodId: "0000" }) // ? pass only one productID?
			}}
			mode="contained"
			compact
			style={[
				styles.shadowMd,

				{
					marginVertical: 5,
					backgroundColor: Colors.grey500,
					borderWidth: 2,
					borderColor: Colors.grey300,
				},
			]}
		>
			{time}
		</Button>
	)

	let BttnsArr = []
	const availableTimes = [
		"11:15",
		"12:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
	]
	for (let data of availableTimes) {
		BttnsArr.push(
			<TimesBttn navigation={navigation} time={data} {...data} />,
		)
	}

	return (
		<Portal>
			<Dialog visible={visible} onDismiss={hideDialog}>
				<Dialog.Title
					style={[styles.titleSecondary, styles.textLight2]}
				>
					Horários
				</Dialog.Title>
				<Dialog.Content>
					<Dialog.ScrollArea
						style={{
							maxHeight: Dimensions.get("screen").width * 0.6,
						}}
					>
						<ScrollView
							contentContainerStyle={{ paddingHorizontal: 24 }}
						>
							{BttnsArr}
						</ScrollView>
					</Dialog.ScrollArea>
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={hideDialog} style={styles.textPrimary}>
						Fechar
					</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	)
}

const PopupAbout = ({ visible, hideDialog }) => (
	<Portal>
		<Dialog visible={visible} onDismiss={hideDialog}>
			<Dialog.Title>
				<View>
					<Text
						style={[
							styles.textSecondary,
							styles.title,
							{ textAlign: "left", marginTop: 16 },
						]}
					>
						Sobre a quadra
					</Text>
				</View>
			</Dialog.Title>
			<Dialog.Content>
				<View style={[{ marginHorizontal: 32 }, styles.mt4]}>
					<Text style={{ textAlign: "left" }}>
						orem ipsum dolor sit amet, consectetur adipiscing it.In
						quis erat eget nisi mattis ornare dictum a a.Donec
						dignissim neque sit amet molestie consequat
					</Text>
				</View>
			</Dialog.Content>
			<Dialog.Actions>
				<Button
					onPress={() => {
						hideDialog
					}}
					style={styles.textPrimary}
				>
					Fechar
				</Button>
				<Button icon="share" />
			</Dialog.Actions>
		</Dialog>
	</Portal>
)

const ProductView = ({ navigation }) => {
	const [isDialogVisile, setDialogVisible] = React.useState(false)
	const showDialog = () => setDialogVisible(true)

	const [isAboutVisible, setAboutVisible] = React.useState(false)
	const showAbout = () => setAboutVisible(true)

	return (
		<>
			<PopupDialog
				visible={isDialogVisile}
				hideDialog={() => setDialogVisible(false)}
				navigation={navigation}
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
						<Carousel />
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
		</>
	)
}
export default ProductView
