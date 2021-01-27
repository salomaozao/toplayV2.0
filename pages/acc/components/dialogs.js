import React from "react"
import { Button, Dialog, Portal, Colors } from "react-native-paper"
import styles from "../../styles/styles"

const ConfirmDialog = ({
	action,
	isVisible,
	setVisible,
	texts = { question: "Tem certeza?", confirm: "Sim, eu tenho" },
	danger,
}) => {
	return (
		<Portal theme={{ colors: { surface: "white" } }}>
			<Dialog
				visible={isVisible}
				onDismiss={() => {
					setVisible(false)
				}}
			>
				<Dialog.Title>{texts.question}</Dialog.Title>
				<Dialog.Actions>
					<Button
						onPress={() => {
							setVisible(false)
							action !== undefined ? action() : {}
						}}
						style={[
							styles.mx2,
							{ width: "30%" },
							danger ? { backgroundColor: Colors.red800 } : {},
						]}
						labelStyle={danger ? styles.textLight : {}}
					>
						{texts.confirm}
					</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	)
}

export default ConfirmDialog
