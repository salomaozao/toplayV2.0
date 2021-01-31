import React, { useState } from "react"
import { Image, View } from "react-native"
import { TextInput, Text, Button } from "react-native-paper"
import styles from "../styles/styles"
import media from "../../media/media"
import { max } from "moment"

const AreasData = [
	[{ label: "Seu nome aqui" }, { label: "Coloque aqui seu email" }],
	[{ label: "aksd" }, { label: "Coloque aqui seu email" }],
	[{ label: "sdolsmfkds" }, { label: "Coloque aqui seu email" }],
]

const FormInputArea = ({ i, bttn }) => {
	return (
		<View
			style={[
				styles.col,
				{
					justifyContent: "space-between",
					alignContent: "center",
					height: "100%",
				},
			]}
		>
			<View style={{ alignSelf: "center" }}>
				<Text style={[styles.title]}>Olá, bem vindo!</Text>
				<Text>Coloque seus dados abaixo!</Text>
			</View>

			<View style={[styles.col, styles.centerSelf, { width: "80%" }]}>
				<TextInput style={[styles.my2]} label={AreasData[i][0].label} />
				<TextInput style={[styles.my2]} label={AreasData[i][1].label} />
			</View>

			<View>{bttn}</View>
		</View>
	)
}

const Cadastro = (navigation) => {
	const [index, setIndex] = useState(0)

	const updateIndex = () =>
		index + 1 !== AreasData.length ? setIndex(index + 1) : {}

	return (
		<View>
			<Image
				source={{ uri: media.player }}
				style={{ position: "absolute", width: "100%", height: "100%" }}
			/>
			<View
				style={[
					styles.col,
					{
						paddingTop: 35,
						backgroundColor: "rgba(79, 79, 79, 0.7)",
					},
				]}
			>
				<FormInputArea
					i={index}
					bttn={
						<Button
							onPress={
								index !== AreasData.length
									? updateIndex
									: console.log("Acabou")
							}
						>
							{index + 1 !== AreasData.length
								? "Próximo"
								: "Finalizar!"}
						</Button>
					}
				/>
			</View>
		</View>
	)
}

export default Cadastro
