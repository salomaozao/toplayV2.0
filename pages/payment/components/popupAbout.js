import React from "react"
import { Portal, Dialog, Text, Button, Colors } from "react-native-paper"
import styles from "../../styles/styles"

const PopupAbout = ({ visible, hideDialog }) => (
	<Portal theme={{ colors: { text: Colors.grey400 } }}>
		<Dialog visible={visible} onDismiss={hideDialog}>
			<Dialog.Title>Tem Certeza?</Dialog.Title>
			<Dialog.Content>
				<Text>Ao confirmar a quadra será alugada.</Text>
			</Dialog.Content>
			<Dialog.Actions>
				<Button onPress={hideDialog} style={styles.textPrimary}>
					Fechar
				</Button>
				<Button icon="share" />
			</Dialog.Actions>
		</Dialog>
	</Portal>
)

export default PopupAbout
