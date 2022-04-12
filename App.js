import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Title_Media from './src/components/Title_media/index';
import Title_Valores from './src/components/Title_valores/index';
import Header from './src/components/Header/index';
import Form_media from './src/content/Form_media/index';
import Form_valores from './src/content/Form_valores/index';
import Icones from './src/components/Icones/index';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (  
    <ScrollView>

      <Header/>

      <Title_Media/>

      <Form_media/>

      <Title_Valores/>

      <Form_valores/>

      <Icones/>

    </ScrollView>
  );
}


