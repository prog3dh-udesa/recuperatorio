import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pantalla1 from "../screens/Pantalla1";
import Pantalla2 from "../screens/Pantalla2";
import Pantalla3 from "../screens/Pantalla3";
import TabNav from "./TabNav";

const Stack = createNativeStackNavigator()

export default function MainNav (){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="pantalla1" 
                    component={Pantalla1} 
                    options={ {headerShown:false} }
                    />
                <Stack.Screen 
                    name="pantalla2" 
                    component={Pantalla2} 
                    options={ {headerShown:false} } 
                    />
                <Stack.Screen 
                name="pantalla3" 
                component={Pantalla3} 
                options={ {headerShown:false} } 
                />
                <Stack.Screen 
                    name="tabnav" 
                    component={TabNav} 
                    options={{headerShown:false}} 
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}