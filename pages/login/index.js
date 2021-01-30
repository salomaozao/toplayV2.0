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
import media from "../../media/media"
import Dialog from "../acc/components/dialogs"
import styles from "../styles/styles"

const login = () => {
	const [isPwVisible, setPwVisible] = useState(false)
	let pwIcon = isPwVisible ? "eye-off" : "eye"

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
							<TextInput
								mode="outlined"
								label="Seu email aqui!"
								style={[
									{ width: "80%", border: 0 },
									styles.mx4,
									styles.my4,
									styles.bg,
									styles.round,
									styles.shadowXl,
								]}
								// left={<TextInput.Icon icon="person" />}
							/>
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
									style={[
										{
											alignSelf: "center",
											padding: 0,
										},
									]}
									onPress={() => {}}
								>
									Fazer login!
								</Button>
								<Text>OU</Text>
								<IconButton
									icon="google"
									color={Colors.blue400}
									onPress={() => {}}
								/>
							</View>
						</View>

						<View style={{ alignItems: "center", width: "100%" }}>
							<TextInput
								mode="outlined"
								label="Sua senha aqui!"
								secureTextEntry={isPwVisible}
								style={[
									{ width: "80%", border: 0 },
									styles.mx4,
									styles.my4,
									styles.bg,
									styles.round,
									styles.shadowXl,
								]}
								right={
									<TextInput.Icon
										icon={pwIcon}
										onPress={() =>
											setPwVisible(!isPwVisible)
										}
									/>
								}
							/>
						</View>
						<Button labelStyle={{ fontSize: 12 }}>
							Fazer cadastro
						</Button>
					</View>
				</View>
			</View>
		</>
	)
}

export default login