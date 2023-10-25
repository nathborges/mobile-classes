import { NavigationContainer } from "@react-navigation/native";
import Comanda from "./screens/Comanda";
import Login from "./screens/login";
import Produtos from "./screens/Produtos";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider> 
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Comanda" component={Comanda} />
        <Stack.Screen name="Produtos" component={Produtos} />
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
