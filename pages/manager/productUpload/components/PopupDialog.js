import * as React from "react"
import { View, ScrollView, Dimensions } from "react-native"
import {
	Button,
	Paragraph,
	Dialog,
	Portal,
	Text,
	Colors,
} from "react-native-paper"

import styles from "../../../styles/styles"

const PopupDialog = ({
	visible,
	hideDialog,
	confirmFunction,
	values = {
		name: "Falha ao carregar",
		price: "Falha ao carregar",
		about: "Falha ao carregar",
	},
}) => {
	return (
		<Portal>
			<Dialog visible={visible} onDismiss={hideDialog}>
				<Dialog.Title>
					Quase lá! Se liga no que você escreveu:
				</Dialog.Title>
				<Dialog.Content>
					<Text>Nome da quadra: {values.name}</Text>
					<Text>Preço da quadra: R${values.price}</Text>
					<Text>Texto sobre : {values.about}</Text>
				</Dialog.Content>
				<Dialog.Actions>
					<Button
						color={Colors.grey900}
						mode="outlined"
						style={{ backgroundColor: Colors.red700 }}
						onPress={hideDialog}
					>
						Não, volte
					</Button>
					<Button
						color={Colors.grey900}
						mode="outlined"
						style={[styles.bgPrimary]}
						onPress={() => {
							confirmFunction()
							hideDialog()
						}}
					>
						Anúnciar!
					</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	)
}

export default PopupDialog
