import React from "react"
import { TouchableOpacity } from "react-native"
import { Text } from "react-native-paper"

import styles from "../../../styles/styles"

const ImagesUploadBox = () => {
	const [imgs, setImgs] = React.useState([
		media.quadra1,
		media.quadra2,
		media.quadra3,
	])

	const ImgList = ({ imgsArr }) => {
		const [imgsCompArr, setImgCompArr] = React.useState([])

		let c = 0
		return (
			<Image
				style={{
					width: Dimensions.get("window").width * 0.1,
					height: width * 2,
				}}
			/>
		)
	}
	return (
		<TouchableOpacity
			style={[
				styles.my2,
				styles.centerSelf,
				styles.center,
				{
					width: "90%",
					height: 200,
					borderWidth: 4,
					borderStyle: "dashed",
					borderRadius: 1,
				},
			]}
			onPress={uploadImg}
		>
			<Icon name="camera" size={24} />
			<Text style={styles.titleSecondary}>Fazer upload de imagens!</Text>
		</TouchableOpacity>
	)
}

export default ImagesUploadBox
