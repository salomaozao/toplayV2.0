import React from "react"
import { View, _View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import {
	Text,
	Button,
	Surface,
	IconButton,
	Avatar,
	Colors,
	Portal,
	Dialog,
} from "react-native-paper"

import styles from "../styles/styles"

//todo: separate components

const TextInfo = ({ title, content, icon, side }) => (
	<View
		style={[
			styles.col,
			styles.my2,
			{ alignItems: side === "left" ? "flex-start" : "flex-end" },
		]}
	>
		<View style={styles.row}>
			{side === "right" ? (
				<>
					<Text style={{ fontSize: 20, marginHorizontal: 5 }}>
						{title}
					</Text>
					<Avatar.Icon
						icon={icon}
						size={18}
						style={[styles.iconPos]}
					/>
				</>
			) : (
				<>
					<Avatar.Icon
						icon={icon}
						size={18}
						style={[styles.iconPos]}
					/>
					<Text style={{ fontSize: 20, marginHorizontal: 5 }}>
						{title}
					</Text>
				</>
			)}
		</View>
		<Text style={[{ color: Colors.grey600 }]}>{content}</Text>
	</View>
)

const InfoRow = ({ info1, info2 }) => (
	<View
		style={[
			{
				justifyContent: "space-between",
				flexDirection: "row",
			},
		]}
	>
		<TextInfo
			title={info1.title}
			content={info1.content}
			icon={info1.icon}
			side="left"
		/>

		<TextInfo
			title={info2.title}
			content={info2.content}
			icon={info2.icon}
			side="right"
		/>
	</View>
)
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

const PaymentsPage = ({ routes, navigation }) => {
	const [isPopupVisible, setPopupVisible] = React.useState(false)
	return (
		<>
			<PopupAbout
				visible={isPopupVisible}
				hideDialog={() => setPopupVisible(false)}
			/>
			<View>
				<View
					style={[
						styles.center,
						styles.bgPrimary,
						styles.col,
						styles.shadowLg,
						{
							paddingTop: 25,
							height: 200,
						},
					]}
				>
					<Text style={[styles.title]}>R$80,99</Text>
					<Text style={[styles.titleSecondary, styles.mb2]}>
						15:00
					</Text>
					<Text style={{ fontSize: 16 }}>Quadra São João</Text>
				</View>
				<View style={[styles.my2, { alignItems: "center" }]}>
					<Text style={styles.titleSecondary}>Suas informações:</Text>
					<View style={styles.row}>
						<Text>Para alterar estes dados, acesse </Text>
						<TouchableOpacity
							style={styles.underline}
							onPress={() => {}}
						>
							<Text>Sua Conta</Text>
						</TouchableOpacity>
					</View>
					<View style={[styles.my2, { width: "85%" }]}>
						<InfoRow
							info1={{
								title: "Cartão",
								content: "XXX-XX-109",
								icon: "card-text",
							}}
							info2={{
								title: "Quadra",
								content: "Quadra São João",
								icon: "rename-box",
							}}
						/>
						<InfoRow
							info1={{
								title: "Hora",
								content: "15:00",
								icon: "timer",
							}}
							info2={{
								title: "Total",
								content: "80,99",
								icon: "cash",
							}}
						/>
					</View>
					<Button
						mode="contained"
						contentStyle={styles.bgPrimary}
						style={{ position: "relative", top: "20%" }}
						onPress={() => setPopupVisible(true)}
					>
						Confirmar Aluguel!
					</Button>
				</View>
			</View>
		</>
	)
}

export default PaymentsPage
