import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ComponenteParaRenderizar(props) {

  console.log('estas son las props', props)

  return (
    <View style={styles.container}>
      <Text style={styles.txtOwner}>
        {/* //Logra que aparezca aqui el owner del twit */}
        {
          props.data.data.owner
        }
      </Text>
      <View>
        <Text  style={styles.txtDesc}>
          {/* //Logra que aparezca aqui la descripcion del twit */}
          {
            props.data.data.textoDoc
          }
        </Text>
      </View>
    </View>
  )
}
const styles =  StyleSheet.create({
  container:{
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#D3D3D3",
    marginHorizontal:16,
    marginVertical:8,
    padding:8
  },
  txtOwner:{
    color:"#484848",
    fontWeight: 600,
    marginBottom:8
  },
  txtDesc:{
    color:"#201f1f",
  }
})