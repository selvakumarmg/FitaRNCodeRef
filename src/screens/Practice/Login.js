import { View, Text, Button } from 'react-native'
import React from 'react'

const Login = (props) => {
    const { navigation } = props;
  return (
    <View>
      <Text>Login</Text>
      <Button title="Go to Register" onPress={()=>navigation.navigate('Register')} />
    </View>
  )
}

export default Login