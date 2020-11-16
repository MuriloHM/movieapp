import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { 
    StyleSheet,
    TouchableOpacity,
    View,
    TextInput,
    Text,
    Image,
    ActionSheetIOS
     } from 'react-native';
    
const RegisterSchema = Yup.object({
    nome: Yup.string()
    .required()
    .min(5),
    nickname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Required'),
    password: Yup.string()
    .required()
    .min(4)
    .max(24),

})

export default function Register(){

    return(
   
       <View style={styles.background}>
             <View  styles={styles.containerLogo}> 
                <Image
                    source={require('../../assets/logo.png')} 
                />
            </View>
            
            <Formik
                initialValues={{nome: '',nickname: '',email: '',password: '' }}
                validationSchema={RegisterSchema}
                onSubmit={(values)=>{
                    console.log(values);

                }}
                            
            >
         
            {(props)=>(
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome Completo'
                        onChangeText={props.handleChange('nome')}
                        value={props.values.nome}
                        autoCapitalize='words'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Nickname'
                        onChangeText={props.handleChange('nickname')}
                        value={props.values.nickname}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        onChangeText={props.handleChange('password')}
                        value={props.values.password}
                        
                    />
                    <TouchableOpacity onPress={props.handleSubmit} style={styles.btnSubmit}>
                        <Text style={styles.registerText}>Enviar</Text>
                    </TouchableOpacity>

                </View>
            )}
            </Formik>   
          
        </View>

  );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C9C8BF'
      },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width: '90%',
        paddingBottom: 50
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
      

    });