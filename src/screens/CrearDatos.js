import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'
export default class CrearDatos extends Component {
  constructor(props){
    super(props)
    this.state = {
      textoDoc:''
    }
  }

  componentDidMount(){
  }

  crearDocumento(){
    db
    .collection('documentos')
    .add({
      owner: auth.currentUser.email,
      createdAt: Date.now(),
      textoDoc: this.state.textoDoc,
      viewers:[]
    })
  }
  

  render(){
    return (
      <View>
        <TextInput />
        <TouchableOpacity>
          <Text>Crear nuevo documento</Text>
          <View>
            <View>
              <TextInput
                onChangeText={(text) => this.setState({textoDoc: text})}
                value={this.state.textoDoc}
                style={styles.input}
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.crearDocumento()}
            >
              <Text style={styles.btnTxt}>Crear Documento</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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