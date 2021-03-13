import React from "react"
import { ScrollView } from "react-native"
import { List, Text, Button, Colors } from "react-native-paper"

import styles from "../../../styles/styles"

const apointments = [[{ time: "12:00" }], [], [], [], [], [], []]

const BttnsDaysList = ({ setDatePickerVisible, date }) => {
	// ? useEffect on date to know when it changes?

	//component
	const [expanded, setExpanded] = React.useState(false)
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
	const ItemsList = () => {
		var key = 0
		weekdays.forEach((day) => {
			key++
			components.push(
				<List.Item
					key={key}
					title={day}
					onPress={() => {
						setSelectedWeekday(day)
						setExpanded(!expanded)
					}}
				/>,
			)
		})

		return components
	}
	return (
		<>
			<List.Accordion
				title={selectedWeekday}
				left={() => <List.Icon icon="calendar" />}
				expanded={expanded}
				onPress={() => {
					setExpanded(!expanded)
				}}
			>
				<ItemsList />
			</List.Accordion>
			<ScrollView
			/*{apointments[selectedWeekday] !== true ? (
                <Text>Não há horários para este dia!</Text>
            ) : (
                apointments[selectedWeekday].forEach((day)=>{
                       
                }
            )}*/
			>
				<Text style={[styles.textSecondary, styles.textCenter]}>
					Ainda não há quadras nesse dia!
				</Text>
				<Button
					icon="calendar-plus"
					color={Colors.green400}
					onPress={() => setDatePickerVisible(true)}
				>
					Adicionar uma hora
				</Button>
			</ScrollView>
		</>
	)
}

export { BttnsDaysList }
