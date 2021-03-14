import React from "react"
import { ScrollView, View } from "react-native"
import { List, Text, Button, Colors } from "react-native-paper"

import styles from "../../../styles/styles"

const apointments = [["12:00", "13:00"], [], [], [], [], [], []]

const BttnsDaysList = ({ setDatePickerVisible, date }) => {
	// ? useEffect on date to know when it changes?

	//component
	const [expandedTimes, setExpandedTimes] = React.useState(false)
	const [expandedDays, setExpandedDays] = React.useState(false)
	const [selectedWeekday, setSelectedWeekday] = React.useState("segunda")

	const weekdays = [
		"segunda",
		"terça",
		"quarta",
		"quinta",
		"sexta",
		"sábado",
		"domingo",
	]

	var components = []

	const ItemsList = ({ arr, onPress, componentStyle, titleStyle }) => {
		var key = 0
		arr.forEach((el) => {
			key++
			components.push(
				<List.Item
					style={componentStyle}
					titleStyle={titleStyle}
					key={key}
					title={el}
					onPress={() => onPress(el)}
				/>,
			)
		})

		return components
	}

	return (
		<>
			<View
				style={[
					styles.shadowMd,
					styles.mx2,
					{ backgroundColor: "rgba(250, 250, 250, 0.9)" },
				]}
			>
				<List.Accordion
					title={selectedWeekday}
					left={() => <List.Icon icon="calendar" />}
					expanded={expandedDays}
					onPress={() => {
						setExpandedDays(!expandedDays)
					}}
				>
					<ItemsList
						arr={weekdays}
						onPress={(el) => {
							setSelectedWeekday(el)
							setExpandedDays(!expandedDays)
						}}
					/>
				</List.Accordion>
			</View>
			<ScrollView>
				<ItemsList
					arr={apointments[weekdays.indexOf(selectedWeekday)]}
					componentStyle={{}}
					onPress={() => {}}
				/>

				<Text style={[styles.textSecondary, styles.textCenter]}>
					Ainda não há horários marcados nesse dia!
				</Text>
				<Button
					icon="calendar-plus"
					color={Colors.green400}
					onPress={() => setDatePickerVisible(true)}
					style={[styles.py2]}
				>
					Adicionar uma hora
				</Button>
			</ScrollView>
		</>
	)
}

export { BttnsDaysList }
