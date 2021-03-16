import React, { useState } from "react"
import { View, ScrollView, Dimensions } from "react-native"
import {
	Avatar,
	Text,
	Button,
	DataTable,
	IconButton,
	Colors,
	Surface,
	Divider,
} from "react-native-paper"

import InfoInpt from "./components/infoInpt"
import ConfirmDialog from "./components/dialogs"

import styles from "../styles/styles"
import userDataJSON from "../testing/data/users.json"

const AccPage = ({ navigation, route }) => {
	const [page, setPage] = useState(0)
	const pageMax = 1
	const changePage = (val) => {
		page + val !== pageMax + 1 || page + val !== 0
			? setPage(page + val)
			: {}
	}

	const { userId } = route.params
	// const userId = "0001" // ! for debugging
	const userData = userDataJSON[userId]

	const [showInpts, setShowInpts] = useState(true)
	const [showConfirmDialog, setShowConfirmDialog] = useState(false)
	const [showLogoutDialog, setShowLogoutDialog] = useState(false)
	const [showLogoutConfirmDialog, setShowLogoutConfirmDialog] = useState(
		false,
	)

	return (
		<>
			<ConfirmDialog
				texts={{ question: "Fazer logout?", confirm: "sim" }}
				action={() => setShowLogoutConfirmDialog(true)}
				isVisible={showLogoutDialog}
				setVisible={setShowLogoutDialog}
			/>

			<ConfirmDialog
				texts={{ question: "Tem certeza?", confirm: "sim" }}
				// action = {logout}
				isVisible={showLogoutConfirmDialog}
				setVisible={setShowLogoutConfirmDialog}
				danger
			/>

			<ConfirmDialog
				isVisible={showConfirmDialog}
				action={() => setShowInpts(!showInpts)}
				setVisible={setShowConfirmDialog}
			/>

			<View>
				<ScrollView>
					<Surface style={[styles.centerX, styles.shadowXl]}>
						<View
							style={[
								{
									height:
										Dimensions.get("screen").height * 0.3,
								},
								styles.center,
							]}
						>
							<Avatar.Text
								size={100}
								label={userData.name[0]}
								style={[
									styles.bgPrimary,
									styles.shadowLg,
									styles.mb2,
								]}
							/>
							<Text style={styles.textLight2}>
								{userData.name}
							</Text>
						</View>
						<Button
							color={Colors.green400}
							mode="outlined"
							style={[
								styles.mx4,
								styles.mb2,
								styles.round,
								{ borderWidth: 1 },
							]}
							icon="calendar"
							onPress={() =>
								navigation.navigate("agendamentos", {
									userId: userId,
								})
							}
						>
							Agendamentos
						</Button>
					</Surface>

					<View>
						<View>
							<View>
								<Text
									style={[
										styles.textCenter,
										styles.titleSecondary,
										styles.mb2,
										styles.my4,
									]}
								>
									Informações sobre você
								</Text>

								<View>
									<View>
										<View
											style={
												page === 0
													? { display: "flex" }
													: { display: "none" }
											}
										>
											<InfoInpt
												isDisabled={showInpts}
												label="Nome completo"
												value={
													userData === "unlogged"
														? "Você ainda não Fez login!"
														: userData.name
												}
											/>

											<InfoInpt
												isDisabled={showInpts}
												label="Email"
												value={userData.email}
											/>

											<InfoInpt
												isDisabled={showInpts}
												label="CPF registrado"
												value={userData.cpf}
											/>

											<InfoInpt
												isDisabled={showInpts}
												label="Senha"
												value={userData.pw}
												secured
											/>
										</View>
										<View
											style={
												page === 1
													? { display: "flex" }
													: { display: "none" }
											}
										>
											<InfoInpt
												isDisabled={showInpts}
												label="Número de cartão"
												value={userData.cartao}
												secured
												icon={[
													"credit-card",
													"credit-card-off",
												]}
											/>

											<InfoInpt
												isDisabled={showInpts}
												label="Preencher"
												value="placeholder"
											/>

											<InfoInpt
												isDisabled={showInpts}
												label="preencher"
												value="placeholder"
											/>

											<InfoInpt
												isDisabled={showInpts}
												label="preencher"
												value="placeholder"
											/>
										</View>
									</View>

									<View
										style={{
											flex: 1,
											alignItems: "flex-end",
										}}
									>
										<View style={styles.m2}>
											<Button
												color={Colors.green400}
												style={[
													styles.bgDark,
													styles.shadowMd,
												]}
												onPress={() => {
													setShowConfirmDialog(true)
												}}
											>
												{showInpts === true
													? "Editar"
													: "Confirmar"}
											</Button>
											<View style={styles.row}>
												<IconButton
													icon="arrow-left"
													disabled={page === 0}
													onPress={() =>
														changePage(-1)
													}
													size={20}
												/>
												<Text
													style={{
														position: "relative",
														top: 10,
													}}
												>
													{page + 1} de {pageMax + 1}
												</Text>
												<IconButton
													icon="arrow-right"
													disabled={page === pageMax}
													onPress={() =>
														changePage(+1)
													}
													size={20}
												/>
											</View>
										</View>
									</View>
								</View>
							</View>

							<Button
								color={Colors.green400}
								style={[
									styles.textCenter,
									styles.my2,
									styles.textSecondary,
								]}
								disabled={userData === "unlogged"}
								onPress={() =>
									setShowLogoutDialog(!showLogoutDialog)
								}
							>
								Fazer logout
							</Button>
						</View>
					</View>
				</ScrollView>
			</View>
		</>
	)
}

export default AccPage
