import React, { useState } from "react"
import { View, Dimensions } from "react-native"
import { Text, Button } from "react-native-paper"

import FormComponent from "./components/formComponent"
import styles from "../styles/styles"

const cadastro = (props) => {
	const [showingComp, setShowingComp] = useState([
		true,
		false,
		false,
		false,
		false,
	])

	const changeForm = (num) => {
		let arr = [false, false, false, false, false]
		arr[num] = true
		setShowingComp(arr)
	}

	const nextForm = () => {
		changeForm(showingComp.indexOf(true) + 1)
	}

	const finishForm = () => {}

	const updateForm = () => {
		if (showingComp.indexOf(true) === showingComp.length - 1) {
			finishForm()
		} else {
			nextForm()
		}
	}

	return (
		<View>
			<View
				style={[
					{
						height: Dimensions.get("window").height - 90,
						marginBottom: 15,
						justifyContent: "space-between",
					},
				]}
			>
				<View>
					<View style={[styles.my2]}>
						{/*todo: update colours and how they are defined*/}
						<FormComponent
							// style={{
							// 	display: showingComp[0] ? "flex" : "none",
							// }}

							display={showingComp[0]}
							type={"input"}
							content={[
								{
									mainTitle: "Bem vindo!",
									desc:
										"Tá pronto para bater aquela bola com os amigos?",
								},
								{
									title: "Nome",
									placeholder: "EXEMPLO DE NOME",
								},
								{
									title: "email",
									placeholder: "EXEMPLO DE RG",
								},
							]}
						></FormComponent>
						<FormComponent
							// style={{
							// 	display: showingComp[1] ? "flex" : "none",
							// }}

							display={showingComp[1]}
							type={"input"}
							content={[
								{
									mainTitle:
										"Texto demonstrativo, 20 palavras",
									desc:
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare volutpat velit nec laoreet. Morbi mattis scelerisque augue. Nullam imperdiet. ",
								},
								{
									title: "Senha",
									placeholder: "EXEMPLO DE NOME",
								},
								{
									title: "Verificar",
									placeholder: "EXEMPLO DE RG",
								},
							]}
						></FormComponent>
						<FormComponent
							// style={{
							// 	display: showingComp[2] ? "flex" : "none",
							// }}

							display={showingComp[2]}
							type={"input"}
							content={[
								{
									mainTitle: "Bem vindo!",
									desc: "Frases pequenas!",
								},
								{
									title: "CPF",
									placeholder: "EXEMPLO DE NOME",
								},
								{
									title: "SLA",
									placeholder: "EXEMPLO DE RG",
								},
							]}
						></FormComponent>
						<FormComponent
							// style={{
							// 	display: showingComp[3] ? "flex" : "none",
							// }}

							display={showingComp[3]}
							type={"input"}
							content={[
								{
									mainTitle: "Bem vindo!",
									desc: "Bora pro play?",
								},
								{
									title: "hihi",
									placeholder: "EXEMPLO DE NOME",
								},
								{
									title: "huhu",
									placeholder: "EXEMPLO DE RG",
								},
							]}
						></FormComponent>

						<FormComponent
							// style={{
							// 	display: showingComp[4] ? "flex" : "none",
							// }}

							display={showingComp[4]}
							type={"check"}
							content={{
								title: "hihi",
								text: (
									<View style={styles.centerX}>
										<Text>
											Você concorda com os termos e
											condições de uso?
										</Text>
										<Text
											style={[
												styles.small,
												{ color: "#5cbac4" },
											]}
										>
											Toque para ver mais
										</Text>
									</View>
								),
							}}
						></FormComponent>
					</View>
				</View>
				<Button onPress={updateForm} labelStyle={styles.textSecondary}>
					Próximo
				</Button>
			</View>
		</View>
	)
}

export default cadastro
