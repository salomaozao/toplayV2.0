//basic shit
import * as React from "react"
import "react-native-gesture-handler"

import { View, Dimensions, SafeAreaView, Platform } from "react-native"
import {
	DefaultTheme,
	Text,
	IconButton,
	Provider as PaperProvider,
	Colors,
	Button,
	Surface,
} from "react-native-paper"

//navigation
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//pages
import Agendamentos from "./pages/agendamentos/index"
import Cadastro from "./pages/cadastro/index"
import ProductView from "./pages/productExibition"
import Acc from "./pages/acc/index"
import MainPage from "./pages/mainPage/index"

//components
import Footer from "./pages/generalComponents/footer"

import styles from "./pages/styles/styles"

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.blue500,
		accent: Colors.green300,
		// background: Colors.green900,
		surface: Colors.grey800,
		text: Colors.grey700,
	},
}

const BottomTab = createBottomTabNavigator()

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				<PaperProvider theme={theme}>
					<BottomTab.Navigator
						lazy={false}
						tabBar={({ navigation }) => (
							<Footer navigation={navigation} />
						)}
					>
						<BottomTab.Screen name="main" component={MainPage} />

						<BottomTab.Screen
							name="product"
							component={ProductView}
						/>

						<BottomTab.Screen name="acc" component={Acc} />
						<BottomTab.Screen
							name="cadastro"
							component={Cadastro}
						/>
					</BottomTab.Navigator>
				</PaperProvider>
			</NavigationContainer>
		</SafeAreaView>
	)
}

export default App
