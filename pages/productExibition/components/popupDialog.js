import React from "react"
import { View, ScrollView, Dimensions } from "react-native"
import { Button, Dialog, Portal, Colors } from "react-native-paper"

import styles from "../../styles/styles"

const PopupDialog = ({
	visible,
	hideDialog,
	navigation,
	availableTimes,
	id,
}) => {
	const TimesBttn = ({ time }) => (
		<Button
			onPress={() => {
				hideDialog()
				navigation.navigate("payment", {
					productId: id,
					apointmentTime: time,
				})
			}}
			mode="contained"
			compact
			style={[
				styles.shadowMd,

				{
					marginVertical: 5,
					backgroundColor: Colors.grey500,
					borderWidth: 2,
					borderColor: Colors.grey300,
				},
			]}
		>
			{time}
		</Button>
	)

	let BttnsArr = []
			if (availableTimes !== undefined) {
	for (let data of availableTimes) {
		BttnsArr.push(<TimesBttn navigation={navigation} time={data} />)
	}} else {
		BttnsArr.push(<Text>Não há horários disponíveis para hoje!</Text>)
	}

	return (
		<Portal>
			<Dialog visible={visible} onDismiss={hideDialog}>
				<Dialog.Title
					style={[styles.titleSecondary, styles.textLight2]}
				>
					Horários
				</Dialog.Title>
				<Dialog.Content>
					<Dialog.ScrollArea
						style={{
							maxHeight: Dimensions.get("screen").width * 0.6,
						}}
					>
						<ScrollView
							contentContainerStyle={{ paddingHorizontal: 24 }}
						>
							{BttnsArr}
						</ScrollView>
					</Dialog.ScrollArea>
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={hideDialog} style={styles.textPrimary}>
						Fechar
					</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	)
}

export default PopupDialog
