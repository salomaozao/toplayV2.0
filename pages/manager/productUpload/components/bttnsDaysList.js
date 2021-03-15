import React from "react"
import { ScrollView, View } from "react-native"
import { List, Text, Button, Colors } from "react-native-paper"

import styles from "../../../styles/styles"

const apointments = [["12:00", "13:00"], [], [], [], [], [], []]

const BttnsDaysList = ({ setDatePickerVisible, date }) => {
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

	const ItemsList = ({
		arr,
		onPress,
		componentStyle,
		titleStyle,
		IfArrFalse,
	}) => {
		var components = []
		var key = 0
		if (arr.length !== 0) {
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
		} else {
			components = <IfArrFalse />
		}
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
					titleStyle={styles.textSecondary}
				>
					<ItemsList
						arr={weekdays}
						onPress={(el) => {
							setSelectedWeekday(el)
							setExpandedDays(!expandedDays)
						}}
						ifArrFalse={() => (
							<Text>Ainda não há horários para esse dia!</Text>
						)}
					/>
				</List.Accordion>
			</View>
			<ScrollView>
				<ItemsList
					arr={apointments[weekdays.indexOf(selectedWeekday)]}
					onPress={() => {}}
					ifArrFalse={() => (
						<Text>Ainda não há horários para esse dia!</Text>
					)}
				/>

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
