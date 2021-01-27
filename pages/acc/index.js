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

const AccPage = ({ navigation }) => {
	const [page, setPage] = useState(0)
	const pageMax = 1
	const changePage = (val) => {
		page + val !== pageMax + 1 || page + val !== 0
			? setPage(page + val)
			: {}
	}

	const userInfo = {
		name: "Gabriel S",
		pw: "1234",
		email: "nome@exemplo.com",
		cpf: "XXX. XXX. XXX-XX",
		cartao: "111 111 1111 11",
	}

	// const userInfo = "unlogged"

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
								label="GS"
								style={[
									styles.bgPrimary,
									styles.shadowLg,
									styles.mb2,
								]}
							/>
							<Text style={styles.textLight2}>
								Gabriel Salomão
							</Text>
						</View>
						<Button
							mode="outlined"
							style={[
								styles.mx4,
								styles.mb2,
								styles.round,
								{ borderWidth: 1 },
							]}
							icon="calendar"
							onPress={() => navigation.navigate("agendamentos")}
						>
							Agendamentos
						</Button>
					</Surface>

					<View>
						{userInfo === "unlogged" ? (
							<View
								style={[
									styles.center,
									{
										height:
											Dimensions.get("screen").height *
											0.2,
									},
								]}
							>
								<Button
									style={{ width: "100%" }}
									onPress={() =>
										navigation.navigate("cadastro")
									}
								>
									Faça Cadastro!
								</Button>
								<Button
									style={{ width: "100%" }}
									onPress={() =>
										navigation.navigate("cadastro")
									}
								>
									Faça login!
								</Button>
							</View>
						) : (
							<View>
								<View>
									<Text
										style={[
											styles.textCenter,
											styles.titleSecondary,
											styles.mb2,
											styles.my2,
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
													value={userInfo.name}
												/>

												<InfoInpt
													isDisabled={showInpts}
													label="Email"
													value={userInfo.email}
												/>

												<InfoInpt
													isDisabled={showInpts}
													label="CPF registrado"
													value={userInfo.cpf}
												/>

												<InfoInpt
													isDisabled={showInpts}
													label="Senha"
													value={userInfo.pw}
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
													value={userInfo.cartao}
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
													style={[
														styles.bgDark,
														styles.shadowMd,
													]}
													onPress={() => {
														setShowConfirmDialog(
															true,
														)
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
															position:
																"relative",
															top: 10,
														}}
													>
														{page + 1} de{" "}
														{pageMax + 1}
													</Text>
													<IconButton
														icon="arrow-right"
														disabled={
															page === pageMax
														}
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

								<Divider />

								<View>
									<Text
										style={[
											styles.titleSecondary,
											styles.textCenter,
											styles.mt2,
										]}
									>
										O que você já fez:
									</Text>
									<View>
										<DataTable
											style={[
												styles.my2,
												{
													width: "96%",
													alignSelf: "center",
												},
											]}
										>
											<DataTable.Row>
												<DataTable.Cell>
													Quadras alugadas
												</DataTable.Cell>
												<DataTable.Cell numeric>
													6
												</DataTable.Cell>
											</DataTable.Row>

											<DataTable.Row>
												<DataTable.Cell>
													Quadras canceladas
												</DataTable.Cell>
												<DataTable.Cell numeric>
													8.0
												</DataTable.Cell>
											</DataTable.Row>

											<DataTable.Row>
												<DataTable.Cell>
													Dinheiro investido
												</DataTable.Cell>
												<DataTable.Cell numeric>
													R$120,00
												</DataTable.Cell>
											</DataTable.Row>

											<DataTable.Row>
												<DataTable.Cell>
													Dinheiro economizado
												</DataTable.Cell>
												<DataTable.Cell numeric>
													R$25,50
												</DataTable.Cell>
											</DataTable.Row>
										</DataTable>
									</View>
									<Button
										style={[
											styles.textCenter,
											styles.my2,
											styles.textSecondary,
										]}
										disabled={userInfo === "unlogged"}
										onPress={() =>
											setShowLogoutDialog(
												!showLogoutDialog,
											)
										}
									>
										Fazer logout
									</Button>
								</View>
							</View>
						)}
					</View>
				</ScrollView>
			</View>
		</>
	)
}

export default AccPage
