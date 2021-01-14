import React, { Component } from "react"
import { View } from "react-native"
import { Text, Icon, Button } from "react-native-paper"
import CalendarPicker from "react-native-calendar-picker"

export default class Calendar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedStartDate: null,
		}
		this.onDateChange = this.onDateChange.bind(this)
	}

	onDateChange(date) {
		this.setState({
			selectedStartDate: date,
		})
	}

	isDayValid(day) {
		// return day % 2 === 0 ? "red" : "green"
		// Logo trocar por função exportada
		return true
	}

	render() {
		const { selectedStartDate } = this.state
		const startDate = selectedStartDate ? selectedStartDate.toString() : ""
		return (
			<View>
				<CalendarPicker
					months={[
						"jan",
						"fev",
						"mar",
						"abr",
						"mai",
						"jun",
						"jul",
						"ago",
						"set",
						"out",
						"nov",
						"dez",
					]}
					weekdays={["seg", "ter", "qua", "qui", "sex", "sáb", "dom"]}
					nextComponent={
						<Button
							icon="arrow-right"
							style={{ position: "relative", top: 10, left: 30 }}
						/>
					}
					previousComponent={
						<Button
							icon="arrow-left"
							style={{ position: "relative", top: 10, right: 20 }}
						/>
					}
					previousTitle="<"
					onDateChange={this.onDateChange}
					disabledDates={[
						"2021-01-01",
						"2021-01-02",
						"2021-01-08",
						"2021-01-09",
						"2021-01-15",
						"2021-01-16",
						"2021-01-22",
						"2021-01-23",
						"2021-01-29",
						"2021-01-30",
					]}
					disabledDatesTextStyle={{ color: "#f2acac" }}
					selectedDayStyle={{ backgroundColor: "#aae8a9" }}
					
				/>
				{/* <Text>SELECTED DATE:{startDate}</Text> */}
			</View>
		)
	}
}
