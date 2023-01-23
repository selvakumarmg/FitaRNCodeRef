const initialState = {
    isAuth: false
}


export default AuthReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'IS_LOGGEDIN':{
            // alert(!state.isAuth)
            return {...state, isAuth:!state.isAuth}
        }
        default:
            break
    }

    return state;
}

// print numbers from 1 to 100, 
// but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5
//  and lastly print “FizzBuzz” for multiples of three and five :
