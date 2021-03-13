//basic shit
import * as React from "react"
import { IconButton, Surface, Colors } from "react-native-paper"

const userId = "0000"

const BottomNavItem = ({ icon, title, navigation, route, userId }) => (
	<IconButton
		icon={icon}
		onPress={() => navigation.navigate(route, { ...userId })}
		color={Colors.grey300}
	/>
)

const BottomNavItemGroup = ({ navigation }) => (
	<Surface style={{ justifyContent: "space-around", flexDirection: "row" }}>
		<BottomNavItem
			icon="a"
			navigation={navigation}
			route="test"
			userId={userId}
		/>
		<BottomNavItem
			icon="home"
			navigation={navigation}
			route="main"
			userId={userId}
		/>
		<BottomNavItem
			icon="account"
			navigation={navigation}
			route="acc"
			userId={userId}
		/>
	</Surface>
)

export default BottomNavItemGroup
