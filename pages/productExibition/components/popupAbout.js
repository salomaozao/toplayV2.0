import * as React from "react"
import { View, ScrollView, Dimensions, Text } from "react-native"
import { Button, Paragraph, Dialog, Portal } from "react-native-paper"

import styles from "../../../styles/styles"

const PopupAbout = ({ visible, setVisible, hideDialog }) => {
	return (
		<Portal>
			<Dialog visible={visible} onDismiss={hideDialog}>
				<Dialog.Title>
					<View>
						<Text
							style={[
								styles.textSecondary,
								styles.title,
								{ textAlign: "left", marginTop: 16 },
							]}
						>
							Sobre a quadra
						</Text>
					</View>
				</Dialog.Title>
				<Dialog.Content>
					<View style={[{ marginHorizontal: 32 }, styles.mt4]}>
						<Text style={{ textAlign: "left" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. In quis erat eget nisi mattis ornare dictum a
							nulla. Donec dignissim neque sit amet molestie
							consequat
						</Text>
					</View>
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
}

export default PopupAbout
