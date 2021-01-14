import React, { useState } from "react"
import { View, Dimensions } from "react-native"
import { TextInput, IconButton } from "react-native-paper"
import styles from "../../../styles/styles"

const InfoInpt = ({
	label,
	value,
	isDisabled,
	secured = false,
	icon = null,
	validationProccess = () => true,
}) => {
	const [stateValue, setValue] = useState(value)
	const [isSecuredHidden, setsecuredHidden] = useState(true)
	const definedIcon = icon !== null ? icon : ["eye", "eye-off"]

	return (
		<View style={secured ? styles.row : {}}>
			<TextInput
				style={[
					styles.mx4,
					styles.my2,
					styles.textCenter,
					{
						alignSelf: "stretch",
						width: secured
							? Dimensions.get("window").width * 0.8
							: null,
					},
				]}
				mode="outlined"
				label={label}
				value={stateValue}
				onKeyPress={(text) => setValue(text)}
				secureTextEntry={secured ? isSecuredHidden : false}
				disabled={isDisabled}
			/>

			{secured ? (
				<View
					style={[
						styles.center,
						{
							position: "relative",
							right: -5,
							top: 5,
							width: Dimensions.get("window").width * 0.05,
						},
					]}
				>
					<IconButton
						icon={isSecuredHidden ? definedIcon[1] : definedIcon[0]}
						onPress={() => setsecuredHidden(!isSecuredHidden)}
						disabled={isDisabled}
						size={20}
					></IconButton>
				</View>
			) : (
				<></>
			)}
		</View>
	)
}

export default InfoInpt
