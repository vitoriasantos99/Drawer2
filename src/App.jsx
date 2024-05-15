import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Produtos from './components/Produtos';
import SobreNos from './components/SobreNos';
import Contatos from './components/Contatos';

const Drawer = createDrawerNavigator();

export default props =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name='Home' component={Home}/>
                    <Drawer.Screen name='Produtos' component={Produtos}/>
                    <Drawer.Screen name='Contatos' component={Contatos}/>
                    <Drawer.Screen name='SobreNos' component={SobreNos}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}