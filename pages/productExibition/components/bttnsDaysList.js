import React from "react"
import { ScrollView, View } from "react-native"
import { List, Text, Button, Colors } from "react-native-paper"

import styles from "../../styles/styles"

const apointments = [["12:00", "13:00"], [], [], [], [], [], []] // ! for debbugging

const BttnsDaysList = ({ times, stylesProp, onPress = () => {} }) => {
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
		IfArrFalse = () => (
			<Text style={styles.textCenter}>Não há itens na lista!</Text>
		),
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
					styles.m2,
					styles.p1,

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
					arr={times[weekdays.indexOf(selectedWeekday)]}
					onPress={(e) => onPress(e)}
					ifArrFalse={() => (
						<Text>Ainda não há horários para esse dia!</Text>
					)}
				/>
			</ScrollView>
		</>
	)
}

export { BttnsDaysList }
