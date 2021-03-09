import React, { useState } from "react"
import {
	View,
	ScrollView,
	TouchableOpacity,
	Image,
	TextInput as NativeTextInput,
} from "react-native"
import {
	Text,
	Button,
	Avatar,
	Surface,
	Colors,
	TextInput,
} from "react-native-paper"

import Calendar from "./components/calendar"
import DatatableInsert from "./components/datatableInsert"
import PopupDialog from "./components/PopupDialog"
// import * as ImagePicker from "react-native-image-picker" //! TODO: ImageUpload
import * as ImagePicker from "react-native-image-crop-picker"
import DateTimePicker from "@react-native-community/datetimepicker" // ! TODO: Times

import Icon from "react-native-vector-icons/FontAwesome"

import styles from "../../styles/styles"
import data from "../../testing/data/quadras.json"
import media from "../../../media/media"

const Clock = () => {
	const [date, setDate] = useState(new Date(1598051730000))
	const [mode, setMode] = useState("date")
	const [show, setShow] = useState(false)

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date
		setShow(Platform.OS === "ios")
		setDate(currentDate)
	}

	const showMode = (currentMode) => {
		setShow(true)
		setMode(currentMode)
	}

	const showDatepicker = () => {
		showMode("date")
	}

	const showTimepicker = () => {
		showMode("time")
	}

	return (
		<View>
			<View>
				<Button onPress={showDatepicker}>"Show date picker!"</Button>
			</View>
			<View>
				<Button onPress={showTimepicker}>"Show time picker!"</Button>
			</View>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={date}
					mode={mode}
					is24Hour={true}
					display="default"
					onChange={onChange}
				/>
			)}
		</View>
	)
}

const BttnsDaysList = ({ days, setTimeSelectShow }) => {
	const times = {
		segunda: React.useState([]),
		terça: React.useState([]),
		quarta: React.useState([]),
		quinta: React.useState([]),
		sexta: React.useState([]),
		sabado: React.useState([]),
		domingo: React.useState([]),
	}

	const weekDays = [
		"segunda",
		"terça",
		"quarta",
		"quinta",
		"sexta",
		"sábado",
		"domingo",
	]

	return (
		<View
			style={[
				styles.center,
				styles.row,
				{ justifyContent: "space-evenly", alignItems: "flex-end" },
			]}
		>
			<Button mode="outlined" style={styles.my2} color={Colors.green400}>
				{weekDays[days[0]]}
			</Button>
			{days.length === 2 && (
				<Button
					mode="outlined"
					style={styles.my2}
					color={Colors.green400}
					onPress={() => {
						//show clock
						setTimeSelectShow(true)

						//get clock time >> time

						//hide clock
						//times[days[1]][2](time) //<=>setStatue(time)
					}}
				>
					{weekDays[days[1]]}
				</Button>
			)}
		</View>
	)
}

const ImgList = ({ imgsArr }) => {
	const [imgsCompArr, setImgCompArr] = React.useState([])

	let c = 0
	return (
		<Image
			style={{
				width: Dimensions.get("window").width * 0.1,
				height: width * 2,
			}}
		/>
	)
}

const ImagesUploadBox = () => {
	const [imgs, setImgs] = React.useState([
		media.quadra1,
		media.quadra2,
		media.quadra3,
	])
	return (
		<TouchableOpacity
			style={[
				styles.my2,
				styles.centerSelf,
				styles.center,
				{
					width: "90%",
					height: 200,
					borderWidth: 4,
					borderStyle: "dashed",
					borderRadius: 1,
				},
			]}
			onPress={() => {
				ImagePicker.openCamera({ width: 300, height: 300 })
			}}
		>
			<Icon name="camera" size={24} />
			<Text style={styles.titleSecondary}>Fazer upload de imagens!</Text>
			<View>
				{/* <ImgList />
				 */}
			</View>
		</TouchableOpacity>
	)
}
const ProductUpload = ({ navigation, route }) => {
	const [isDialogVisible, setDialogVisible] = React.useState(false)

	var create = undefined
	var { create } = route.params
	var product = data[route.params.productId]

	const [nameVal, setNameVal] = React.useState(create ? "" : product.name)
	const [priceVal, setPriceVal] = React.useState(
		create ? "" : product.price.toFixed(2).toString().replace(".", ","),
	)
	const [abtVal, setAbtVal] = React.useState(create ? "" : product.about)

	const [showTimeSelect, setTimeSelectShow] = React.useState(true)

	const [time, setTime] = React.useState("")

	React.useEffect(() => {
		if (create) {
			setNameVal("")
			setPriceVal("")
			setAbtVal("")
		} else {
			setNameVal(product.name)
			setPriceVal(product.price.toFixed(2).toString().replace(".", ","))
			setAbtVal(product.about)
		}
	})

	return (
		<>
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
					marginTop: 20,
				}}
			>
				<View>
					{/* <Clock /> */}
					<View style={[styles.m2, { marginTop: 25 }]}>
						<View style={styles.title}>
							<TextInput
								mode="outlined"
								label={"Nome da sua quadra"}
								value={nameVal}
								onChangeText={(text) => setNameVal(text)}
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
							{/* ! userData */}
							<Text style={[styles.small]}>
								{/*userData.name */} Você
							</Text>
						</View>
					</View>

					<ImagesUploadBox />

					<View style={styles.col}>
						<View>
							<Calendar />
							<Text
								style={[
									styles.centerSelf,
									styles.titleSecondary,
								]}
							>
								Agendamentos
							</Text>

							<BttnsDaysList
								setTimeSelectShow={setTimeSelectShow}
								days={[0, 1]}
							/>
							<BttnsDaysList
								setTimeSelectShow={setTimeSelectShow}
								days={[2, 3]}
							/>
							<BttnsDaysList
								setTimeSelectShow={setTimeSelectShow}
								days={[4, 5]}
							/>
							<BttnsDaysList
								setTimeSelectShow={setTimeSelectShow}
								days={[6]}
							/>

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
											// ! Make a proper filter
											onChangeText={(text) => {
												if (
													!text.includes(
														"abcdefghijklmnopqrstuvwxyz",
													)
												) {
													setPriceVal(text)
												}
											}}
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
									onChangeText={(text) => setAbtVal(text)}
								/>
							</View>
							<Button
								color={Colors.grey900}
								mode="outlined"
								style={[styles.bgPrimary]}
								onPress={() => setDialogVisible(true)}
							>
								{create ? "Anúnciar!" : "Atualizar!"}
							</Button>
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	)
}
export default ProductUpload
