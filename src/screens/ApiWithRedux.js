import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ApiWithRedux = () => {
    const dispatch = useDispatch();
    const userList = useSelector()

    const stringReverse = () => {
        const str = 'Hello';
        const temp = str.split('');
        let reverseArr = [];

        const someCom = useMemo(()=>{
            //
        },[value])

        let arr = [1, 2];
        arr[5] = 6;
        console.log(arr);

        for (let i = temp.length; i == 0; i--) {
            reverseArr.push(temp[i])
        }

        console.log(reverseArr.join())
    }

    const sum = (a, b) => {
        return a + b
    }

    const Calc = (type) => {
        if (type === 'add') {
            sum()
        }
    }

    Calc('add')


    useEffect(() => {
        axios.get('END_POINT').then((res) => {
            const { statusCode, data } = res;
            if (statusCode === 200 && data) {
                dispatch({ type: 'ADD_USER_LIST', payload: data })
            }
        }).catch(err => console.log(err))

        return () => {
            //unmount 
        }
    }, [])
    return (
        <View>
            <Text>ApiWithRedux</Text>
            {
                stringReverse()
            }
        </View>
    )
}

export default ApiWithRedux

const styles = StyleSheet.create({})