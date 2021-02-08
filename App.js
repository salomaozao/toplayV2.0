//basic shit
import React, { useState } from "react"
import "react-native-gesture-handler"

import { SafeAreaView } from "react-native"
import {
	DefaultTheme,
	Provider as PaperProvider,
	Colors,
} from "react-native-paper"

//navigation
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//pages
import Agendamentos from "./pages/agendamentos/index"
import Cadastro from "./pages/cadastro/index"
import ProductView from "./pages/productExibition/index"
import Acc from "./pages/acc/index"
import Login from "./pages/login/index"
import MainPage from "./pages/mainPage/index"

//admin pages
import Manager_PageUplaod from "./pages/manager/productUpload/index"
import Manager_MainPage from "./pages/manager/mainPage/index"
import Manager_ProductListing from "./pages/manager/productListing/index"

//components
import Footer from "./pages/generalComponents/footer"

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
	const { userData, setUserData } = useState({ username: "Gabriel Salomão" })
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

						<BottomTab.Screen name="login" component={Login} />

						<BottomTab.Screen
							name="agendamentos"
							component={Agendamentos}
						/>
						<BottomTab.Screen
							name="cadastro"
							component={Cadastro}
						/>

						<BottomTab.Screen
							name="termsAndConditions"
							component={Acc}
						/>

						<BottomTab.Screen
							name="manager_upload"
							component={Manager_PageUplaod}
						/>

						<BottomTab.Screen
							name="manager_mainPage"
							component={Manager_MainPage}
						/>

						<BottomTab.Screen
							name="manager_ProductListing"
							component={Manager_ProductListing}
						/>
					</BottomTab.Navigator>
				</PaperProvider>
			</NavigationContainer>
		</SafeAreaView>
	)
}

export default App
