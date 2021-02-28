import React from "react"
import { View } from "react-native"
import { Button, Dialog, Portal, Text } from "react-native-paper"

import styles from "../../styles/styles"

const PopupAbout = ({ visible, hideDialog }) => (
	<Portal>
		<Dialog visible={visible} onDismiss={hideDialog}>
			<Dialog.Title>
				<View>
					<Text
						style={[
							styles.textLight2,
							styles.titleSecondary,
							{ textAlign: "left" },
						]}
					>
						Sobre a quadra
					</Text>
				</View>
			</Dialog.Title>
			<Dialog.Content>
				<View style={[{ marginHorizontal: 32 }, styles.mt4]}>
					<Text style={{ textAlign: "left" }}>
						orem ipsum dolor sit amet, consectetur adipiscing it.In
						quis erat eget nisi mattis ornare dictum a a.Donec
						dignissim neque sit amet molestie consequat // ! routes
					</Text>
				</View>
			</Dialog.Content>
			<Dialog.Actions>
				<Button
					onPress={() => {
						hideDialog
					}}
					style={styles.textPrimary}
				>
					Fechar
				</Button>
				<Button icon="share" />
			</Dialog.Actions>
		</Dialog>
	</Portal>
)

export default PopupAbout
