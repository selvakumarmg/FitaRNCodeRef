import { View, Text, Button, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

const Home = () => {
    const dispatch = useDispatch();
    // const isAuth = false
   const isAuth = useSelector(state => state.AuthReducer.isAuth)

//   React.useEffect(()=>{
//     alert(JSON.stringify(isAuth))
//   },[])

  return (
    <View>
      <Text>Home</Text>
      <TouchableWithoutFeedback onPress={()=> dispatch({type:'IS_LOGGEDIN'})}>
        <View style={{height:30,width:100,backgroundColor:'blue'}}>
            <Text style={{alignSelf:'center',color:'#FFF'}}>{!isAuth ? 'Login' : 'Logout'}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Home