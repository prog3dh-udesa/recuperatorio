import { Text, View, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { auth, db } from '../firebase/config'
import firebase from 'firebase'

export default class Influencers extends Component {
    constructor(props){
        super(props)
        this.state={
            documento: '',
            espectador: false
        }
    }
    componentDidMount(){
        db
        .collection('documentos')
        .onSnapshot(docs => {
          let arrDocs = []
          docs.forEach(doc => {
            arrDocs.push({
              id:doc.id,
              data:doc.data()
            })
          })

          this.setState({
            documento: arrDocs[0]
          })

        })

    }

    actualizarDocumento(){
      db
      .collection('documentos')
      .doc(this.state.documento.id)
      .update({
        viewers: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
      })
      .then(() => this.setState({espectador: true}))
    }

    quitarViewer(){
      db
      .collection('documentos')
      .doc(this.state.documento.id)
      .update({
        viewers: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
      })
      .then(() => this.setState({espectador: false}))

    }

    render() {
    return (
      <View>
        <Text>Actualizacion</Text>
        {
            this.state.documento !== '' 
            ?
            <View
                style={styles.container}
            >
                <Text style={styles.name}>{this.state.documento.data.textoDoc}</Text>
                {
                  this.state.espectador ? 
                  <TouchableOpacity
                    onPress={() => this.quitarViewer()}
                  >
                    <Text>Quitar usuario como Viewer</Text>
                  </TouchableOpacity>

                  :
                  <TouchableOpacity
                    onPress={() => this.actualizarDocumento()}
                  >
                    <Text>Actualizar este documento</Text>
                  </TouchableOpacity>

                }
            </View>
            : 
            <Text>Cargando Documento...</Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#D3D3D3",
        marginHorizontal:16,
        marginVertical:8,
        padding:8,
        alignItems:'center'
      },
      name:{
        color:"#484848",
        fontWeight: 600,
        marginBottom:8,
        textAlign:'center'
      },
      img:{
        width:70,
        height: 70,
        
      }
})