import react from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Icones/style';


 function Airplay() {
  return (
    <View>
        <Text>Airplay!</Text>
    </View>
  );
}

function Search() {
    return(
        <View>
          <Text>Search!</Text>
        </View>
      );
}

function Chat() {
    return(
        <View>
        </View>
      );
}

function Profile() {
    return(
        <View>
          <Text>Profile!</Text>
        </View>
      );
}

function Settings() {
    return(
        <View>
          <Text>Settings!</Text>
        </View>
      );
}

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer style={styles.container}>
        
    <Tab.Navigator screenOptions={({ route }) => ({
		tabBarIcon: ({ color, size }) => {
			let iconName;

			switch (route.name) {
				case 'Airplay':
					iconName = 'airplay';
					break;
				case 'Search':
					iconName = 'search';
					break;
				case 'Chat':
					iconName = 'message-square';
					break;
				case 'Profile':
					iconName = 'user';
					break;
				case 'Settings':
					iconName = 'settings';
					break;
				default:
					iconName = 'circle';
					break;
			}

			return <Icon name={iconName} size={size} color={color} />;
		},
	})}
		tabBarOptions={{
		activeTintColor: 'orange',
		inactiveTintColor: 'black',

	}}>
      <Tab.Screen name="Airplay" component={Airplay}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Chat" component={Chat}/>
      <Tab.Screen name="Profile" component={Profile}/>
      <Tab.Screen name="Settings" component={Settings}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}


