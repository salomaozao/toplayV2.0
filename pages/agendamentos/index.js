import React from "react"
import { View, Dimensions, ScrollView } from "react-native"
import { Text, Title, IconButton } from "react-native-paper"
import styles from "../../styles/styles"

import Apointments from "./components/apointment"

const Agendamentos = () => {
	const apointmentArr = [
		{ name: "Quadra São João", date: "1", passed: true, key: "0" },
		{ name: "Quadra São José", date: "2", passed: false, key: "1" },
		{ name: "Quadra São Carlos", date: "3", passed: true, key: "2" },
		{ name: "Quadra São Carlos", date: "4", passed: true, key: "3" },
		{ name: "Quadra São Carlos", date: "5", passed: true, key: "4" },
		{ name: "Quadra São Carlos", date: "6", passed: true, key: "5" },
		{ name: "Quadra São Carlos", date: "7", passed: true, key: "6" },
		{ name: "Quadra São Carlos", date: "8", passed: true, key: "7" },
		{ name: "Quadra São Carlos", date: "9", passed: true, key: "8" },
		{ name: "Quadra São Carlos", date: "10", passed: true, key: "9" },
		{ name: "Quadra São Carlos", date: "11", passed: false, key: "10" },
	]

	const nextApointmentsComponentsArr = []
	const pastApointmentsComponentsArr = []

	for (let data of apointmentArr) {
		data.passed
			? pastApointmentsComponentsArr.push(<Apointments {...data} />)
			: nextApointmentsComponentsArr.push(<Apointments {...data} />)
	}

	return (
		<>
			<ScrollView
				style={[
					styles.bgDark,
					{
						height:
							Dimensions.get("window").height -
							styles.footerMargin,
					},
				]}
			>
				<Text style={[styles.title, styles.textCenter]}>
					Agendamentos
				</Text>
				<View>
					<Title style={styles.textCenter}>Próximos</Title>
					{nextApointmentsComponentsArr}
				</View>

				<View>
					<Title style={styles.textCenter}>Passados</Title>
					{pastApointmentsComponentsArr}
					{/*Organizar por tempo */}
				</View>
			</ScrollView>
			<IconButton
				style={[
					{
						position: "absolute",
						bottom: 0,
						right: 1,
						alignSelf: "flex-end",
					},
					styles.row,
					styles.bgSecondary,
				]}
				icon="plus"
			></IconButton>
		</>
	)
}

export default Agendamentos
