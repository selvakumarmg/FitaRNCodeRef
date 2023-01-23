import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, HelperText } from 'react-native-paper'

const Login = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(true);

    const submit = () => {
        if (userName.length > 2 && password.length > 3) {
            alert('LoggedIn successfully')
        } else {
            alert('Invalid credentials')
        }
    }

    const hasUsernameError = () => {
        return userName.length < 4
    }
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ alignSelf: 'center', marginVertical: 20, fontSize: 20, color: 'blue' }}>Login</Text>
            <TextInput
                label='User name'
                mode='outlined'
                placeholder='Enter user name'
                style={{ backgroundColor: '#FFF' }}
                value={userName}
                underlineColorAndroid="transparent"
                onChangeText={(txt) => {
                    setUsername(txt)
                }}
            />
            <HelperText type="error" visible={hasUsernameError()}>
                Invalid user name
            </HelperText>
            <TextInput
                label='Password'
                mode='outlined'
                placeholder='Enter password'
                style={{ backgroundColor: '#FFF' }}
                value={password}
                secureTextEntry={visible}
                onChangeText={(txt) => {
                    setPassword(txt)
                }}
            />

            <Button mode='contained' onPress={() => submit()} style={{ marginTop: 20, width: 100, alignSelf: 'center' }}>Submit</Button>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})