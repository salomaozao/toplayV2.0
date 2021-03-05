import React, { useState } from "react"
import { View, Image } from "react-native"
import {
	Surface,
	TextInput,
	Text,
	Button,
	IconButton,
	Colors,
} from "react-native-paper"

import Input from "./components/textInput";

import media from "../../media/media"
import Dialog from "../acc/components/dialogs"
import styles from "../styles/styles"


const login = ({navigation}) => {
	const [isPwVisible, setPwVisible] = useState(true)

	return (
		<>
			<Dialog texts={{ question: "Conta inválida!" }} />
			<View
				style={{
					minHeight: "100%",
					justifyContent: "center",
				}}
			>
				<Image
					source={{ uri: media.player }}
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
					}}
				/>
				<View
					style={[
						{
							justifyContent: "center",
							width: "100%",
							height: "100%",
							backgroundColor: "rgba(107, 107, 107, 0.8)",
						},
					]}
				>
					<View
						style={[
							styles.col,
							{
								minHeight: "40%",
								justifyContent: "space-evenly",
							},
						]}
					>
						<View style={{ alignItems: "center", width: "100%" }}>
							<Text
								style={[
									styles.title,
									styles.textLight,
									{ alignSelf: "center" },
								]}
							>
								Fazer login
							</Text>
							<Input label="Seu nome aqui!" />
							<View
								style={[
									styles.center,
									{
										flexDirection: "row",
										justifyContent: "center",
										width: "100%",
									},
								]}
							>
								<Button
								mode="text"
									style={[
										styles.mx2,
										{
											alignSelf: "center",
										},
									]}

									contentStyle={styles.bgPrimary}
									onPress={() => {}}
								>
Confirmar								</Button>
								<Text>OU</Text>
								<IconButton
									icon="google"
									color={Colors.blue400}
									onPress={() => {}}
								/>
							</View>
							<Input
								label="Sua senha aqui!"
								isSecure={isPwVisible}
								secret
								onPress={() => setPwVisible(!isPwVisible)}
							/>
						</View>

						<Button labelStyle={{ fontSize: 12 }} onPress={()=>navigation.navigate("cadastro")}>
							Fazer cadastro
						</Button>
					</View>
				</View>
			</View>
		</>
	)
}

export default login
