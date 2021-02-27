import React from "react"
import {
	View,
	ScrollView,
	TouchableOpacity,
	Image,
	Dimensions,
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
import { launchCamera, launchImageLibrary } from "react-native-image-picker"

import Icon from "react-native-vector-icons/FontAwesome"

import styles from "../../styles/styles"
import data from "../../testing/data/quadras.json"
import media from "../../../media/media"

/* 
TODO: 
1) DATATABLE COMPONENTS AD INPUTS
2) VALIDATION AND DIALOG
3) INPUT FORMATS (ex.: XXX-XX-XXX)
4) image upload
5) popups check

6) edition of existing products
*/
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
			// onPress={s }
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

	const product = data[route.params.productId]
	// const product = data["0001"] // ! for debbungging

	const [nameVal, setNameVal] = React.useState(product.name)
	const [priceVal, setPriceVal] = React.useState(
		product.price.toPrecision(product.price.toString().length).toString(),
	)
	const [abtVal, setAbtVal] = React.useState(product.about)

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
							<Text style={[styles.small]}>{product.owner}</Text>
						</View>
					</View>

					<ImagesUploadBox />

					{/* <Surface style={[styles.py2, styles.my2, styles.shadowLg]}>
						<DatatableInsert />
					</Surface>
					// ! Para v2.00
					*/}
					<View style={styles.col}>
						<View>
							<Calendar />
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
								Anúnciar!
							</Button>
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	)
}
export default ProductUpload
