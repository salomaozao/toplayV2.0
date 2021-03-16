import React from "react"
import {
	View,
	Dimensions,
	ScrollView,
	Surface,
	TouchableHighlight,
} from "react-native"
import { Text, Title, IconButton, Button, Colors } from "react-native-paper"

import Apointments from "./components/apointment"

import styles from "../styles/styles"
import userDataJSON from "../testing/data/users.json"

const Agendamentos = ({ navigation, route }) => {
	const { userId } = route.params
	const userData = userDataJSON[userId]
	const apointmentArr = userData.apointments

	var nextApointmentsComponentsArr = []
	var pastApointmentsComponentsArr = []

	for (let data of apointmentArr) {
		data.past
			? pastApointmentsComponentsArr.push(
					<Apointments navigation={navigation} {...data} />,
			  )
			: nextApointmentsComponentsArr.push(
					<Apointments navigation={navigation} {...data} />,
			  )
	}

	return (
		<>
			<ScrollView style={{ paddingTop: 25 }}>
				<Text style={[styles.title, styles.textCenter]}>
					Agendamentos
				</Text>
				<View style={[styles.mx4, { marginBottom: 25 }]}>
					<View style={styles.my2}>
						{nextApointmentsComponentsArr.length !== 0 && (
							<Title style={styles.textCenter}>Próximos</Title>
						)}
						{nextApointmentsComponentsArr}
					</View>

					<View style={styles.my2}>
						{pastApointmentsComponentsArr.length !== 0 && (
							<Title style={styles.textCenter}>Passados</Title>
						)}
						{pastApointmentsComponentsArr}
					</View>

					{pastApointmentsComponentsArr.length == 0 &&
						nextApointmentsComponentsArr.length == 0 && (
							<View
								style={[
									styles.center,
									{ position: "relative", top: 20 },
								]}
							>
								<Text
									style={[
										styles.textCenter,
										styles.textSecondary,
									]}
								>
									Você ainda não agendou nenhuma quadra !
								</Text>
								<Button
									color={Colors.green400}
									style={[styles.p2, styles.mx2, styles.mt4]}
									mode="contained"
									onPress={() => navigation.navigate("main")}
								>
									Agendar Quadras!
								</Button>
							</View>
						)}
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
				color={Colors.grey100}
			></IconButton>
		</>
	)
}

export default Agendamentos
