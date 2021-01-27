import React from "react"
import { Button, Dialog, Portal } from "react-native-paper"
import styles from "../../styles/styles"

const ConfirmDialog = ({ action, isVisible, setVisible }) => {
	return (
		<Portal theme={{ colors: { surface: "white", onSurface: "black" } }}>
			<Dialog
				visible={isVisible}
				onDismiss={() => {
					setVisible(true)
				}}
			>
				<Dialog.Title style={styles.textLight}>
					Tem certeza?
				</Dialog.Title>
				<Dialog.Actions>
					<Button
						onPress={() => {
							action !== undefined ? action() : {}
							setVisible(false)
						}}
						style={styles.bgSecondary}
					>
						Sim, eu tenho
					</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	)
}

export default ConfirmDialog
