import React from 'react';
import { Formik } from 'formik';

import { 
  View,
  Text,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Image,
  TextInput,
  StyleSheet
  } from 'react-native';
import Register from '../Register';

export default function Home({ navigation }) {
 return (
  <KeyboardAvoidingView style={styles.background}>
    <View  styles={styles.containerLogo}> 
       <Image
       source={require('../../assets/logo.png')} 
       />
    </View>

    <View  style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder = "Email"
        autoCorrect={false}
        onChangeText={()=>{}}
        autoCapitalize='none'
      />
    <TextInput
        style={styles.input}
        placeholder = "Senha"
        autoCorrect={false}
        onChangeText={()=>{}}
    />


    <TouchableOpacity style={styles.btnSubmit} onPress={() => {}}>
        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Cadastrar</Text>
      </TouchableOpacity>
 
    </View>
      



      
  </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#C9C8BF'
  },
  containerLogo:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width: '90%',
    paddingBottom: 65,
    },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color:'#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: '#5AF29C',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 7,
  },
  submitText:{
    color:'#404040',
    fontSize: 18
  },
  btnRegister:{
    marginTop:10,
  },
  registerText:{
    color:'#404040'
    
  }

});

