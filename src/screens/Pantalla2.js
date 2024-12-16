import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { auth } from '../firebase/config'

export default class Pantalla2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  login(email, password){
    auth.signInWithEmailAndPassword(email, password)
    .then(()=> {
      this.props.navigation.navigate('tabnav')
    })
  }


  render() {
    return (
      <View  style={styles.container}>
        <View style={styles.boxRegister}>
          <Text style={styles.title}>Pantalla 2</Text>
          <View>
              <View>
                  <TextInput
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                    style={styles.input}

                  />
              </View>
              <View>
                  <TextInput
                    onChangeText={(text)=> this.setState({password: text}) }
                    value={this.state.password}
                    style={styles.input}
                  />
              </View>
          </View>
          <View>
              <TouchableOpacity 
                onPress={() => this.login(this.state.email, this.state.password)}
                style={styles.btn}
              >
                <Text style={styles.btnTxt}>
                  Loguearme
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:'100%'
  },
  boxRegister:{
      width:'80%'
  },
  title:{
      fontSize:24,
      fontWeight:600,
      textAlign:'center',
      marginBottom: 16
  },
  input:{
      borderColor: '#D3D3D3',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom:16,
      height:24,
      paddingLeft:8
  },
  btn:{
      backgroundColor: '#419a21',
      paddingVertical:8,
  },
  btnTxt:{
      textAlign: 'center',
      color:'white'
  }
})