import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const GestureComponent = () => {

  const HocComponent =(WrapperComponent)=>{
    return()=>{
      return(
        <TouchableWithoutFeedback onPress={()=> alert('I am HOC applied')}>
          <View style={{borderWidth:1, padding:10,borderColor:'green'}}>
            <WrapperComponent {...props} />
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }

  const ChildComponent=({name})=>{
    return(
      <View>
        <Text>{name}</Text>
      </View>
    )
  }

  const WrapperWithHOC = HocComponent(ChildComponent)

  return (
    <View>
      <Text>GestureComponent</Text>
      <WrapperWithHOC 
       name="Hi "
      />
    </View>
  )
}

export default GestureComponent

const styles = StyleSheet.create({})