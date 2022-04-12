import { StyleSheet } from 'react-native'
import Position from 'react-native/Libraries/Components/Touchable/Position';
import { Sticky } from 'react-sticky';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create( {

    header:{
        
        
        alignItems:'center',
        justifyContent:'center',
        height: "60%",
        width: "100%",

      },
  
    text:{
        fontSize:50,
        fontWeight:'bold',
        color:'white',
        width:"100%",
        textAlign:'center',
        height:1,
        padding:100,
      },

    LinearGradient:{
        height:150,
        


    }
  
  });

  export default styles