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
	Avatar,
	Surface,
	Colors,
	TextInput,
} from "react-native-paper"
import styles from "../../styles/styles"

import Carousel from "./components/carousel"
import Calendar from "./components/calendar"
import DatatableInsert from "./components/datatableInsert"
import PopupDialog from "./components/PopupDialog"
import PopubAbout from "./components/popupAbout"
import PopupAbout from "./components/popupAbout"

/* 
TODO: 
1) DATATABLE COMPONENTS AD INPUTS
2) VALIDATION AND DIALOG
3) INPUT FORMATS

*/


import Icon from "react-native-vector-icons/FontAwesome"
const ImagesUploadBox = () => (
	<View
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
	>
		<Icon name="camera" size={24} />
		<Text style={styles.titleSecondary}>Fazer upload de imagens!</Text>
	</View>
)

const ProductUpload = ({ navigation }) => {
	const [isDialogVisile, setDialogVisible] = React.useState(false)
	const showDialog = () => setDialogVisible(true)

	const [isAboutVisible, setAboutVisible] = React.useState(false)
	const showAbout = () => setAboutVisible(true)

	return (
		<>
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
								label="Nome da quadra"
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
								São João Nascimento
							</Text>
						</View>
					</View>

					<ImagesUploadBox />

					<Surface style={[styles.py2, styles.my2, styles.shadowLg]}>
						<DatatableInsert />
					</Surface>
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
											]}
										>
											por hora
										</Text>
									</View>

									<Button
										mode="contained"
										contentStyle={styles.bgPrimary}
										onPress={showDialog}
									>
										alugar
									</Button>
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
								/>
							</View>
							<Button
								color={Colors.grey900}
								mode="outlined"
								style={[styles.bgPrimary]}
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
