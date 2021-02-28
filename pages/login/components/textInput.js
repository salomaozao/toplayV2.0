import React from "react"
import { TextInput } from "react-native-paper"

const Input = ({ label, isSecure, onPress, secret }) => {
	let pwIcon = isSecure ? "eye-off" : "eye"
	return (
		<TextInput
			mode="outlined"
			label={label}
			secureTextEntry={isSecure}
			style={[
				{ width: "80%", border: 0 },
				styles.mx4,
				styles.my4,
				styles.bg,
				styles.round,
				styles.shadowXl,
			]}
			right={
				secret ? <TextInput.Icon icon={pwIcon} onPress={onPress} /> : {}
			}
		/>
	)
}

export default TextInput
