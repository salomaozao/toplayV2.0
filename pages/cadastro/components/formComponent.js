import React from "react"
import { View } from "react-native"
import { Text } from "react-native-paper"

import FormInput from "./formInput"
import FormCheck from "./formComponentCheck"
import styles from "../../styles/styles"

const FormInputZone = ({ content, display }) => {
	return (
		<View
			style={[
				styles.center,
				{
					display: display ? "flex" : "none",
				},
			]}
		>
			<View style={[styles.my4]}>
				<Text style={[styles.title, styles.textCenter]}>
					{content[0].mainTitle}
				</Text>

				<Text style={[styles.mt2]}>{content[0].desc}</Text>
			</View>

			<View>
				<FormInput
					title={content[1].title}
					placeholder={content[1].placeholder}
				/>

				<FormInput
					title={content[2].title}
					placeholder={content[2].placeholder}
				/>
			</View>
		</View>
	)
}

const formFase = ({ type, content, display }) => {
	if (type === "input") {
		return <FormInputZone content={content} display={display} />
	} else if (type === "check") {
		return (
			<View
				style={[
					styles.mx4,
					{ display: display ? "flex" : "none" },
					styles.centerX,
				]}
			>
				<Text style={[styles.title, styles.my2, styles.textCenter]}>
					{content.title}
				</Text>
				<Text style={styles.textCenter}>{content.text}</Text>
				<View style={[styles.mt4, styles.center]}>
					<FormCheck></FormCheck>
				</View>
			</View>
		)
	} else return null
}

export default formFase
