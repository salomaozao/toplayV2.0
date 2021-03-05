import React from "react"
import { View, _View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Text, Button } from "react-native-paper"

import PopupAbout from "./components/popupAbout"
import InfoRow from "./components/infoRow"

import styles from "../styles/styles"
import data from "../testing/data/quadras.json"

//todo: separate components

const PaymentsPage = ({ route, navigation }) => {
	const [isPopupVisible, setPopupVisible] = React.useState(false)
	const product = data[route.params.productId]
	// const product = data["0001"]
	const apointmentTime = route.params.apointmentTime

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
					<Text style={[styles.title]}>
						R$
						{product.price.toFixed(2).toString().replace(".", ",")}
					</Text>
					<Text style={[styles.titleSecondary, styles.mb2]}>
						{apointmentTime}
					</Text>
					<Text style={{ fontSize: 16 }}>{product.name}</Text>
					<Button
						style={styles.my2}
						onPress={() =>
							navigation.navigate("product", {
								productId: route.params.productId,
							})
						}
					>
						Visitar
					</Button>
				</View>
				<View style={[styles.my2, { alignItems: "center" }]}>
					<Text style={styles.titleSecondary}>Suas informações:</Text>
					<View style={styles.row}>
						<Text>Para alterar estes dados, acesse </Text>
						<TouchableOpacity
							style={[
								styles.underline,
								styles.bgLight,
								{ paddingHorizontal: 5 },
							]}
							onPress={() => navigation.navigate("acc")}
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
								content: product.name,
								icon: "rename-box",
							}}
						/>
						<InfoRow
							info1={{
								title: "Hora",
								content: apointmentTime,
								icon: "timer",
							}}
							info2={{
								title: "Total",
								content: product.price
									.toFixed(2)
									.toString()
									.replace(".", ","),

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
