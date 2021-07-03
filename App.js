import React from 'react';
import{StyleSheet,Text,View,Image} from 'react-native';
import{createAppContainer} from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreens from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'

import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

const TabNavigator = createBottomTabNavigator({
    Transaction: {screen: TransactionScreen},
    Search: {screen: SearchScreen},
})