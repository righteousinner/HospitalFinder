import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
import { SafeAreaView } from 'react-native';

export default function TabNavigation() {
   const Tab = createBottomTabNavigator();
   return (
       <SafeAreaView style={{ flex: 1 }}>
           <Tab.Navigator screenOptions={{
               headerShown: false
           }}>
               <Tab.Screen name="Home" component={HomeNavigation} 
               options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                      <Ionicons name="home" color={color} size={size} />
                  ),
               }} />
               <Tab.Screen name="Search" component={Search}
               options={{
                  tabBarLabel: 'Search',
                  tabBarIcon: ({ color, size }) => (
                      <Ionicons name="search" color={color} size={size} />
                  ),
               }} />
           </Tab.Navigator>
       </SafeAreaView>
   )
}