import React from "react"
import { Button, Dialog, Portal } from "react-native-paper"
import styles from "../../../styles/styles"

const ConfirmDialog = ({ action, isVisible, setVisible }) => {
	return (
		<Portal>
			<Dialog
				visible={isVisible}
				onDismiss={() => {
					setVisible(false)
				}}
			>
				<Dialog.Title>Marque em um dia válido!</Dialog.Title>
				<Dialog.Actions>
					<Button
						onPress={() => {
							action === undefined ? {} : action()
							setVisible(false)
						}}
						style={styles.bgSecondary}
						mode="outlined"
					>
						Ok, entendi
					</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	)
}

export default ConfirmDialog
