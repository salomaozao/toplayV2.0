import React, { useState } from "react"
import { Image, View } from "react-native"
import { TextInput, Text, Button, Snackbar, Colors } from "react-native-paper"
import styles from "../styles/styles"
import media from "../../media/media"

const FormInputArea = ({ values }) => {
	return (
		<View
			style={[
				styles.col,
				{
					justifyContent: "space-between",
					alignContent: "center",
				},
			]}
		>
			<View style={[styles.col, styles.centerSelf, { width: "80%" }]}>
				<TextInput
					style={[styles.my2, { backgroundColor: "rgba(0,0,0,0)" }]}
					label={AreasData[index][0]}
				/>
				<TextInput
					style={[styles.my2, { backgroundColor: "rgba(0,0,0,0)" }]}
					label={AreasData[index][1]}
				/>
			</View>
		</View>
	)
}

const Cadastro = ({ navigation }) => {
	const [index, setIndex] = useState(0)

	const [isSnackOn, setSnack] = useState(false)

	const [textValue1, setTextValue1] = React.useState("")
	const [textValue2, setTextValue2] = React.useState("")

	const AreasData = [
		["Seu nome aqui", "Coloque aqui seu email"],
		["Coloque sua senha", "Confirme sua senha"],
		["N° de RG", "Qual seu CEP?"],
	]

	var valuesList = []

	const updateIndex = () => {
		valuesList.push(textValue1, textValue2)

		if (textValue1 !== "" && textValue2 !== "") {
			setTextValue1("")
			setTextValue2("")
			index + 1 !== AreasData.length ? setIndex(index + 1) : {}
		} else {
			setSnack(true)
		}
	}

	return (
		<View style={{ height: "100%" }}>
			<Image
				source={{ uri: media.player }}
				style={{ position: "absolute", width: "100%", height: "95%" }}
			/>
			<View
				style={[
					styles.col,
					{
						paddingTop: 35,
						height: "95%",
						backgroundColor: "rgba(79, 79, 79, 0.7)",
						justifyContent: "space-around",
					},
				]}
			>
				<View style={{ alignSelf: "center" }}>
					<Text style={[styles.title]}>Olá, bem vindo!</Text>
					<Text>Coloque seus dados abaixo!</Text>
				</View>
				<Snackbar
					visible={isSnackOn}
					onDismiss={() => {
						setSnack(false)
					}}
					action={{
						label: "OK",
						onPress: () => {
							setSnack(false)
						},
					}}
				>
					Preencha todos os campos!
				</Snackbar>
				<View
					style={[
						styles.col,
						{
							justifyContent: "space-between",
							alignContent: "center",
						},
					]}
				>
					<View
						style={[
							styles.col,
							styles.centerSelf,
							{ width: "80%" },
						]}
					>
						<TextInput
							theme={{
								colors: {
									primary: Colors.green400,
									text: Colors.grey300,
								},
							}}
							style={[
								styles.my2,

								{
									backgroundColor: "rgba(0,0,0,0)",
								},
							]}
							label={AreasData[index][0]}
							value={textValue1}
							onChangeText={(text) => setTextValue1(text)}
						/>
						<TextInput
							theme={{
								colors: {
									primary: Colors.green400,
									text: Colors.grey300,
								},
							}}
							style={[
								styles.my2,
								{ backgroundColor: "rgba(0,0,0,0)" },
							]}
							label={AreasData[index][1]}
							value={textValue2}
							onChangeText={(text) => setTextValue2(text)}
						/>
					</View>
				</View>
				<View />
				<View />
			</View>
			<Button
				mode="contained"
				contentStyle={styles.bgPrimary}
				onPress={
					index !== AreasData.length - 1
						? updateIndex
						: navigation.navigate("termsAndConditions")
				}
				style={{ height: "5%" }}
			>
				{index + 1 !== AreasData.length ? "Próximo" : "Finalizar!"}
			</Button>
		</View>
	)
}

export default Cadastro
