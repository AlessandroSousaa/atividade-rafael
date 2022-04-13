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

function Send() {
    return(
        <View>
          <Text>Send!</Text>
        </View>
      );
}

function Code() {
    return(
        <View>
        </View>
      );
}

function Users() {
    return(
        <View>
          <Text>Users!</Text>
        </View>
      );
}

function Bookmark() {
    return(
        <View>
          <Text>Bookmark!</Text>
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
          case 'Send':
            iconName = 'send';
					break;
          case 'Code':
            iconName = 'code';
					break;
          case 'Users':
            iconName = 'users';
					break;
          case 'Bookmark':
            iconName = 'bookmark';
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
      <Tab.Screen name="Send" component={Send}/>
      <Tab.Screen name="Code" component={Code}/>
      <Tab.Screen name="Users" component={Users}/>
      <Tab.Screen name="Bookmark" component={Bookmark}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}


