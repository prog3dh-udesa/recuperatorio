import { Text, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'
import ComponenteParaRenderizar from '../components/ComponenteParaRenderizar'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
          documentos: '',
        }
    }

    componentDidMount(){
      db
      .collection('documentos')
      .onSnapshot(( docs )=> {
        let arrDocs = []
        docs.forEach((doc) => {
          arrDocs.push({
            id: doc.id,
            data: doc.data()
          })
        })

        this.setState({
          documentos: arrDocs
        })
      })
    }


  render() {
    return (
      <View>
        <Text>Home</Text>
        {
          this.state.documentos !== ''
          ?
          <FlatList
            data={this.state.documentos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={ ( { item } ) => <ComponenteParaRenderizar data={item} />}
          />
          :
          <Text>Cargando...</Text>
        }
      </View>
    )
  }
}