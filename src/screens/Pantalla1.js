import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import {auth, db} from '../firebase/config'

export default class Pantalla1 extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxPantalla1}>
            <Text style={styles.title}>Pantalla 1</Text>
            
            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('pantalla2')}
                    style={styles.btn}
                >
                    <Text style={styles.btnTxt} >
                        Ir a la Pantalla 2
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('pantalla3')}
                    style={styles.btn}
                >
                    <Text style={styles.btnTxt} >
                        Ir a la Pantalla 3
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
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
    boxPantalla1:{
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