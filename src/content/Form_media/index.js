import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'

import ResultMedia from '../Result_media/index'//importando compónente
import styles from './style'; //importando o style

export default function Form_media () {

    const [Media1, setMedia1]= useState(null)
    const [Media2, setMedia2]= useState(null)
    const [Media3, setMedia3]= useState(null)
    const [messageMedia, setMessageMedia]= useState("Preencha as notas acima.");
    const [Media, setMedia]= useState(null)
    const [TextButton, setTextButton]= useState("Calcular");
    
    function mediaCalculator(){

      // return setMedia ((Media/(Media1 + Media2 + Media3)).toFixed(3))  

      return setMedia ((Media(Media1 + Media2 + Media3)/3).toFixed(3))

    }
 
    //veriifcar se as media estão vazias 

    function validationMedia() {

      if(Media1 != null  && Media2 !=null && Media3 !=null){

        mediaCalculator()
        setMedia1(null)
        setMedia2(null)
        setMedia3(null)
        setMessageMedia("Sua media é igual:")
        setTextButton("Calcular Novamente")
        return

        }

        setMedia(null)
        setTextButton("Calcular")
        setMessageMedia("preencha os campos")
    }

    return (

      <View style={styles.formContext}>
            <View style={styles.form}>


                 {/*campo de digitar*/}
                 <TextInput 
                 style={styles.input}
                 onChangeText={setMedia1}
                 value={Media1}
                 placeholder='Digite a primeira nota.'
                 keyboardType='numeric'//determinado o tipo de teclado
                 
                 />
                 
                 
                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setMedia2}
                   value={Media2}
                   placeholder='Digite a segunda nota.'
                   keyboardType='numeric'//determinado o tipo de teclado

                 />

                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={setMedia3}
                   value={Media3}
                   placeholder='Digite a terceira nota.'
                   keyboardType='numeric'//determinado o tipo de teclado

                 />
               
                 {/*botãos com efeito*/}
                 <TouchableOpacity 
                    style={styles.buttonCalculator}
                    onPress={() =>{
                      validationMedia()
                    }}
                 >

                 {/*texto dentro do botão*/}  
                 <Text style={styles.textbuttonCalculator}>{TextButton}</Text>
                 
                 </TouchableOpacity>
                 
            </View> 

           {/*resultado do imc*/}
           <ResultMedia messageResultMedia={messageMedia} ResultMedia={Media}/> 

      </View>

    );
  }