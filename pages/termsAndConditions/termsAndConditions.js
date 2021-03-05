import React from "react"
import { View, ScrollView, Image } from "react-native"
import {
	Text,
	Surface,
	Checkbox,
	Button,
	Banner,
	Colors,
} from "react-native-paper"

import styles from "../styles/styles"
import media from "../../media/media"

const termsAndConditions = ({ navigation }) => {
	const [isChecked, setChecked] = React.useState(false)
	const [isBannerOn, setBanner] = React.useState(false)
	return (
		<>
			<Banner
				visible={isBannerOn}
				style={isBannerOn && { paddingTop: 15 }}
				actions={[
					{
						label: (
							<Text
								style={{
									color: Colors.green400,
									fontWeight: "bold",
								}}
							>
								OK!
							</Text>
						),
						onPress: () => setBanner(false),
					},
				]}
			>
				Você deve confirmar os usos para usar o App!
			</Banner>
			<View
				style={{
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
							alignItems: "center",
							width: "100%",
							height: "100%",
							paddingTop: 15,
							backgroundColor: "rgba(107, 107, 107, 0.8)",
						},
					]}
				>
					<Text
						style={[
							styles.title,
							styles.my4,
							{ textAlign: "center" },
						]}
					>
						TERMOS E CONDIÇÕES
					</Text>
					<Surface
						style={[
							styles.my4,
							styles.shadowLg,
							styles.p1,
							styles.round,
							{ width: "80%", height: "40%" },
						]}
					>
						<ScrollView>
							<Text
								style={[
									styles.textCenter,
									styles.textLight,
									styles.p1,
								]}
							>
								Lorem ipsum dolor sit amet, consectetur adi
								elit.Suspendisse a justo rutrum, com rpis eu,
								eleifend dui.Nunc dapibus, t it amet interdum
								ultrices, lectu rhoncus turpis, sit amet
								vulputat x a dolor.Aliquam dictum augue eu sa
								rius dapibus.Nunc feugiat est et interdum
								mattis.Fusce lobortis augue ut nisi bland
								hendrerit.Vivamus non justo ac neque gra
								hendrerit in sollicitudin massa.Ut v diam et
								rutrum pharetra.Pellentesqu nibus orci.In hac
								habitasse platea d .Class aptent taciti sociosqu
								ad li rquent per conubia nostra, per ince
								menaeos.Suspendisse potenti.Curabitur in
								tincidunt augue.Praesent est ante, consectetur
								sed scelerisque vel, fringilla et neque.Maecenas
								pulvinar vitae leo nec porttitor. Lorem ipsum
								dolor sit amet, consectetur adi elit.Suspendisse
								a justo rutrum, com rpis eu, eleifend dui.Nunc
								dapibus, t it amet interdum ultrices, lectu
								rhoncus turpis, sit amet vulputat x a
								dolor.Aliquam dictum augue eu sa rius
								dapibus.Nunc feugiat est et interdum
								mattis.Fusce lobortis augue ut nisi bland
								hendrerit.Vivamus non justo ac neque gra
								hendrerit in sollicitudin massa.Ut v diam et
								rutrum pharetra.Pellentesqu nibus orci.In hac
								habitasse platea d .Class aptent taciti sociosqu
								ad li rquent per conubia nostra, per ince
								menaeos.Suspendisse potenti.Curabitur in
								tincidunt augue.Praesent est ante, consectetur
								sed scelerisque vel, fringilla et neque.Maecenas
								pulvinar vitae leo nec porttitor.
							</Text>
						</ScrollView>
					</Surface>
					<View style={styles.center}>
						<Text style={[styles.my2, { color: "black" }]}>
							Eu lí e aceito os termos e condições citados acima.
						</Text>

						<Surface
							style={[styles.shadowMd, { borderRadius: 100 }]}
						>
							<Checkbox
								status={isChecked ? "checked" : "unchecked"}
								onPress={() => setChecked(!isChecked)}
							/>
						</Surface>
						<View style={styles.mt2}>
							<Button
								labelStyle={{ color: Colors.green400 }}
								onPress={
									isChecked
										? () => {
												navigation.navigate("main")
										  }
										: () => {
												setBanner(true)
										  }
								}
							>
								Terminar cadastro!
							</Button>
						</View>
					</View>
				</View>
			</View>
		</>
	)
}

export default termsAndConditions
