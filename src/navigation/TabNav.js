import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome } from '@expo/vector-icons'
import ObtenerDatos from "../screens/ObtenerDatos"
import Actualizacion from '../screens/Actualizacion'
import CrearDatos from '../screens/CrearDatos'
const Tab = createBottomTabNavigator()

export default function TabNav() {
    return (
        <Tab.Navigator>
             <Tab.Screen
                name="crearDatos" 
                component={CrearDatos} 
                options={
                    { headerShown:false,
                      tabBarLabel: 'CrearDatos',
                      tabBarIcon: ()=> <FontAwesome name="home" size={24} color={"#3d3d3d"} /> }
                }/>
            <Tab.Screen
                name="obtenerDatos" 
                component={ObtenerDatos} 
                options={
                    { headerShown:false,
                      tabBarLabel: 'ObtenerDatos',
                      tabBarIcon: ()=> <FontAwesome name="home" size={24} color={"#3d3d3d"} /> }
                }/>
            <Tab.Screen 
                name='actualizacion'
                component={Actualizacion}
                options={
                    {headerShown:false,
                     tabBarLabel: 'ActualizarDatos',
                     tabBarIcon: ()=> <FontAwesome name="user" size={24} color={"#3d3d3d"} />}
                }/>
        </Tab.Navigator>
    )
}
