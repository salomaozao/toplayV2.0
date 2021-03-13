import React from "react"
import { View } from "react-native"
import { Button, Colors } from "react-native-paper"

import styles from "../../../styles/styles"

const BttnsDaysList = ({ days, setTimeVisible, time }) => {
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
			<Button
				mode="outlined"
				style={styles.my2}
				color={Colors.green400}
				onPress={() => {
					setTimeVisible(true)

					// const [dayTimes, setDayTimes] = times[days[0]]
					// setDayTimes([dayTimes, time])
				}}
			>
				{weekDays[days[0]]}
			</Button>
			{days.length === 2 && (
				<Button
					mode="outlined"
					style={styles.my2}
					color={Colors.green400}
					onPress={() => {
						setTimeVisible(true)
					}}
				>
					{weekDays[days[1]]}
				</Button>
			)}
		</View>
	)
}

export { BttnsDaysList }
