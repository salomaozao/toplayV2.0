import * as React from "react"
import { View, ScrollView, Dimensions } from "react-native"
import { Button, Paragraph, Dialog, Portal, Text } from "react-native-paper"

import styles from "../../styles/styles"

const PopupDialog = ({ visible, setVisible, hideDialog }) => {
	return (
		<Portal>
			<Dialog visible={visible} onDismiss={hideDialog}>
				<Dialog.Title>Horários</Dialog.Title>
				<Dialog.Content>
					<Dialog.ScrollArea
						style={{
							maxHeight: Dimensions.get("screen").width * 0.6,
						}}
					>
						<ScrollView
							contentContainerStyle={{ paddingHorizontal: 24 }}
						>
							<Button
								mode="contained"
								compact
								style={{
									marginVertical: 5,
									backgroundColor: "#d9d9d9",
									borderWidth: 2,
									borderColor: "#bfbfbf",
								}}
							>
								15:00
							</Button>
							<Button
								mode="contained"
								compact
								style={{
									marginVertical: 5,
									backgroundColor: "#d9d9d9",
									borderWidth: 2,
									borderColor: "#bfbfbf",
								}}
							>
								16:00
							</Button>
							<Button
								mode="contained"
								compact
								style={{
									marginVertical: 5,
									backgroundColor: "#d9d9d9",
									borderWidth: 2,
									borderColor: "#bfbfbf",
								}}
							>
								15:00
							</Button>
							<Button
								mode="contained"
								compact
								style={{
									marginVertical: 5,
									backgroundColor: "#d9d9d9",
									borderWidth: 2,
									borderColor: "#bfbfbf",
								}}
							>
								15:00
							</Button>
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
