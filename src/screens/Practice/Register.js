import {View, Text, Button} from 'react-native'

const Register =(props)=>{
    let name = 'Chandru'
    const {navigation} = props;
    return(
        <View>
            <Text>{name}</Text>
            <Button title="Go to Login" onPress={()=>console.log("Onlick")} />
        </View>
    )
}

export default Register;