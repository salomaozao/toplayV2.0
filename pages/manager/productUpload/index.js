import React, { useState } from "react"
import {
	View,
	ScrollView,
	TouchableOpacity,
	Image,
	TextInput as NativeTextInput,
	Dimensions,
} from "react-native"
import {
	Text,
	Button,
	Avatar,
	Surface,
	Colors,
	TextInput,
	List,
} from "react-native-paper"

import PopupDialog from "./components/PopupDialog"
import { BttnsDaysList } from "./components/bttnsDaysList"
import ImagesUploadBox from "./components/imagesUploadBox"

// import * as ImagePicker from "react-native-image-picker" // TODO: ImageUpload
import * as ImagePicker from "react-native-image-crop-picker"
import DateTimePicker from "@react-native-community/datetimepicker"

import Icon from "react-native-vector-icons/FontAwesome"

import productsData from "../../testing/data/quadras.json"
import userDataJSON from "../../testing/data/users.json"

import styles from "../../styles/styles"
import media from "../../../media/media"

const uploadImg = () => {
	ImagePicker.openCamera({ width: 300, height: 300 })
}

const ProductUpload = ({ navigation, route }) => {
	// routes
	var { create, userId, productId } = route.params
	var product = productsData[productId]
	var userData = userDataJSON[userId]

	// states
	const [nameVal, setNameVal] = React.useState("")
	const [priceVal, setPriceVal] = React.useState("")
	const [abtVal, setAbtVal] = React.useState("")

	React.useEffect(() => {
		create ? clearValues() : setValues()
	})

	function setValues() {
		setNameVal(product.name)
		setPriceVal(product.price.toFixed(2).toString().replace(".", ","))
		setAbtVal(product.about)
	}

	function clearValues() {
		setNameVal()
		setPriceVal()
		setAbtVal()
	}

	// DOM
	const [isDatePickerVisible, setDatePickerVisible] = React.useState(false)
	const [isDialogVisible, setDialogVisible] = React.useState(false)
	const [time, setTime] = React.useState(new Date())

	return (
		<>
			{isDatePickerVisible && (
				<DateTimePicker
					value={time}
					mode={"time"}
					is24Hour={true}
					display="clock"
					onChange={(e, changeTime) => {
						setDatePickerVisible(false)
						changeTime === undefined
							? setTime(new Date())
							: setTime(changeTime)
					}}
				/>
			)}
			<PopupDialog
				confirmFunction={() => {}}
				hideDialog={() => setDialogVisible(!isDialogVisible)}
				visible={isDialogVisible}
				values={{
					name: nameVal,
					price: priceVal,
					about: abtVal,
				}}
			/>
			<ScrollView
				style={{
					paddingTop: 20,
				}}
			>
				<View>
					<View style={[styles.m2, { marginTop: 25 }]}>
						<View style={styles.title}>
							<TextInput
								mode="outlined"
								label={"Nome da sua quadra"}
								value={nameVal}
								onChange={(text) => setNameVal(text)}
								style={styles.m2}
							/>
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
								{/*userData.name */} Você
							</Text>
						</View>
					</View>

					{/* <ImagesUploadBox /> */}

					<View style={styles.col}>
						<View>
							<Surface>
								<Text
									style={[
										styles.centerSelf,
										styles.titleSecondary,
										styles.py2,
									]}
								>
									Agendamentos
								</Text>

								<BttnsDaysList
									times={
										create
											? [[], [], [], [], [], [], []]
											: product.daysTimes
									}
									setDatePickerVisible={setDatePickerVisible}
									style={[
										styles.shadowLg,
										styles.m4,
										styles.py2,
									]}
								/>
							</Surface>

							<View
								style={[{ alignSelf: "flex-end" }, styles.mx4]}
							>
								<Surface
									style={[
										styles.shadowMd,
										styles.my4,
										styles.round,
										{ padding: 8 },
									]}
								>
									<View
										style={[
											styles.row,
											styles.mb2,
											{ alignItems: "flex-end" },
										]}
									>
										<TextInput
											placeholder="Preço"
											mode="outlined"
											value={priceVal}
											onChange={(text) =>
												setPriceVal(text)
											}
											theme={{
												colors: { text: "white" },
											}}
											style={{
												backgroundColor:
													"rgba(50,50,50,0.5)",
												width: "50%",
												marginRight: 10,
											}}
										/>
										<Text
											style={[
												styles.small,
												styles.textLight2,
												{ marginBottom: 5 },
											]}
										>
											por hora
										</Text>
									</View>
								</Surface>
							</View>
							<View
								style={[
									{ width: "80%", alignSelf: "center" },
									styles.my2,
								]}
							>
								<Text
									style={[
										styles.titleSecondary,
										styles.textCenter,
									]}
								>
									Sobre a quadra
								</Text>
								<Text style={styles.textCenter}>
									Escreva um pequeno texto falando sobre a
									quadra.
								</Text>
								<TextInput
									style={[{ height: 100 }, styles.my2]}
									value={abtVal}
									onChange={(text) => setAbtVal(text)}
								/>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<Button
				color={Colors.grey900}
				mode="outlined"
				style={[styles.bgPrimary]}
				onPress={() => setDialogVisible(true)}
			>
				{create ? "Anúnciar!" : "Atualizar!"}
			</Button>
		</>
	)
}
export default ProductUpload
