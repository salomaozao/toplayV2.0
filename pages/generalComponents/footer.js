//basic shit
import * as React from "react"
import { IconButton, Surface, Colors } from "react-native-paper"

const BottomNavItem = ({ icon, title, navigation, route }) => (
	<IconButton
		icon={icon}
		onPress={() => navigation.navigate(route)}
		color={Colors.grey300}
	/>
)

const BottomNavItemGroup = ({ navigation }) => (
	<Surface style={{ justifyContent: "space-around", flexDirection: "row" }}>
		<BottomNavItem
			icon="a"
			navigation={navigation}
			route="termsAndConditions"
		/>
		<BottomNavItem icon="home" navigation={navigation} route="main" />
		<BottomNavItem icon="account" navigation={navigation} route="acc" />
	</Surface>
)

export default BottomNavItemGroup
